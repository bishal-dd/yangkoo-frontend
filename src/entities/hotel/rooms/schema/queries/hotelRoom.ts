import { graphql } from "@/shared/graphql";

export const hotelRoomQuery = graphql(`
  query HotelRoom($id: ID!) {
    hotelRoom(id: $id) {
      ...HotelRoomFragment
    }
  }
`);
