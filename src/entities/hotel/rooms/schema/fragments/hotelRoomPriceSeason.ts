import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelRoomPriceSeasonFragment on HotelRoomPriceSeason {
    id
    season_start
    season_end
    hotel_room_price_year_id
  }
`);
