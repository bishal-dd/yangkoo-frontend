import { graphql } from "@/shared/graphql";

export const createLocationMutation = graphql(`
  mutation CreateLocation($input: CreateLocation!) {
    createLocation(input: $input) {
      id
      location_name
      location_description
      city_id
    }
  }
`);
