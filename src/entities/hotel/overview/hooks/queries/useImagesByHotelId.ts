import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { imagesByHotelIdQuery } from "../../schema/queries/imagesByHotelId";
import { FilesByHotelIdQuery } from "@/shared/graphql/graphql";
import { useHotelImagesStore } from "../../store";
import { Images } from "../../types/types";
export function useImagesByHotelId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { setHotelImages } = useHotelImagesStore();
  const { data, isLoading, error } = useSuspenseQuery<
    FilesByHotelIdQuery,
    Error
  >({
    queryKey: ["imagesByHotelId", orgId],
    queryFn: async () => {
      const response = await requestAPI<FilesByHotelIdQuery>(
        imagesByHotelIdQuery,
        {
          hotelId: orgId,
        }
      );
      setHotelImages(response.filesByHotelId as Images[]);
      return response;
    },
  });
  return {
    urls: data?.filesByHotelId as Images[],
    isLoading,
    error,
  };
}
