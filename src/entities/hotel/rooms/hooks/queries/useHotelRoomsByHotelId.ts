import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelRoomsByHotelIdQuery } from "../../schema/queries/hotelRooms";
import {
  HotelRoomsByHotelIdQuery,
  HotelRoomFragmentFragment,
} from "@/shared/graphql/graphql";
import { useHotelRoomsStore } from "../../store";
export function useHotelRoomsByHotelId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { setHotelRooms } = useHotelRoomsStore();
  const { data, isLoading, error } = useSuspenseQuery<
    HotelRoomsByHotelIdQuery,
    Error
  >({
    queryKey: ["hotelRoomsByHotelId", orgId],
    queryFn: async () => {
      const response = await requestAPI<HotelRoomsByHotelIdQuery>(
        hotelRoomsByHotelIdQuery,
        {
          hotelId: orgId,
        }
      );
      setHotelRooms(
        response.hotelRoomsByHotelId as HotelRoomFragmentFragment[]
      );
      return response;
    },
  });
  return {
    rooms: data?.hotelRoomsByHotelId as HotelRoomFragmentFragment[],
    isLoading,
    error,
  };
}
