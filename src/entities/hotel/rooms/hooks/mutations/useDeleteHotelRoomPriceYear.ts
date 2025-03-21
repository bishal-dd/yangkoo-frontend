import { useMutation } from "@tanstack/react-query";
import { DeleteHotelRoomPriceYearMutation } from "@/shared/graphql/graphql";
import { deleteHotelRoomPriceYearMutation } from "../../schema/mutations/deleteHotelRoomPriceYear";
import { useRequestAPI } from "@/shared/utils/request";
import { usePricingStore } from "../../store";

export function useDeleteHotelRoomPriceYear() {
  const requestAPI = useRequestAPI();
  const { deleteYear } = usePricingStore();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      deleteYear(id);
      const res = await requestAPI<DeleteHotelRoomPriceYearMutation>(
        deleteHotelRoomPriceYearMutation,
        {
          id,
        }
      );

      return res;
    },
  });

  const deleteHotelRoomPriceYear = (id: string) => {
    const response = mutation.mutate(id);
    return response;
  };

  const deleteHotelRoomPriceYearAsync = async (id: string) => {
    const response = await mutation.mutateAsync(id);
    return response;
  };

  return {
    deleteHotelRoomPriceYear,
    deleteHotelRoomPriceYearAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
