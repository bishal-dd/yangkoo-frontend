import { useMutation } from "@tanstack/react-query";
import {
  UpdateHotelPolicy,
  UpdateHotelPolicyMutation,
} from "@/shared/graphql/graphql";
import { updateHotelPolicyMutation } from "../../schema/mutations/updateHotelPolicy";
import { useRequestAPI } from "@/shared/utils/request";

export function useUpdateHotelPolicyPolicy() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: UpdateHotelPolicy) => {
      const res = await requestAPI<UpdateHotelPolicyMutation>(
        updateHotelPolicyMutation,
        {
          input,
        }
      );

      return res;
    },
  });

  const updateHotelPolicy = (input: UpdateHotelPolicy) => {
    const response = mutation.mutate(input);
    return response;
  };

  const updateHotelPolicyAsync = async (input: UpdateHotelPolicy) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    updateHotelPolicy,
    updateHotelPolicyAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
