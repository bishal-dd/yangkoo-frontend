import { graphql } from "@/shared/graphql";

export const hotelRoomsByHotelIdQuery = graphql(`
  query HotelRoomsByHotelId($hotelId: String!) {
    hotelRoomsByHotelId(hotelId: $hotelId) {
      ...HotelRoomFragment
    }
  }
`);
