import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelRoomQuery } from "../../schema/queries/hotelRoom";
import {
  HotelRoomQuery,
  HotelRoomFragmentFragment,
} from "@/shared/graphql/graphql";
export function useHotelRoom(orgId: string) {
  const requestAPI = useRequestAPI();
  const { data, isLoading, error } = useSuspenseQuery<HotelRoomQuery, Error>({
    queryKey: ["hotelRoom", orgId],
    queryFn: async () => {
      const response = await requestAPI<HotelRoomQuery>(hotelRoomQuery, {
        id: orgId,
      });
      return response;
    },
  });
  return {
    room: data?.hotelRoom as HotelRoomFragmentFragment,
    isLoading,
    error,
  };
}
