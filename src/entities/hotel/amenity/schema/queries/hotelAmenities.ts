import { graphql } from "@/shared/graphql";

export const hotelAmenitiesQuery = graphql(`
  query HotelAmenities($hotelId: String!) {
    hotelAmenitiesByHotelId(hotelId: $hotelId) {
      ...HotelAmenityFragment
    }
  }
`);
