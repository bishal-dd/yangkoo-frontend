import { graphql } from "@/shared/graphql";

export const createHotelRoomInclusionMutation = graphql(`
  mutation CreateHotelRoomInclusion($input: CreateHotelRoomInclusion!) {
    createHotelRoomInclusion(input: $input) {
      ...HotelRoomInclusionFragment
    }
  }
`);
