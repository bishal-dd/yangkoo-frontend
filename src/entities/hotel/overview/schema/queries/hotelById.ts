import { graphql } from "@/shared/graphql";

export const hotelByIdQuery = graphql(`
  query Hotel($id: ID!) {
    hotel(id: $id) {
      ...HotelFragment
    }
  }
`);
