import { graphql } from "@/shared/graphql";

export const hotelPoliciesByHotelIdQuery = graphql(`
  query HotelPoliciesByHotelId($hotelId: String!) {
    hotelPoliciesByHotelId(hotelId: $hotelId) {
      ...HotelPolicyFragment
    }
  }
`);
