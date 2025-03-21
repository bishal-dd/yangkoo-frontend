import { graphql } from "@/shared/graphql";

graphql(`
  fragment CityFragment on City {
    id
    city
    city_description
    region_id
  }
`);
