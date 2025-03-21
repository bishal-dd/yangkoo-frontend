import { graphql } from "@/shared/graphql";

graphql(`
  fragment CountryFragment on Country {
    id
    country
    country_description
  }
`);
