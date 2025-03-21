import { graphql } from "@/shared/graphql";

export const deleteHotelRoomMutation = graphql(`
  mutation DeleteHotelRoom($id: ID!) {
    deleteHotelRoom(id: $id)
  }
`);
