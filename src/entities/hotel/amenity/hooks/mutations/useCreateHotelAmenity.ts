import { useMutation } from "@tanstack/react-query";
import {
  CreateHotelAmenity,
  CreateHotelAmenityMutation,
} from "@/shared/graphql/graphql";
import { createHotelAmenityMutation } from "../../schema/mutations/createHotelAmenity";
import { useRequestAPI } from "@/shared/utils/request";

export function useCreateHotelAmenity() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: CreateHotelAmenity) => {
      const res = await requestAPI<CreateHotelAmenityMutation>(
        createHotelAmenityMutation,
        {
          input,
        }
      );

      return res;
    },
  });

  const createHotelAmenity = (input: CreateHotelAmenity) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createHotelAmenityAsync = async (input: CreateHotelAmenity) => {
    const response = await mutation.mutateAsync(input);
    return response.createHotelAmenity;
  };

  return {
    createHotelAmenity,
    createHotelAmenityAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
