import { graphql } from "@/shared/graphql";

export const amenitiesQuery = graphql(`
  query Amenities {
    amenities(first: 18) {
      edges {
        node {
          ...AmenityFragment
        }
      }
    }
  }
`);
