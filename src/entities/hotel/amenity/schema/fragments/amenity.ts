import { graphql } from "@/shared/graphql";

graphql(`
  fragment AmenityFragment on Amenity {
    id
    amenity
    icon
    type
  }
`);
