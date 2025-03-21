import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelFragment on Hotel {
    id
    hotel_name
    hotel_description
    start_category
    location_id
    latitude
    longitude
    Location {
      id
      location_name
      location_description
      City {
        ...CityFragment
        Region {
          ...RegionFragment
          Country {
            ...CountryFragment
          }
        }
      }
    }
  }
`);
