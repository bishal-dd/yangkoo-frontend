import { graphql } from "@/shared/graphql";

export const deleteHotelRoomPriceSeasonMutation = graphql(`
  mutation DeleteHotelRoomPriceSeason($id: ID!) {
    deleteHotelRoomPriceSeason(id: $id)
  }
`);
