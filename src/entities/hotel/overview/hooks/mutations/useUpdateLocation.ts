import { useMutation } from "@tanstack/react-query";
import {
  UpdateLocation,
  UpdateLocationMutation,
} from "@/shared/graphql/graphql";
import { updateLocationMutation } from "../../schema/mutations/updateLocationMutation";
import { useRequestAPI } from "@/shared/utils/request";

export function useUpdateLocation() {
  const requestAPI = useRequestAPI();

  const mutation = useMutation({
    mutationFn: async (input: UpdateLocation) => {
      const res = await requestAPI<UpdateLocationMutation>(
        updateLocationMutation,
        {
          input,
        }
      );

      return res;
    },
  });

  const updateLocation = (input: UpdateLocation) => {
    const response = mutation.mutate(input);
    return response;
  };

  const updateLocationAsync = async (input: UpdateLocation) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    updateLocation,
    updateLocationAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
