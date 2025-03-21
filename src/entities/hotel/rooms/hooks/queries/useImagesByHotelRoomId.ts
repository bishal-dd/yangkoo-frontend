import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { imagesByHotelRoomIdQuery } from "../../schema/queries/imagesByHotelRoomId";
import { FilesByHotelRoomIdQuery } from "@/shared/graphql/graphql";
import { useHotelRoomImagesStore } from "../../store";
import { Images } from "../../types";
export function useImagesByHotelRoomId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { setHotelRoomImages } = useHotelRoomImagesStore();
  const { data, isLoading, error } = useSuspenseQuery<
    FilesByHotelRoomIdQuery,
    Error
  >({
    queryKey: ["imagesByHotelRoomId", orgId],
    queryFn: async () => {
      const response = await requestAPI<FilesByHotelRoomIdQuery>(
        imagesByHotelRoomIdQuery,
        {
          hotelRoomId: orgId,
        }
      );
      setHotelRoomImages(response.filesByHotelRoomId as Images[]);
      return response;
    },
  });
  return {
    urls: data?.filesByHotelRoomId as Images[],
    isLoading,
    error,
  };
}
