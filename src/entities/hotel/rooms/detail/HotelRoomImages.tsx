import { Input } from "@/components/ui/input";
import Image from "next/image";
import { PhotoView } from "react-photo-view";
import { Trash2, Upload } from "lucide-react"; // Importing an icon
import { useRef } from "react";
import { getPresignedUrl } from "@/shared/utils";
import { useHotelRoomImagesStore } from "../store";
import { Button } from "@/components/ui/button";

type Props = {
  hotelId: string;
  onUploadHotelRoomImage: (
    fileName: string,
    fileType: string,
    key: string,
    url: string
  ) => void;
  onDeleteHotelImage: (id: string) => void;
};
export function HotelRoomImages({
  hotelId,
  onUploadHotelRoomImage,
  onDeleteHotelImage,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { hotelRoomImages } = useHotelRoomImagesStore();
  const MAX_FILE_SIZE_MB = 5;

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      try {
        const sanitizedFileName = selectedFile.name.replace(/\s+/g, "_");
        const presignedUrl = await getPresignedUrl(
          sanitizedFileName,
          selectedFile.type,
          hotelId
        );

        const xhr = new XMLHttpRequest();
        xhr.open("PUT", presignedUrl, true);
        xhr.setRequestHeader("Content-Type", selectedFile.type);

        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const progress = (event.loaded / event.total) * 100;
            console.log(`Upload progress: ${progress}%`);
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            const imageUrl = URL.createObjectURL(selectedFile);
            onUploadHotelRoomImage(
              sanitizedFileName,
              selectedFile.type,
              `${hotelId}/${sanitizedFileName}`,
              imageUrl
            );
          } else {
            throw new Error(xhr.responseText);
          }
        };

        xhr.onerror = () => {
          throw new Error(xhr.responseText);
        };

        xhr.send(selectedFile);
      } catch (error) {
        throw new Error("Error uploading file:", error as Error);
      }
    }
  };
  return (
    <>
      <label
        htmlFor="hotelImages"
        className="text-lg font-medium text-gray-700"
      >
        Hotel Images
      </label>

      <div className="flex flex-col border border-gray-400 rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          {hotelRoomImages.map((urls) => (
            <div key={urls.id}>
              <PhotoView src={urls.url}>
                <Image
                  src={urls.url}
                  alt=""
                  width={150}
                  height={150}
                  className="rounded-xl"
                />
              </PhotoView>
              <Button
                className=" mt-2"
                onClick={() => onDeleteHotelImage(urls.id)}
                variant={"ghost"}
              >
                <Trash2 className="w-5 h-5" color="red" />
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center mt-4">
          {/* Hidden File Input */}
          <Input
            id="hotelImages"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Styled Upload Button */}
          <label
            htmlFor="hotelImages"
            className="flex items-center justify-center gap-2 cursor-pointer px-4 py-2 bg-primary text-white font-medium rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            <Upload className="w-5 h-5" />
            Upload Images
          </label>
        </div>
      </div>
    </>
  );
}
