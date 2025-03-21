import { graphql } from "@/shared/graphql";

export const updateLocationMutation = graphql(`
  mutation UpdateLocation($input: UpdateLocation!) {
    updateLocation(input: $input) {
      id
    }
  }
`);
