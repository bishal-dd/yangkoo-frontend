import { graphql } from "@/shared/graphql";

export const countriesQuery = graphql(`
  query Countries {
    countries {
      edges {
        node {
          ...CountryFragment
        }
      }
    }
  }
`);
