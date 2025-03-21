import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelAmenityFragment on HotelAmenity {
    id
    hotel_id
    amenity_id
  }
`);
