import {
  HotelRoomFragmentFragment,
  HotelRoomInclusionFragmentFragment,
  HotelRoomPriceYearFragmentFragment,
  HotelRoomPriceSeasonFragmentFragment,
  HotelRoomPriceFragmentFragment,
} from "@/shared/graphql/graphql";
export { PriceTypeEnum } from "@/shared/graphql/graphql";

export type HotelRoom = Omit<
  HotelRoomFragmentFragment,
  "__fragmentName" | "$fragmentRefs" | "__typename" | " $fragmentName"
>;
export type HotelRoomPriceYear = Omit<
  HotelRoomPriceYearFragmentFragment,
  "__fragmentName" | "$fragmentRefs" | "__typename" | " $fragmentName"
>;

export type HotelRoomPriceSeason = Omit<
  HotelRoomPriceSeasonFragmentFragment,
  "__fragmentName" | "$fragmentRefs" | "__typename" | " $fragmentName"
>;

export type HotelRoomPrice = Omit<
  HotelRoomPriceFragmentFragment,
  "__fragmentName" | "$fragmentRefs" | "__typename" | " $fragmentName"
>;
export type HotelRoomInclusion = Omit<
  HotelRoomInclusionFragmentFragment,
  "__fragmentName" | "$fragmentRefs" | "__typename" | " $fragmentName"
>;
export type Images = {
  id: string;
  url: string;
};

export type Season = {
  id: string;
  season_start: string;
  season_end: string;
  hotel_room_price_year_id: string;
  prices: HotelRoomPrice[];
};

export type Year = {
  id: string;
  room_price_year: number;
  hotel_room_id: string;
  seasons: Season[];
};
