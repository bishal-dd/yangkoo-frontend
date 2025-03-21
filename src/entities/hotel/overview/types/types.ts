import {
  CountryFragmentFragment,
  RegionFragmentFragment,
  CityFragmentFragment,
  Location as LocationType,
  FileFragmentFragment,
} from "@/shared/graphql/graphql";

export type Country = NonNullable<CountryFragmentFragment>;
export type Region = NonNullable<RegionFragmentFragment>;
export type City = NonNullable<CityFragmentFragment>;
export type Location = Omit<
  LocationType,
  "__typename" | "updated_at" | "deleted_at" | "created_at"
>;
export type File = NonNullable<FileFragmentFragment>;
export type Images = {
  id: string;
  url: string;
};
