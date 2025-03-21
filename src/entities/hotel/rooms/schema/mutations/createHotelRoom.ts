import { graphql } from "@/shared/graphql";

export const createHotelRoomMutation = graphql(`
  mutation CreateHotelRoom($input: CreateHotelRoom!) {
    createHotelRoom(input: $input) {
      ...HotelRoomFragment
    }
  }
`);
