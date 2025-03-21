import { useMutation } from "@tanstack/react-query";
import { DeleteHotelPolicyMutation } from "@/shared/graphql/graphql";
import { deleteHotelPolicyMutation } from "../../schema/mutations/deleteHotelPolicy";
import { useRequestAPI } from "@/shared/utils/request";
import { useHotelPoliciesStore } from "../../store";

export function useDeleteHotelPolicyPolicy() {
  const requestAPI = useRequestAPI();
  const { deleteHotelPolicy: deleteHotelPolicyState } = useHotelPoliciesStore();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      deleteHotelPolicyState(id);
      const res = await requestAPI<DeleteHotelPolicyMutation>(
        deleteHotelPolicyMutation,
        {
          id,
        }
      );

      return res;
    },
  });

  const deleteHotelPolicy = (id: string) => {
    const response = mutation.mutate(id);
    return response;
  };

  const deleteHotelPolicyAsync = async (id: string) => {
    const response = await mutation.mutateAsync(id);
    return response;
  };

  return {
    deleteHotelPolicy,
    deleteHotelPolicyAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
