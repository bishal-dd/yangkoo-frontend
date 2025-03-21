import { useMutation } from "@tanstack/react-query";
import {
  UpdateHotelRoom,
  UpdateHotelRoomMutation,
} from "@/shared/graphql/graphql";
import { updateHotelRoomMutation } from "../../schema/mutations/updateHotelRoom";
import { useRequestAPI } from "@/shared/utils/request";

export function useUpdateHotelRoom() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: UpdateHotelRoom) => {
      const res = await requestAPI<UpdateHotelRoomMutation>(
        updateHotelRoomMutation,
        {
          input,
        }
      );

      return res;
    },
  });

  const updateHotelRoom = (input: UpdateHotelRoom) => {
    const response = mutation.mutate(input);
    return response;
  };

  const updateHotelRoomAsync = async (input: UpdateHotelRoom) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    updateHotelRoom,
    updateHotelRoomAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
