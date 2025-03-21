import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelRoomFragment on HotelRoom {
    id
    room_type
    quantity
    size
    bed_type
    capacity
    price_type
    price
    discounted_price
    hotel_id
  }
`);
