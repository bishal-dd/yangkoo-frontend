import { graphql } from "@/shared/graphql";

export const updateHotelRoomPriceMutation = graphql(`
  mutation UpdateHotelRoomPrice($input: UpdateHotelRoomPrice!) {
    updateHotelRoomPrice(input: $input) {
      ...HotelRoomPriceFragment
    }
  }
`);
