import { graphql } from "@/shared/graphql";

export const createHotelAmenityMutation = graphql(`
  mutation CreateHotelAmenity($input: CreateHotelAmenity!) {
    createHotelAmenity(input: $input) {
      ...HotelAmenityFragment
    }
  }
`);
