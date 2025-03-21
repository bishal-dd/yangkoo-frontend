import { graphql } from "@/shared/graphql";

export const hotelRoomInclusionsByHotelRoomIdQuery = graphql(`
  query HotelRoomInclusionsByHotelRoomId($hotelRoomId: String!) {
    hotelRoomInclusionsByHotelRoomId(hotelRoomId: $hotelRoomId) {
      ...HotelRoomInclusionFragment
    }
  }
`);
