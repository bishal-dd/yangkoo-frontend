import { useMutation } from "@tanstack/react-query";
import {
  UpdateHotelRoomPrice,
  UpdateHotelRoomPriceMutation,
} from "@/shared/graphql/graphql";
import { updateHotelRoomPriceMutation } from "../../schema/mutations/updateHotelRoomPrice";
import { useRequestAPI } from "@/shared/utils/request";
import { HotelRoomPrice } from "../../types";

export function useUpdateHotelRoomPrice() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: UpdateHotelRoomPrice) => {
      const res = await requestAPI<UpdateHotelRoomPriceMutation>(
        updateHotelRoomPriceMutation,
        {
          input,
        }
      );
      return res;
    },
  });

  const updateHotelRoomPrice = (input: UpdateHotelRoomPrice) => {
    const response = mutation.mutate(input);
    return response;
  };

  const updateHotelRoomPriceAsync = async (input: UpdateHotelRoomPrice) => {
    const response = await mutation.mutateAsync(input);
    return response.updateHotelRoomPrice as HotelRoomPrice;
  };

  return {
    updateHotelRoomPrice,
    updateHotelRoomPriceAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
