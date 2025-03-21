import { graphql } from "@/shared/graphql";

export const updateHotelPolicyMutation = graphql(`
  mutation UpdateHotelPolicy($input: UpdateHotelPolicy!) {
    updateHotelPolicy(input: $input) {
      ...HotelPolicyFragment
    }
  }
`);
