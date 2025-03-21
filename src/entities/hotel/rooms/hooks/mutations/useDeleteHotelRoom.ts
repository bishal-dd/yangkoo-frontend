import { useMutation } from "@tanstack/react-query";
import { DeleteHotelRoomMutation } from "@/shared/graphql/graphql";
import { deleteHotelRoomMutation } from "../../schema/mutations/deleteHotelRoom";
import { useRequestAPI } from "@/shared/utils/request";
import { useHotelRoomsStore } from "../../store";

export function useDeleteHotelRoom() {
  const requestAPI = useRequestAPI();
  const { deleteHotelRoom: deleteHotelRoomState } = useHotelRoomsStore();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      deleteHotelRoomState(id);
      const res = await requestAPI<DeleteHotelRoomMutation>(
        deleteHotelRoomMutation,
        {
          id,
        }
      );

      return res;
    },
  });

  const deleteHotelRoom = (id: string) => {
    const response = mutation.mutate(id);
    return response;
  };

  const deleteHotelRoomAsync = async (id: string) => {
    const response = await mutation.mutateAsync(id);
    return response;
  };

  return {
    deleteHotelRoom,
    deleteHotelRoomAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
