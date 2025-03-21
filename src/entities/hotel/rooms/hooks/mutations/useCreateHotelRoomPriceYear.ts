import { useMutation } from "@tanstack/react-query";
import {
  CreateHotelRoomPriceYear,
  CreateHotelRoomPriceYearMutation,
} from "@/shared/graphql/graphql";
import { createHotelRoomPriceYearMutation } from "../../schema/mutations/createHotelRoomPriceYear";
import { useRequestAPI } from "@/shared/utils/request";
import { Year, HotelRoomPriceYear } from "../../types";
import { usePricingStore } from "../../store";

export function useCreateHotelRoomPriceYear() {
  const requestAPI = useRequestAPI();
  const { addYear } = usePricingStore();
  const mutation = useMutation({
    mutationFn: async (input: CreateHotelRoomPriceYear) => {
      const res = await requestAPI<CreateHotelRoomPriceYearMutation>(
        createHotelRoomPriceYearMutation,
        {
          input,
        }
      );
      const data = res.createHotelRoomPriceYear as Year;
      addYear({
        id: data.id,
        room_price_year: data.room_price_year,
        hotel_room_id: data.hotel_room_id,
        seasons: [],
      });
      return res;
    },
  });

  const createHotelRoomPriceYear = (input: CreateHotelRoomPriceYear) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createHotelRoomPriceYearAsync = async (
    input: CreateHotelRoomPriceYear
  ) => {
    const response = await mutation.mutateAsync(input);
    return response.createHotelRoomPriceYear as HotelRoomPriceYear;
  };

  return {
    createHotelRoomPriceYear,
    createHotelRoomPriceYearAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
