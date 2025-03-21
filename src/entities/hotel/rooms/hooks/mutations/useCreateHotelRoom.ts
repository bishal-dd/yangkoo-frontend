import { useMutation } from "@tanstack/react-query";
import {
  CreateHotelRoom,
  CreateHotelRoomMutation,
} from "@/shared/graphql/graphql";
import { createHotelRoomMutation } from "../../schema/mutations/createHotelRoom";
import { useRequestAPI } from "@/shared/utils/request";
import { useHotelRoomsStore } from "../../store";
import { HotelRoom } from "../../types";

export function useCreateHotelRoom() {
  const requestAPI = useRequestAPI();
  const { addHotelRoom } = useHotelRoomsStore();
  const mutation = useMutation({
    mutationFn: async (input: CreateHotelRoom) => {
      const res = await requestAPI<CreateHotelRoomMutation>(
        createHotelRoomMutation,
        {
          input,
        }
      );
      addHotelRoom(res.createHotelRoom as HotelRoom);
      return res;
    },
  });

  const createHotelRoom = (input: CreateHotelRoom) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createHotelRoomAsync = async (input: CreateHotelRoom) => {
    const response = await mutation.mutateAsync(input);
    return response.createHotelRoom;
  };

  return {
    createHotelRoom,
    createHotelRoomAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
