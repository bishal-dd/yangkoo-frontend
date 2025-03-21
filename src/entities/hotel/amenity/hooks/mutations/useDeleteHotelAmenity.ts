import { useMutation } from "@tanstack/react-query";
import { DeleteHotelAmenityMutation } from "@/shared/graphql/graphql";
import { deleteHotelAmenityMutation } from "../../schema/mutations/deleteHotelAmenity";
import { useRequestAPI } from "@/shared/utils/request";

export function useDeleteHotelAmenity() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await requestAPI<DeleteHotelAmenityMutation>(
        deleteHotelAmenityMutation,
        {
          id,
        }
      );

      return res;
    },
  });

  const deleteHotelAmenity = (id: string) => {
    const response = mutation.mutate(id);
    return response;
  };

  const deleteHotelAmenityAsync = async (id: string) => {
    const response = await mutation.mutateAsync(id);
    return response.deleteHotelAmenity;
  };

  return {
    deleteHotelAmenity,
    deleteHotelAmenityAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
