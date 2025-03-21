import { useMutation } from "@tanstack/react-query";
import {
  CreateHotelRoomInclusion,
  CreateHotelRoomInclusionMutation,
} from "@/shared/graphql/graphql";
import { createHotelRoomInclusionMutation } from "../../schema/mutations/createHotelRoomInclusion";
import { useRequestAPI } from "@/shared/utils/request";
import { useHotelRoomInclusionsStore } from "../../store";
import { HotelRoomInclusion } from "../../types";

export function useCreateHotelRoomInclusion() {
  const requestAPI = useRequestAPI();
  const { addHotelRoomInclusion } = useHotelRoomInclusionsStore();
  const mutation = useMutation({
    mutationFn: async (input: CreateHotelRoomInclusion) => {
      const res = await requestAPI<CreateHotelRoomInclusionMutation>(
        createHotelRoomInclusionMutation,
        {
          input,
        }
      );
      addHotelRoomInclusion(res.createHotelRoomInclusion as HotelRoomInclusion);
      return res;
    },
  });

  const createHotelRoomInclusion = (input: CreateHotelRoomInclusion) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createHotelRoomInclusionAsync = async (
    input: CreateHotelRoomInclusion
  ) => {
    const response = await mutation.mutateAsync(input);
    return response.createHotelRoomInclusion as HotelRoomInclusion;
  };

  return {
    createHotelRoomInclusion,
    createHotelRoomInclusionAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
