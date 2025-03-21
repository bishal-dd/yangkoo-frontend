import { useMutation } from "@tanstack/react-query";
import {
  UpdateHotelRoomInclusion,
  UpdateHotelRoomInclusionMutation,
} from "@/shared/graphql/graphql";
import { updateHotelRoomInclusionMutation } from "../../schema/mutations/updateHotelRoomInclusion";
import { useRequestAPI } from "@/shared/utils/request";

export function useUpdateHotelRoomInclusion() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: UpdateHotelRoomInclusion) => {
      const res = await requestAPI<UpdateHotelRoomInclusionMutation>(
        updateHotelRoomInclusionMutation,
        {
          input,
        }
      );

      return res;
    },
  });

  const updateHotelRoomInclusion = (input: UpdateHotelRoomInclusion) => {
    const response = mutation.mutate(input);
    return response;
  };

  const updateHotelRoomInclusionAsync = async (
    input: UpdateHotelRoomInclusion
  ) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    updateHotelRoomInclusion,
    updateHotelRoomInclusionAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
