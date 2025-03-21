import { graphql } from "@/shared/graphql";

export const deleteHotelRoomInclusionMutation = graphql(`
  mutation DeleteHotelRoomInclusion($id: ID!) {
    deleteHotelRoomInclusion(id: $id)
  }
`);
