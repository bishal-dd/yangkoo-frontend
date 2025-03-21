import { useMutation } from "@tanstack/react-query";
import {
  CreateHotelPolicy,
  CreateHotelPolicyMutation,
} from "@/shared/graphql/graphql";
import { createHotelPolicyMutation } from "../../schema/mutations/createHotelPolicy";
import { useRequestAPI } from "@/shared/utils/request";
import { useHotelPoliciesStore } from "../../store";
import { HotelPolicy } from "../../types";

export function useCreateHotelPolicy() {
  const requestAPI = useRequestAPI();
  const { addHotelPolicy } = useHotelPoliciesStore();
  const mutation = useMutation({
    mutationFn: async (input: CreateHotelPolicy) => {
      const res = await requestAPI<CreateHotelPolicyMutation>(
        createHotelPolicyMutation,
        {
          input,
        }
      );
      addHotelPolicy(res.createHotelPolicy as HotelPolicy);
      return res;
    },
  });

  const createHotelPolicy = (input: CreateHotelPolicy) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createHotelPolicyAsync = async (input: CreateHotelPolicy) => {
    const response = await mutation.mutateAsync(input);
    return response.createHotelPolicy;
  };

  return {
    createHotelPolicy,
    createHotelPolicyAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
