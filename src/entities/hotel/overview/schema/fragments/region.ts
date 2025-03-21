import { graphql } from "@/shared/graphql";

graphql(`
  fragment RegionFragment on Region {
    id
    region
    region_description
    country_id
  }
`);
