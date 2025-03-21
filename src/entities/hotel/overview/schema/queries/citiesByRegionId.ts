import { graphql } from "@/shared/graphql";

export const citiesByRegionIdQuery = graphql(`
  query CitiesByRegionId($regionId: String!) {
    citiesByRegionId(regionId: $regionId) {
      ...CityFragment
    }
  }
`);
