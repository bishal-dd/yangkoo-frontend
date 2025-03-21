import { useMutation } from "@tanstack/react-query";
import {
  CreateLocation,
  CreateLocationMutation,
} from "@/shared/graphql/graphql";
import { createLocationMutation } from "../../schema/mutations/createLocationMutation";
import { useRequestAPI } from "@/shared/utils/request";

export function useCreateLocation() {
  const requestAPI = useRequestAPI();

  const mutation = useMutation({
    mutationFn: async (input: CreateLocation) => {
      const res = await requestAPI<CreateLocationMutation>(
        createLocationMutation,
        {
          input,
        }
      );

      return res;
    },
  });

  const createLocation = (input: CreateLocation) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createLocationAsync = async (input: CreateLocation) => {
    const response = await mutation.mutateAsync(input);
    return response.createLocation;
  };

  return {
    createLocation,
    createLocationAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
