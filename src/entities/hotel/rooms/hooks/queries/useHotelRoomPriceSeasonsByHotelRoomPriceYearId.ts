import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery } from "../../schema/queries/hotelRoomPriceSeasons";
import { HotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery } from "@/shared/graphql/graphql";
import { HotelRoomPriceSeason, Season } from "../../types";
import { usePricingStore } from "../../store";
export function useHotelRoomPriceSeasonsByHotelRoomPriceYearId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { setSeasons } = usePricingStore();
  const { data, isLoading, error } = useSuspenseQuery<
    HotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery,
    Error
  >({
    queryKey: ["hotelRoomPriceSeasonsByHotelRoomPriceYearId", orgId],
    queryFn: async () => {
      const response =
        await requestAPI<HotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery>(
          hotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery,
          {
            hotelRoomPriceYearId: orgId,
          }
        );
      const data =
        response.hotelRoomPriceSeasonsByHotelRoomPriceYearId as Season[];
      setSeasons(orgId, data);
      return response;
    },
  });
  return {
    seasons:
      data?.hotelRoomPriceSeasonsByHotelRoomPriceYearId as HotelRoomPriceSeason[],
    isLoading,
    error,
  };
}
