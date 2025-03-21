import { useMutation } from "@tanstack/react-query";
import { DeleteHotelRoomInclusionMutation } from "@/shared/graphql/graphql";
import { deleteHotelRoomInclusionMutation } from "../../schema/mutations/deleteHotelRoomInclusion";
import { useRequestAPI } from "@/shared/utils/request";
import { useHotelRoomInclusionsStore } from "../../store";

export function useDeleteHotelRoomInclusion() {
  const requestAPI = useRequestAPI();
  const { deleteHotelRoomInclusion: deleteHotelRoomInclusionState } =
    useHotelRoomInclusionsStore();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      deleteHotelRoomInclusionState(id);
      const res = await requestAPI<DeleteHotelRoomInclusionMutation>(
        deleteHotelRoomInclusionMutation,
        {
          id,
        }
      );

      return res;
    },
  });

  const deleteHotelRoomInclusion = (id: string) => {
    const response = mutation.mutate(id);
    return response;
  };

  const deleteHotelRoomInclusionAsync = async (id: string) => {
    const response = await mutation.mutateAsync(id);
    return response;
  };

  return {
    deleteHotelRoomInclusion,
    deleteHotelRoomInclusionAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
