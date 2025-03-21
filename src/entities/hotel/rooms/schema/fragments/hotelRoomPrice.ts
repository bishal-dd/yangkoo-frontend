import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelRoomPriceFragment on HotelRoomPrice {
    id
    price
    hotel_room_price_season_id
  }
`);
