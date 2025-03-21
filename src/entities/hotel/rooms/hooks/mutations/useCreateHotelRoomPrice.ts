import { useMutation } from "@tanstack/react-query";
import {
  CreateHotelRoomPrice,
  CreateHotelRoomPriceMutation,
} from "@/shared/graphql/graphql";
import { createHotelRoomPriceMutation } from "../../schema/mutations/createHotelRoomPrice";
import { useRequestAPI } from "@/shared/utils/request";
import { HotelRoomPrice } from "../../types";

export function useCreateHotelRoomPrice() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: CreateHotelRoomPrice) => {
      const res = await requestAPI<CreateHotelRoomPriceMutation>(
        createHotelRoomPriceMutation,
        {
          input,
        }
      );
      return res;
    },
  });

  const createHotelRoomPrice = (input: CreateHotelRoomPrice) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createHotelRoomPriceAsync = async (input: CreateHotelRoomPrice) => {
    const response = await mutation.mutateAsync(input);
    return response.createHotelRoomPrice as HotelRoomPrice;
  };

  return {
    createHotelRoomPrice,
    createHotelRoomPriceAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
