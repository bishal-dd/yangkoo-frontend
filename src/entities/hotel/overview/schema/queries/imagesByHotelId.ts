import { graphql } from "@/shared/graphql";

export const imagesByHotelIdQuery = graphql(`
  query FilesByHotelId($hotelId: String!) {
    filesByHotelId(hotelId: $hotelId) {
      id
      url
    }
  }
`);
