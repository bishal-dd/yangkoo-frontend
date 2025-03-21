"use client";
import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import UpdateInput from "@/shared/ui/UpdateInput";
import {
  useHotelRoom,
  useImagesByHotelRoomId,
  useUpdateHotelRoom,
} from "../hooks";
import { useParams } from "next/navigation";
import { useCreateFile, useDeleteFile } from "@/shared/hooks";
import { HotelRoomImages } from "./HotelRoomImages";
import { useHotelRoomImagesStore } from "../store";

export const RoomDetail = () => {
  const params = useParams();
  const roomId = String(params?.roomId); // Ensure the key matches the dynamic segment in your route
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";
  const { room, isLoading } = useHotelRoom(roomId);
  const { updateHotelRoom } = useUpdateHotelRoom();
  const { createFileAsync } = useCreateFile();
  const { isLoading: isLoadingImages } = useImagesByHotelRoomId(roomId);
  const { addHotelRoomImage, deleteHotelRoomImage } = useHotelRoomImagesStore();
  const { deleteFile } = useDeleteFile();

  const onUpdateRoomType = (roomType: string) => {
    updateHotelRoom({
      id: roomId,
      room_type: roomType,
    });
  };

  const onUpdateBedType = (bedType: string) => {
    updateHotelRoom({
      id: roomId,
      bed_type: bedType,
    });
  };
  const onUpdateCapacity = (capacity: string) => {
    updateHotelRoom({
      id: roomId,
      capacity: Number(capacity),
    });
  };
  const onUpdateSize = (size: string) => {
    updateHotelRoom({
      id: roomId,
      size: Number(size),
    });
  };
  const onUpdateQuantity = (quantity: string) => {
    updateHotelRoom({
      id: roomId,
      quantity: Number(quantity),
    });
  };

  const onUploadHotelRoomImage = async (
    fileName: string,
    fileType: string,
    key: string,
    url: string
  ) => {
    const file = await createFileAsync({
      caption: fileName,
      mimetype: fileType,
      file_key: key,
      file_type: fileType,
      hotel_room_id: roomId,
    });
    addHotelRoomImage({
      id: file.id,
      url: url,
    });
  };

  const onDeleteHotelRoomImage = (id: string) => {
    deleteHotelRoomImage(id);
    deleteFile(id);
  };
  if (!orgLoaded || isLoading || isLoadingImages) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 bg-gray-100 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Room Detail</h1>
      <div className="w-full max-w-md space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="roomType"
            className="text-lg font-medium text-gray-700"
          >
            Room Type
          </label>
          <UpdateInput
            id="roomType"
            name="roomType"
            value={room.room_type}
            onChange={onUpdateRoomType}
            placeholder="Enter Room Type"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-row gap-10">
          <div>
            <label
              htmlFor="bedType"
              className="text-lg font-medium text-gray-700"
            >
              Bed Type
            </label>
            <UpdateInput
              id="bedType"
              name="bedType"
              value={room.bed_type}
              onChange={onUpdateBedType}
              placeholder="Enter Bed Type"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="capacity"
              className="text-lg font-medium text-gray-700"
            >
              Capacity
            </label>
            <UpdateInput
              id="capacity"
              name="capacity"
              value={String(room.capacity)}
              onChange={onUpdateCapacity}
              placeholder="Capacity"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div>
            <label htmlFor="size" className="text-lg font-medium text-gray-700">
              Size
            </label>
            <UpdateInput
              id="size"
              name="size"
              value={String(room.size)}
              onChange={onUpdateSize}
              placeholder="Enter Size"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="text-lg font-medium text-gray-700"
            >
              Quantity
            </label>
            <UpdateInput
              id="quantity"
              name="quantity"
              value={String(room.quantity)}
              onChange={onUpdateQuantity}
              placeholder="Quantity"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <HotelRoomImages
            onUploadHotelRoomImage={onUploadHotelRoomImage}
            hotelId={orgId}
            onDeleteHotelImage={onDeleteHotelRoomImage}
          />
        </div>
      </div>
    </div>
  );
};
