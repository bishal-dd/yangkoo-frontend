import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelRoomInclusionFragment on HotelRoomInclusion {
    id
    inclusion
    hotel_room_id
  }
`);
