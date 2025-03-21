import { useMutation } from "@tanstack/react-query";
import { UpdateHotel, UpdateHotelMutation } from "@/shared/graphql/graphql";
import { updateHotelMutation } from "../../schema/mutations/updateHotelMutation";
import { useRequestAPI } from "@/shared/utils/request";

export function useUpdateHotel() {
  const requestAPI = useRequestAPI();

  const mutation = useMutation({
    mutationFn: async (input: UpdateHotel) => {
      const res = await requestAPI<UpdateHotelMutation>(updateHotelMutation, {
        input,
      });

      return res;
    },
  });

  const updateHotel = (input: UpdateHotel) => {
    const response = mutation.mutate(input);
    return response;
  };

  const updateHotelAsync = async (input: UpdateHotel) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    updateHotel,
    updateHotelAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
