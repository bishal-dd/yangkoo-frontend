import { graphql } from "@/shared/graphql";

export const createHotelRoomPriceYearMutation = graphql(`
  mutation CreateHotelRoomPriceYear($input: CreateHotelRoomPriceYear!) {
    createHotelRoomPriceYear(input: $input) {
      ...HotelRoomPriceYearFragment
    }
  }
`);
