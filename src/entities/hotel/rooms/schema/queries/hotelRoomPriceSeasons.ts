import { graphql } from "@/shared/graphql";

export const hotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery = graphql(`
  query HotelRoomPriceSeasonsByHotelRoomPriceYearId(
    $hotelRoomPriceYearId: String!
  ) {
    hotelRoomPriceSeasonsByHotelRoomPriceYearId(
      hotelRoomPriceYearId: $hotelRoomPriceYearId
    ) {
      ...HotelRoomPriceSeasonFragment
    }
  }
`);
