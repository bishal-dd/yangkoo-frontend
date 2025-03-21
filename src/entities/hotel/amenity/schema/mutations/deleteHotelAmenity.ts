import { graphql } from "@/shared/graphql";

export const deleteHotelAmenityMutation = graphql(`
  mutation DeleteHotelAmenity($id: ID!) {
    deleteHotelAmenity(id: $id)
  }
`);
