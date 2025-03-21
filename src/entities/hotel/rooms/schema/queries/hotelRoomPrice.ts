import { graphql } from "@/shared/graphql";

export const hotelRoomPriceByHotelRoomPriceSeasonIdQuery = graphql(`
  query HotelRoomPriceByHotelRoomPriceSeasonId(
    $hotelRoomPriceSeasonId: String!
  ) {
    hotelRoomPriceByHotelRoomPriceSeasonId(
      hotelRoomPriceSeasonId: $hotelRoomPriceSeasonId
    ) {
      ...HotelRoomPriceFragment
    }
  }
`);
