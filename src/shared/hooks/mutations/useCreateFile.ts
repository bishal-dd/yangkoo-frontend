import { useMutation } from "@tanstack/react-query";
import {
  CreateFile,
  CreateFileMutation,
  FileFragmentFragment,
} from "@/shared/graphql/graphql";
import { createFileMutation } from "@/shared/schema/mutations/createFile";
import { useRequestAPI } from "@/shared/utils/request";

export function useCreateFile() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: CreateFile) => {
      const res = await requestAPI<CreateFileMutation>(createFileMutation, {
        input,
      });

      return res;
    },
  });

  const createFile = (input: CreateFile) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createFileAsync = async (input: CreateFile) => {
    const response = await mutation.mutateAsync(input);
    return response.createFile as FileFragmentFragment;
  };

  return {
    createFile,
    createFileAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
