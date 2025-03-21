import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelRoomPriceYearFragment on HotelRoomPriceYear {
    id
    room_price_year
    hotel_room_id
    hotelRoomPriceSeason {
      id
    }
  }
`);
