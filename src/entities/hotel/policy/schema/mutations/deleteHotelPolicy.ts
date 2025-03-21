import { graphql } from "@/shared/graphql";

export const deleteHotelPolicyMutation = graphql(`
  mutation DeleteHotelPolicy($id: ID!) {
    deleteHotelPolicy(id: $id)
  }
`);
