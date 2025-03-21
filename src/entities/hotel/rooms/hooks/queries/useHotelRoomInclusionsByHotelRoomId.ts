import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelRoomInclusionsByHotelRoomIdQuery } from "../../schema/queries/hotelRoomInclusions";
import { HotelRoomInclusionsByHotelRoomIdQuery } from "@/shared/graphql/graphql";
import { useHotelRoomInclusionsStore } from "../../store";
import { HotelRoomInclusion } from "../../types";
export function useHotelRoomInclusionsByHotelRoomId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { setHotelRoomInclusions } = useHotelRoomInclusionsStore();
  const { data, isLoading, error } = useSuspenseQuery<
    HotelRoomInclusionsByHotelRoomIdQuery,
    Error
  >({
    queryKey: ["hotelRoomInclusionsByHotelRoomId", orgId],
    queryFn: async () => {
      const response = await requestAPI<HotelRoomInclusionsByHotelRoomIdQuery>(
        hotelRoomInclusionsByHotelRoomIdQuery,
        {
          hotelRoomId: orgId,
        }
      );
      setHotelRoomInclusions(
        response.hotelRoomInclusionsByHotelRoomId as HotelRoomInclusion[]
      );
      return response;
    },
  });
  return {
    inclusions: data?.hotelRoomInclusionsByHotelRoomId as HotelRoomInclusion[],
    isLoading,
    error,
  };
}
