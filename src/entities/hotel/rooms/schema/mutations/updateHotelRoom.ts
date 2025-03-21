import { graphql } from "@/shared/graphql";

export const updateHotelRoomMutation = graphql(`
  mutation UpdateHotelRoom($input: UpdateHotelRoom!) {
    updateHotelRoom(input: $input) {
      ...HotelRoomFragment
    }
  }
`);
