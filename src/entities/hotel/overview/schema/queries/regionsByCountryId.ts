import { graphql } from "@/shared/graphql";

export const regionsByCountryIdQuery = graphql(`
  query RegionsByCountryId($countryId: String!) {
    regionsByCountryId(countryId: $countryId) {
      ...RegionFragment
    }
  }
`);
