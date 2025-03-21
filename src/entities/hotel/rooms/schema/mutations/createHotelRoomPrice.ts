import { graphql } from "@/shared/graphql";

export const createHotelRoomPriceMutation = graphql(`
  mutation CreateHotelRoomPrice($input: CreateHotelRoomPrice!) {
    createHotelRoomPrice(input: $input) {
      ...HotelRoomPriceFragment
    }
  }
`);
