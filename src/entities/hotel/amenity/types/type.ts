import { AmenityFragmentFragment } from "@/shared/graphql/graphql";
export type { AmenityType } from "@/shared/graphql/graphql";
export type Amenity = Omit<
  AmenityFragmentFragment,
  "__typename" | "$fragmentName"
>;
