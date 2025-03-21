import { graphql } from "@/shared/graphql";

export const updateHotelRoomInclusionMutation = graphql(`
  mutation UpdateHotelRoomInclusion($input: UpdateHotelRoomInclusion!) {
    updateHotelRoomInclusion(input: $input) {
      ...HotelRoomInclusionFragment
    }
  }
`);
