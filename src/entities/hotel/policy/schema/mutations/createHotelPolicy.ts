import { graphql } from "@/shared/graphql";

export const createHotelPolicyMutation = graphql(`
  mutation CreateHotelPolicy($input: CreateHotelPolicy!) {
    createHotelPolicy(input: $input) {
      ...HotelPolicyFragment
    }
  }
`);
