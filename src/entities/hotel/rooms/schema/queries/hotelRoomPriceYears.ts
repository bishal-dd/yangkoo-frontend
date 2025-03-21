import { graphql } from "@/shared/graphql";

export const hotelRoomPriceYearsByHotelRoomIdQuery = graphql(`
  query HotelRoomPriceYearsByHotelRoomId($hotelRoomId: String!) {
    hotelRoomPriceYearsByHotelRoomId(hotelRoomId: $hotelRoomId) {
      ...HotelRoomPriceYearFragment
    }
  }
`);
