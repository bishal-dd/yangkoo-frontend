import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelRoomPriceByHotelRoomPriceSeasonIdQuery } from "../../schema/queries/hotelRoomPrice";
import { HotelRoomPriceByHotelRoomPriceSeasonIdQuery } from "@/shared/graphql/graphql";
import { HotelRoomPrice } from "../../types";
export function useHotelRoomPriceByHotelRoomPriceSeasonId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { data, isLoading, error } = useSuspenseQuery<
    HotelRoomPriceByHotelRoomPriceSeasonIdQuery,
    Error
  >({
    queryKey: ["hotelRoomPriceByHotelRoomPriceSeasonId", orgId],
    queryFn: async () => {
      const response =
        await requestAPI<HotelRoomPriceByHotelRoomPriceSeasonIdQuery>(
          hotelRoomPriceByHotelRoomPriceSeasonIdQuery,
          {
            hotelRoomPriceSeasonId: orgId,
          }
        );

      return response;
    },
  });
  return {
    price: data?.hotelRoomPriceByHotelRoomPriceSeasonId as HotelRoomPrice[],
    isLoading,
    error,
  };
}
