import { graphql } from "@/shared/graphql";

export const deleteHotelRoomPriceYearMutation = graphql(`
  mutation DeleteHotelRoomPriceYear($id: ID!) {
    deleteHotelRoomPriceYear(id: $id)
  }
`);
``;
