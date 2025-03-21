import { graphql } from "@/shared/graphql";

export const updateHotelMutation = graphql(`
  mutation UpdateHotel($input: UpdateHotel!) {
    updateHotel(input: $input) {
      id
    }
  }
`);
