import { graphql } from "@/shared/graphql";

export const createHotelRoomPriceSeasonMutation = graphql(`
  mutation CreateHotelRoomPriceSeason($input: CreateHotelRoomPriceSeason!) {
    createHotelRoomPriceSeason(input: $input) {
      ...HotelRoomPriceSeasonFragment
    }
  }
`);
