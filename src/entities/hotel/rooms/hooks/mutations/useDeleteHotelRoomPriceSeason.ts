import { useMutation } from "@tanstack/react-query";
import { DeleteHotelRoomPriceSeasonMutation } from "@/shared/graphql/graphql";
import { deleteHotelRoomPriceSeasonMutation } from "../../schema/mutations/deleteHotelRoomPriceSeason";
import { useRequestAPI } from "@/shared/utils/request";
import { usePricingStore } from "../../store";

export function useDeleteHotelRoomPriceSeason() {
  const requestAPI = useRequestAPI();
  const { deleteSeason } = usePricingStore();

  const mutation = useMutation({
    mutationFn: async (seasonid: string) => {
      const res = await requestAPI<DeleteHotelRoomPriceSeasonMutation>(
        deleteHotelRoomPriceSeasonMutation,
        {
          id: seasonid,
        }
      );

      return res;
    },
  });

  const deleteHotelRoomPriceSeason = (yearId: string, seasonid: string) => {
    deleteSeason(yearId, seasonid);
    const response = mutation.mutate(seasonid);
    return response;
  };

  const deleteHotelRoomPriceSeasonAsync = async (
    yearId: string,
    seasonid: string
  ) => {
    deleteSeason(yearId, seasonid);
    const response = await mutation.mutateAsync(seasonid);
    return response;
  };

  return {
    deleteHotelRoomPriceSeason,
    deleteHotelRoomPriceSeasonAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
