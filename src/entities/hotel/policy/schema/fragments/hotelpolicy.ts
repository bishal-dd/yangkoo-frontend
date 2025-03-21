import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelPolicyFragment on HotelPolicy {
    id
    hotel_policy
    policy_name
    hotel_id
  }
`);
