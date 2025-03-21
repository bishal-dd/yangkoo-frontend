import { useMutation } from "@tanstack/react-query";
import { DeleteFileMutation } from "@/shared/graphql/graphql";
import { deleteFileMutation } from "../../schema/mutations/deleteFile";
import { useRequestAPI } from "@/shared/utils/request";

export function useDeleteFile() {
  const requestAPI = useRequestAPI();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await requestAPI<DeleteFileMutation>(deleteFileMutation, {
        id,
      });

      return res;
    },
  });

  const deleteFile = (id: string) => {
    const response = mutation.mutate(id);
    return response;
  };

  const deleteFileAsync = async (id: string) => {
    const response = await mutation.mutateAsync(id);
    return response;
  };

  return {
    deleteFile,
    deleteFileAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
