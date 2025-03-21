import { graphql } from "@/shared/graphql";

export const imagesByHotelRoomIdQuery = graphql(`
  query FilesByHotelRoomId($hotelRoomId: String!) {
    filesByHotelRoomId(hotelRoomId: $hotelRoomId) {
      id
      url
    }
  }
`);
