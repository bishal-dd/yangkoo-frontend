/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment AmenityFragment on Amenity {\n    id\n    amenity\n    icon\n    type\n  }\n": typeof types.AmenityFragmentFragmentDoc,
    "\n  fragment HotelAmenityFragment on HotelAmenity {\n    id\n    hotel_id\n    amenity_id\n  }\n": typeof types.HotelAmenityFragmentFragmentDoc,
    "\n  mutation CreateHotelAmenity($input: CreateHotelAmenity!) {\n    createHotelAmenity(input: $input) {\n      ...HotelAmenityFragment\n    }\n  }\n": typeof types.CreateHotelAmenityDocument,
    "\n  mutation DeleteHotelAmenity($id: ID!) {\n    deleteHotelAmenity(id: $id)\n  }\n": typeof types.DeleteHotelAmenityDocument,
    "\n  query Amenities {\n    amenities(first: 18) {\n      edges {\n        node {\n          ...AmenityFragment\n        }\n      }\n    }\n  }\n": typeof types.AmenitiesDocument,
    "\n  query HotelAmenities($hotelId: String!) {\n    hotelAmenitiesByHotelId(hotelId: $hotelId) {\n      ...HotelAmenityFragment\n    }\n  }\n": typeof types.HotelAmenitiesDocument,
    "\n  fragment CityFragment on City {\n    id\n    city\n    city_description\n    region_id\n  }\n": typeof types.CityFragmentFragmentDoc,
    "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n": typeof types.CountryFragmentFragmentDoc,
    "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n    latitude\n    longitude\n    Location {\n      id\n      location_name\n      location_description\n      City {\n        ...CityFragment\n        Region {\n          ...RegionFragment\n          Country {\n            ...CountryFragment\n          }\n        }\n      }\n    }\n  }\n": typeof types.HotelFragmentFragmentDoc,
    "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n": typeof types.RegionFragmentFragmentDoc,
    "\n  mutation CreateLocation($input: CreateLocation!) {\n    createLocation(input: $input) {\n      id\n      location_name\n      location_description\n      city_id\n    }\n  }\n": typeof types.CreateLocationDocument,
    "\n  mutation UpdateHotel($input: UpdateHotel!) {\n    updateHotel(input: $input) {\n      id\n    }\n  }\n": typeof types.UpdateHotelDocument,
    "\n  mutation UpdateLocation($input: UpdateLocation!) {\n    updateLocation(input: $input) {\n      id\n    }\n  }\n": typeof types.UpdateLocationDocument,
    "\n  query CitiesByRegionId($regionId: String!) {\n    citiesByRegionId(regionId: $regionId) {\n      ...CityFragment\n    }\n  }\n": typeof types.CitiesByRegionIdDocument,
    "\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n": typeof types.CountriesDocument,
    "\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n": typeof types.HotelDocument,
    "\n  query FilesByHotelId($hotelId: String!) {\n    filesByHotelId(hotelId: $hotelId) {\n      id\n      url\n    }\n  }\n": typeof types.FilesByHotelIdDocument,
    "\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n": typeof types.RegionsByCountryIdDocument,
    "\n  fragment HotelPolicyFragment on HotelPolicy {\n    id\n    hotel_policy\n    policy_name\n    hotel_id\n  }\n": typeof types.HotelPolicyFragmentFragmentDoc,
    "\n  mutation CreateHotelPolicy($input: CreateHotelPolicy!) {\n    createHotelPolicy(input: $input) {\n      ...HotelPolicyFragment\n    }\n  }\n": typeof types.CreateHotelPolicyDocument,
    "\n  mutation DeleteHotelPolicy($id: ID!) {\n    deleteHotelPolicy(id: $id)\n  }\n": typeof types.DeleteHotelPolicyDocument,
    "\n  mutation UpdateHotelPolicy($input: UpdateHotelPolicy!) {\n    updateHotelPolicy(input: $input) {\n      ...HotelPolicyFragment\n    }\n  }\n": typeof types.UpdateHotelPolicyDocument,
    "\n  query HotelPoliciesByHotelId($hotelId: String!) {\n    hotelPoliciesByHotelId(hotelId: $hotelId) {\n      ...HotelPolicyFragment\n    }\n  }\n": typeof types.HotelPoliciesByHotelIdDocument,
    "\n  fragment HotelRoomFragment on HotelRoom {\n    id\n    room_type\n    quantity\n    size\n    bed_type\n    capacity\n    price_type\n    price\n    discounted_price\n    hotel_id\n  }\n": typeof types.HotelRoomFragmentFragmentDoc,
    "\n  fragment HotelRoomInclusionFragment on HotelRoomInclusion {\n    id\n    inclusion\n    hotel_room_id\n  }\n": typeof types.HotelRoomInclusionFragmentFragmentDoc,
    "\n  fragment HotelRoomPriceFragment on HotelRoomPrice {\n    id\n    price\n    hotel_room_price_season_id\n  }\n": typeof types.HotelRoomPriceFragmentFragmentDoc,
    "\n  fragment HotelRoomPriceSeasonFragment on HotelRoomPriceSeason {\n    id\n    season_start\n    season_end\n    hotel_room_price_year_id\n  }\n": typeof types.HotelRoomPriceSeasonFragmentFragmentDoc,
    "\n  fragment HotelRoomPriceYearFragment on HotelRoomPriceYear {\n    id\n    room_price_year\n    hotel_room_id\n    hotelRoomPriceSeason {\n      id\n    }\n  }\n": typeof types.HotelRoomPriceYearFragmentFragmentDoc,
    "\n  mutation CreateHotelRoom($input: CreateHotelRoom!) {\n    createHotelRoom(input: $input) {\n      ...HotelRoomFragment\n    }\n  }\n": typeof types.CreateHotelRoomDocument,
    "\n  mutation CreateHotelRoomInclusion($input: CreateHotelRoomInclusion!) {\n    createHotelRoomInclusion(input: $input) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n": typeof types.CreateHotelRoomInclusionDocument,
    "\n  mutation CreateHotelRoomPrice($input: CreateHotelRoomPrice!) {\n    createHotelRoomPrice(input: $input) {\n      ...HotelRoomPriceFragment\n    }\n  }\n": typeof types.CreateHotelRoomPriceDocument,
    "\n  mutation CreateHotelRoomPriceSeason($input: CreateHotelRoomPriceSeason!) {\n    createHotelRoomPriceSeason(input: $input) {\n      ...HotelRoomPriceSeasonFragment\n    }\n  }\n": typeof types.CreateHotelRoomPriceSeasonDocument,
    "\n  mutation CreateHotelRoomPriceYear($input: CreateHotelRoomPriceYear!) {\n    createHotelRoomPriceYear(input: $input) {\n      ...HotelRoomPriceYearFragment\n    }\n  }\n": typeof types.CreateHotelRoomPriceYearDocument,
    "\n  mutation DeleteHotelRoom($id: ID!) {\n    deleteHotelRoom(id: $id)\n  }\n": typeof types.DeleteHotelRoomDocument,
    "\n  mutation DeleteHotelRoomInclusion($id: ID!) {\n    deleteHotelRoomInclusion(id: $id)\n  }\n": typeof types.DeleteHotelRoomInclusionDocument,
    "\n  mutation DeleteHotelRoomPriceSeason($id: ID!) {\n    deleteHotelRoomPriceSeason(id: $id)\n  }\n": typeof types.DeleteHotelRoomPriceSeasonDocument,
    "\n  mutation DeleteHotelRoomPriceYear($id: ID!) {\n    deleteHotelRoomPriceYear(id: $id)\n  }\n": typeof types.DeleteHotelRoomPriceYearDocument,
    "\n  mutation UpdateHotelRoom($input: UpdateHotelRoom!) {\n    updateHotelRoom(input: $input) {\n      ...HotelRoomFragment\n    }\n  }\n": typeof types.UpdateHotelRoomDocument,
    "\n  mutation UpdateHotelRoomInclusion($input: UpdateHotelRoomInclusion!) {\n    updateHotelRoomInclusion(input: $input) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n": typeof types.UpdateHotelRoomInclusionDocument,
    "\n  mutation UpdateHotelRoomPrice($input: UpdateHotelRoomPrice!) {\n    updateHotelRoomPrice(input: $input) {\n      ...HotelRoomPriceFragment\n    }\n  }\n": typeof types.UpdateHotelRoomPriceDocument,
    "\n  query HotelRoom($id: ID!) {\n    hotelRoom(id: $id) {\n      ...HotelRoomFragment\n    }\n  }\n": typeof types.HotelRoomDocument,
    "\n  query HotelRoomInclusionsByHotelRoomId($hotelRoomId: String!) {\n    hotelRoomInclusionsByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n": typeof types.HotelRoomInclusionsByHotelRoomIdDocument,
    "\n  query HotelRoomPriceByHotelRoomPriceSeasonId(\n    $hotelRoomPriceSeasonId: String!\n  ) {\n    hotelRoomPriceByHotelRoomPriceSeasonId(\n      hotelRoomPriceSeasonId: $hotelRoomPriceSeasonId\n    ) {\n      ...HotelRoomPriceFragment\n    }\n  }\n": typeof types.HotelRoomPriceByHotelRoomPriceSeasonIdDocument,
    "\n  query HotelRoomPriceSeasonsByHotelRoomPriceYearId(\n    $hotelRoomPriceYearId: String!\n  ) {\n    hotelRoomPriceSeasonsByHotelRoomPriceYearId(\n      hotelRoomPriceYearId: $hotelRoomPriceYearId\n    ) {\n      ...HotelRoomPriceSeasonFragment\n    }\n  }\n": typeof types.HotelRoomPriceSeasonsByHotelRoomPriceYearIdDocument,
    "\n  query HotelRoomPriceYearsByHotelRoomId($hotelRoomId: String!) {\n    hotelRoomPriceYearsByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      ...HotelRoomPriceYearFragment\n    }\n  }\n": typeof types.HotelRoomPriceYearsByHotelRoomIdDocument,
    "\n  query HotelRoomsByHotelId($hotelId: String!) {\n    hotelRoomsByHotelId(hotelId: $hotelId) {\n      ...HotelRoomFragment\n    }\n  }\n": typeof types.HotelRoomsByHotelIdDocument,
    "\n  query FilesByHotelRoomId($hotelRoomId: String!) {\n    filesByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      id\n      url\n    }\n  }\n": typeof types.FilesByHotelRoomIdDocument,
    "\n  fragment FileFragment on File {\n    id\n    caption\n    mimetype\n    file_key\n    file_type\n  }\n": typeof types.FileFragmentFragmentDoc,
    "\n  mutation CreateFile($input: CreateFile!) {\n    createFile(input: $input) {\n      ...FileFragment\n    }\n  }\n": typeof types.CreateFileDocument,
    "\n  mutation DeleteFile($id: ID!) {\n    deleteFile(id: $id)\n  }\n": typeof types.DeleteFileDocument,
};
const documents: Documents = {
    "\n  fragment AmenityFragment on Amenity {\n    id\n    amenity\n    icon\n    type\n  }\n": types.AmenityFragmentFragmentDoc,
    "\n  fragment HotelAmenityFragment on HotelAmenity {\n    id\n    hotel_id\n    amenity_id\n  }\n": types.HotelAmenityFragmentFragmentDoc,
    "\n  mutation CreateHotelAmenity($input: CreateHotelAmenity!) {\n    createHotelAmenity(input: $input) {\n      ...HotelAmenityFragment\n    }\n  }\n": types.CreateHotelAmenityDocument,
    "\n  mutation DeleteHotelAmenity($id: ID!) {\n    deleteHotelAmenity(id: $id)\n  }\n": types.DeleteHotelAmenityDocument,
    "\n  query Amenities {\n    amenities(first: 18) {\n      edges {\n        node {\n          ...AmenityFragment\n        }\n      }\n    }\n  }\n": types.AmenitiesDocument,
    "\n  query HotelAmenities($hotelId: String!) {\n    hotelAmenitiesByHotelId(hotelId: $hotelId) {\n      ...HotelAmenityFragment\n    }\n  }\n": types.HotelAmenitiesDocument,
    "\n  fragment CityFragment on City {\n    id\n    city\n    city_description\n    region_id\n  }\n": types.CityFragmentFragmentDoc,
    "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n": types.CountryFragmentFragmentDoc,
    "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n    latitude\n    longitude\n    Location {\n      id\n      location_name\n      location_description\n      City {\n        ...CityFragment\n        Region {\n          ...RegionFragment\n          Country {\n            ...CountryFragment\n          }\n        }\n      }\n    }\n  }\n": types.HotelFragmentFragmentDoc,
    "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n": types.RegionFragmentFragmentDoc,
    "\n  mutation CreateLocation($input: CreateLocation!) {\n    createLocation(input: $input) {\n      id\n      location_name\n      location_description\n      city_id\n    }\n  }\n": types.CreateLocationDocument,
    "\n  mutation UpdateHotel($input: UpdateHotel!) {\n    updateHotel(input: $input) {\n      id\n    }\n  }\n": types.UpdateHotelDocument,
    "\n  mutation UpdateLocation($input: UpdateLocation!) {\n    updateLocation(input: $input) {\n      id\n    }\n  }\n": types.UpdateLocationDocument,
    "\n  query CitiesByRegionId($regionId: String!) {\n    citiesByRegionId(regionId: $regionId) {\n      ...CityFragment\n    }\n  }\n": types.CitiesByRegionIdDocument,
    "\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n": types.CountriesDocument,
    "\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n": types.HotelDocument,
    "\n  query FilesByHotelId($hotelId: String!) {\n    filesByHotelId(hotelId: $hotelId) {\n      id\n      url\n    }\n  }\n": types.FilesByHotelIdDocument,
    "\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n": types.RegionsByCountryIdDocument,
    "\n  fragment HotelPolicyFragment on HotelPolicy {\n    id\n    hotel_policy\n    policy_name\n    hotel_id\n  }\n": types.HotelPolicyFragmentFragmentDoc,
    "\n  mutation CreateHotelPolicy($input: CreateHotelPolicy!) {\n    createHotelPolicy(input: $input) {\n      ...HotelPolicyFragment\n    }\n  }\n": types.CreateHotelPolicyDocument,
    "\n  mutation DeleteHotelPolicy($id: ID!) {\n    deleteHotelPolicy(id: $id)\n  }\n": types.DeleteHotelPolicyDocument,
    "\n  mutation UpdateHotelPolicy($input: UpdateHotelPolicy!) {\n    updateHotelPolicy(input: $input) {\n      ...HotelPolicyFragment\n    }\n  }\n": types.UpdateHotelPolicyDocument,
    "\n  query HotelPoliciesByHotelId($hotelId: String!) {\n    hotelPoliciesByHotelId(hotelId: $hotelId) {\n      ...HotelPolicyFragment\n    }\n  }\n": types.HotelPoliciesByHotelIdDocument,
    "\n  fragment HotelRoomFragment on HotelRoom {\n    id\n    room_type\n    quantity\n    size\n    bed_type\n    capacity\n    price_type\n    price\n    discounted_price\n    hotel_id\n  }\n": types.HotelRoomFragmentFragmentDoc,
    "\n  fragment HotelRoomInclusionFragment on HotelRoomInclusion {\n    id\n    inclusion\n    hotel_room_id\n  }\n": types.HotelRoomInclusionFragmentFragmentDoc,
    "\n  fragment HotelRoomPriceFragment on HotelRoomPrice {\n    id\n    price\n    hotel_room_price_season_id\n  }\n": types.HotelRoomPriceFragmentFragmentDoc,
    "\n  fragment HotelRoomPriceSeasonFragment on HotelRoomPriceSeason {\n    id\n    season_start\n    season_end\n    hotel_room_price_year_id\n  }\n": types.HotelRoomPriceSeasonFragmentFragmentDoc,
    "\n  fragment HotelRoomPriceYearFragment on HotelRoomPriceYear {\n    id\n    room_price_year\n    hotel_room_id\n    hotelRoomPriceSeason {\n      id\n    }\n  }\n": types.HotelRoomPriceYearFragmentFragmentDoc,
    "\n  mutation CreateHotelRoom($input: CreateHotelRoom!) {\n    createHotelRoom(input: $input) {\n      ...HotelRoomFragment\n    }\n  }\n": types.CreateHotelRoomDocument,
    "\n  mutation CreateHotelRoomInclusion($input: CreateHotelRoomInclusion!) {\n    createHotelRoomInclusion(input: $input) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n": types.CreateHotelRoomInclusionDocument,
    "\n  mutation CreateHotelRoomPrice($input: CreateHotelRoomPrice!) {\n    createHotelRoomPrice(input: $input) {\n      ...HotelRoomPriceFragment\n    }\n  }\n": types.CreateHotelRoomPriceDocument,
    "\n  mutation CreateHotelRoomPriceSeason($input: CreateHotelRoomPriceSeason!) {\n    createHotelRoomPriceSeason(input: $input) {\n      ...HotelRoomPriceSeasonFragment\n    }\n  }\n": types.CreateHotelRoomPriceSeasonDocument,
    "\n  mutation CreateHotelRoomPriceYear($input: CreateHotelRoomPriceYear!) {\n    createHotelRoomPriceYear(input: $input) {\n      ...HotelRoomPriceYearFragment\n    }\n  }\n": types.CreateHotelRoomPriceYearDocument,
    "\n  mutation DeleteHotelRoom($id: ID!) {\n    deleteHotelRoom(id: $id)\n  }\n": types.DeleteHotelRoomDocument,
    "\n  mutation DeleteHotelRoomInclusion($id: ID!) {\n    deleteHotelRoomInclusion(id: $id)\n  }\n": types.DeleteHotelRoomInclusionDocument,
    "\n  mutation DeleteHotelRoomPriceSeason($id: ID!) {\n    deleteHotelRoomPriceSeason(id: $id)\n  }\n": types.DeleteHotelRoomPriceSeasonDocument,
    "\n  mutation DeleteHotelRoomPriceYear($id: ID!) {\n    deleteHotelRoomPriceYear(id: $id)\n  }\n": types.DeleteHotelRoomPriceYearDocument,
    "\n  mutation UpdateHotelRoom($input: UpdateHotelRoom!) {\n    updateHotelRoom(input: $input) {\n      ...HotelRoomFragment\n    }\n  }\n": types.UpdateHotelRoomDocument,
    "\n  mutation UpdateHotelRoomInclusion($input: UpdateHotelRoomInclusion!) {\n    updateHotelRoomInclusion(input: $input) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n": types.UpdateHotelRoomInclusionDocument,
    "\n  mutation UpdateHotelRoomPrice($input: UpdateHotelRoomPrice!) {\n    updateHotelRoomPrice(input: $input) {\n      ...HotelRoomPriceFragment\n    }\n  }\n": types.UpdateHotelRoomPriceDocument,
    "\n  query HotelRoom($id: ID!) {\n    hotelRoom(id: $id) {\n      ...HotelRoomFragment\n    }\n  }\n": types.HotelRoomDocument,
    "\n  query HotelRoomInclusionsByHotelRoomId($hotelRoomId: String!) {\n    hotelRoomInclusionsByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n": types.HotelRoomInclusionsByHotelRoomIdDocument,
    "\n  query HotelRoomPriceByHotelRoomPriceSeasonId(\n    $hotelRoomPriceSeasonId: String!\n  ) {\n    hotelRoomPriceByHotelRoomPriceSeasonId(\n      hotelRoomPriceSeasonId: $hotelRoomPriceSeasonId\n    ) {\n      ...HotelRoomPriceFragment\n    }\n  }\n": types.HotelRoomPriceByHotelRoomPriceSeasonIdDocument,
    "\n  query HotelRoomPriceSeasonsByHotelRoomPriceYearId(\n    $hotelRoomPriceYearId: String!\n  ) {\n    hotelRoomPriceSeasonsByHotelRoomPriceYearId(\n      hotelRoomPriceYearId: $hotelRoomPriceYearId\n    ) {\n      ...HotelRoomPriceSeasonFragment\n    }\n  }\n": types.HotelRoomPriceSeasonsByHotelRoomPriceYearIdDocument,
    "\n  query HotelRoomPriceYearsByHotelRoomId($hotelRoomId: String!) {\n    hotelRoomPriceYearsByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      ...HotelRoomPriceYearFragment\n    }\n  }\n": types.HotelRoomPriceYearsByHotelRoomIdDocument,
    "\n  query HotelRoomsByHotelId($hotelId: String!) {\n    hotelRoomsByHotelId(hotelId: $hotelId) {\n      ...HotelRoomFragment\n    }\n  }\n": types.HotelRoomsByHotelIdDocument,
    "\n  query FilesByHotelRoomId($hotelRoomId: String!) {\n    filesByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      id\n      url\n    }\n  }\n": types.FilesByHotelRoomIdDocument,
    "\n  fragment FileFragment on File {\n    id\n    caption\n    mimetype\n    file_key\n    file_type\n  }\n": types.FileFragmentFragmentDoc,
    "\n  mutation CreateFile($input: CreateFile!) {\n    createFile(input: $input) {\n      ...FileFragment\n    }\n  }\n": types.CreateFileDocument,
    "\n  mutation DeleteFile($id: ID!) {\n    deleteFile(id: $id)\n  }\n": types.DeleteFileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AmenityFragment on Amenity {\n    id\n    amenity\n    icon\n    type\n  }\n"): (typeof documents)["\n  fragment AmenityFragment on Amenity {\n    id\n    amenity\n    icon\n    type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelAmenityFragment on HotelAmenity {\n    id\n    hotel_id\n    amenity_id\n  }\n"): (typeof documents)["\n  fragment HotelAmenityFragment on HotelAmenity {\n    id\n    hotel_id\n    amenity_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHotelAmenity($input: CreateHotelAmenity!) {\n    createHotelAmenity(input: $input) {\n      ...HotelAmenityFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateHotelAmenity($input: CreateHotelAmenity!) {\n    createHotelAmenity(input: $input) {\n      ...HotelAmenityFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHotelAmenity($id: ID!) {\n    deleteHotelAmenity(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteHotelAmenity($id: ID!) {\n    deleteHotelAmenity(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Amenities {\n    amenities(first: 18) {\n      edges {\n        node {\n          ...AmenityFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Amenities {\n    amenities(first: 18) {\n      edges {\n        node {\n          ...AmenityFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HotelAmenities($hotelId: String!) {\n    hotelAmenitiesByHotelId(hotelId: $hotelId) {\n      ...HotelAmenityFragment\n    }\n  }\n"): (typeof documents)["\n  query HotelAmenities($hotelId: String!) {\n    hotelAmenitiesByHotelId(hotelId: $hotelId) {\n      ...HotelAmenityFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CityFragment on City {\n    id\n    city\n    city_description\n    region_id\n  }\n"): (typeof documents)["\n  fragment CityFragment on City {\n    id\n    city\n    city_description\n    region_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n"): (typeof documents)["\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n    latitude\n    longitude\n    Location {\n      id\n      location_name\n      location_description\n      City {\n        ...CityFragment\n        Region {\n          ...RegionFragment\n          Country {\n            ...CountryFragment\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n    latitude\n    longitude\n    Location {\n      id\n      location_name\n      location_description\n      City {\n        ...CityFragment\n        Region {\n          ...RegionFragment\n          Country {\n            ...CountryFragment\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n"): (typeof documents)["\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateLocation($input: CreateLocation!) {\n    createLocation(input: $input) {\n      id\n      location_name\n      location_description\n      city_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateLocation($input: CreateLocation!) {\n    createLocation(input: $input) {\n      id\n      location_name\n      location_description\n      city_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHotel($input: UpdateHotel!) {\n    updateHotel(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateHotel($input: UpdateHotel!) {\n    updateHotel(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateLocation($input: UpdateLocation!) {\n    updateLocation(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateLocation($input: UpdateLocation!) {\n    updateLocation(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CitiesByRegionId($regionId: String!) {\n    citiesByRegionId(regionId: $regionId) {\n      ...CityFragment\n    }\n  }\n"): (typeof documents)["\n  query CitiesByRegionId($regionId: String!) {\n    citiesByRegionId(regionId: $regionId) {\n      ...CityFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n"): (typeof documents)["\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FilesByHotelId($hotelId: String!) {\n    filesByHotelId(hotelId: $hotelId) {\n      id\n      url\n    }\n  }\n"): (typeof documents)["\n  query FilesByHotelId($hotelId: String!) {\n    filesByHotelId(hotelId: $hotelId) {\n      id\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n"): (typeof documents)["\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelPolicyFragment on HotelPolicy {\n    id\n    hotel_policy\n    policy_name\n    hotel_id\n  }\n"): (typeof documents)["\n  fragment HotelPolicyFragment on HotelPolicy {\n    id\n    hotel_policy\n    policy_name\n    hotel_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHotelPolicy($input: CreateHotelPolicy!) {\n    createHotelPolicy(input: $input) {\n      ...HotelPolicyFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateHotelPolicy($input: CreateHotelPolicy!) {\n    createHotelPolicy(input: $input) {\n      ...HotelPolicyFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHotelPolicy($id: ID!) {\n    deleteHotelPolicy(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteHotelPolicy($id: ID!) {\n    deleteHotelPolicy(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHotelPolicy($input: UpdateHotelPolicy!) {\n    updateHotelPolicy(input: $input) {\n      ...HotelPolicyFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateHotelPolicy($input: UpdateHotelPolicy!) {\n    updateHotelPolicy(input: $input) {\n      ...HotelPolicyFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HotelPoliciesByHotelId($hotelId: String!) {\n    hotelPoliciesByHotelId(hotelId: $hotelId) {\n      ...HotelPolicyFragment\n    }\n  }\n"): (typeof documents)["\n  query HotelPoliciesByHotelId($hotelId: String!) {\n    hotelPoliciesByHotelId(hotelId: $hotelId) {\n      ...HotelPolicyFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelRoomFragment on HotelRoom {\n    id\n    room_type\n    quantity\n    size\n    bed_type\n    capacity\n    price_type\n    price\n    discounted_price\n    hotel_id\n  }\n"): (typeof documents)["\n  fragment HotelRoomFragment on HotelRoom {\n    id\n    room_type\n    quantity\n    size\n    bed_type\n    capacity\n    price_type\n    price\n    discounted_price\n    hotel_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelRoomInclusionFragment on HotelRoomInclusion {\n    id\n    inclusion\n    hotel_room_id\n  }\n"): (typeof documents)["\n  fragment HotelRoomInclusionFragment on HotelRoomInclusion {\n    id\n    inclusion\n    hotel_room_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelRoomPriceFragment on HotelRoomPrice {\n    id\n    price\n    hotel_room_price_season_id\n  }\n"): (typeof documents)["\n  fragment HotelRoomPriceFragment on HotelRoomPrice {\n    id\n    price\n    hotel_room_price_season_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelRoomPriceSeasonFragment on HotelRoomPriceSeason {\n    id\n    season_start\n    season_end\n    hotel_room_price_year_id\n  }\n"): (typeof documents)["\n  fragment HotelRoomPriceSeasonFragment on HotelRoomPriceSeason {\n    id\n    season_start\n    season_end\n    hotel_room_price_year_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelRoomPriceYearFragment on HotelRoomPriceYear {\n    id\n    room_price_year\n    hotel_room_id\n    hotelRoomPriceSeason {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment HotelRoomPriceYearFragment on HotelRoomPriceYear {\n    id\n    room_price_year\n    hotel_room_id\n    hotelRoomPriceSeason {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHotelRoom($input: CreateHotelRoom!) {\n    createHotelRoom(input: $input) {\n      ...HotelRoomFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateHotelRoom($input: CreateHotelRoom!) {\n    createHotelRoom(input: $input) {\n      ...HotelRoomFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHotelRoomInclusion($input: CreateHotelRoomInclusion!) {\n    createHotelRoomInclusion(input: $input) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateHotelRoomInclusion($input: CreateHotelRoomInclusion!) {\n    createHotelRoomInclusion(input: $input) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHotelRoomPrice($input: CreateHotelRoomPrice!) {\n    createHotelRoomPrice(input: $input) {\n      ...HotelRoomPriceFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateHotelRoomPrice($input: CreateHotelRoomPrice!) {\n    createHotelRoomPrice(input: $input) {\n      ...HotelRoomPriceFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHotelRoomPriceSeason($input: CreateHotelRoomPriceSeason!) {\n    createHotelRoomPriceSeason(input: $input) {\n      ...HotelRoomPriceSeasonFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateHotelRoomPriceSeason($input: CreateHotelRoomPriceSeason!) {\n    createHotelRoomPriceSeason(input: $input) {\n      ...HotelRoomPriceSeasonFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHotelRoomPriceYear($input: CreateHotelRoomPriceYear!) {\n    createHotelRoomPriceYear(input: $input) {\n      ...HotelRoomPriceYearFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateHotelRoomPriceYear($input: CreateHotelRoomPriceYear!) {\n    createHotelRoomPriceYear(input: $input) {\n      ...HotelRoomPriceYearFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHotelRoom($id: ID!) {\n    deleteHotelRoom(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteHotelRoom($id: ID!) {\n    deleteHotelRoom(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHotelRoomInclusion($id: ID!) {\n    deleteHotelRoomInclusion(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteHotelRoomInclusion($id: ID!) {\n    deleteHotelRoomInclusion(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHotelRoomPriceSeason($id: ID!) {\n    deleteHotelRoomPriceSeason(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteHotelRoomPriceSeason($id: ID!) {\n    deleteHotelRoomPriceSeason(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHotelRoomPriceYear($id: ID!) {\n    deleteHotelRoomPriceYear(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteHotelRoomPriceYear($id: ID!) {\n    deleteHotelRoomPriceYear(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHotelRoom($input: UpdateHotelRoom!) {\n    updateHotelRoom(input: $input) {\n      ...HotelRoomFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateHotelRoom($input: UpdateHotelRoom!) {\n    updateHotelRoom(input: $input) {\n      ...HotelRoomFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHotelRoomInclusion($input: UpdateHotelRoomInclusion!) {\n    updateHotelRoomInclusion(input: $input) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateHotelRoomInclusion($input: UpdateHotelRoomInclusion!) {\n    updateHotelRoomInclusion(input: $input) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHotelRoomPrice($input: UpdateHotelRoomPrice!) {\n    updateHotelRoomPrice(input: $input) {\n      ...HotelRoomPriceFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateHotelRoomPrice($input: UpdateHotelRoomPrice!) {\n    updateHotelRoomPrice(input: $input) {\n      ...HotelRoomPriceFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HotelRoom($id: ID!) {\n    hotelRoom(id: $id) {\n      ...HotelRoomFragment\n    }\n  }\n"): (typeof documents)["\n  query HotelRoom($id: ID!) {\n    hotelRoom(id: $id) {\n      ...HotelRoomFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HotelRoomInclusionsByHotelRoomId($hotelRoomId: String!) {\n    hotelRoomInclusionsByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n"): (typeof documents)["\n  query HotelRoomInclusionsByHotelRoomId($hotelRoomId: String!) {\n    hotelRoomInclusionsByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      ...HotelRoomInclusionFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HotelRoomPriceByHotelRoomPriceSeasonId(\n    $hotelRoomPriceSeasonId: String!\n  ) {\n    hotelRoomPriceByHotelRoomPriceSeasonId(\n      hotelRoomPriceSeasonId: $hotelRoomPriceSeasonId\n    ) {\n      ...HotelRoomPriceFragment\n    }\n  }\n"): (typeof documents)["\n  query HotelRoomPriceByHotelRoomPriceSeasonId(\n    $hotelRoomPriceSeasonId: String!\n  ) {\n    hotelRoomPriceByHotelRoomPriceSeasonId(\n      hotelRoomPriceSeasonId: $hotelRoomPriceSeasonId\n    ) {\n      ...HotelRoomPriceFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HotelRoomPriceSeasonsByHotelRoomPriceYearId(\n    $hotelRoomPriceYearId: String!\n  ) {\n    hotelRoomPriceSeasonsByHotelRoomPriceYearId(\n      hotelRoomPriceYearId: $hotelRoomPriceYearId\n    ) {\n      ...HotelRoomPriceSeasonFragment\n    }\n  }\n"): (typeof documents)["\n  query HotelRoomPriceSeasonsByHotelRoomPriceYearId(\n    $hotelRoomPriceYearId: String!\n  ) {\n    hotelRoomPriceSeasonsByHotelRoomPriceYearId(\n      hotelRoomPriceYearId: $hotelRoomPriceYearId\n    ) {\n      ...HotelRoomPriceSeasonFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HotelRoomPriceYearsByHotelRoomId($hotelRoomId: String!) {\n    hotelRoomPriceYearsByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      ...HotelRoomPriceYearFragment\n    }\n  }\n"): (typeof documents)["\n  query HotelRoomPriceYearsByHotelRoomId($hotelRoomId: String!) {\n    hotelRoomPriceYearsByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      ...HotelRoomPriceYearFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HotelRoomsByHotelId($hotelId: String!) {\n    hotelRoomsByHotelId(hotelId: $hotelId) {\n      ...HotelRoomFragment\n    }\n  }\n"): (typeof documents)["\n  query HotelRoomsByHotelId($hotelId: String!) {\n    hotelRoomsByHotelId(hotelId: $hotelId) {\n      ...HotelRoomFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FilesByHotelRoomId($hotelRoomId: String!) {\n    filesByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      id\n      url\n    }\n  }\n"): (typeof documents)["\n  query FilesByHotelRoomId($hotelRoomId: String!) {\n    filesByHotelRoomId(hotelRoomId: $hotelRoomId) {\n      id\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FileFragment on File {\n    id\n    caption\n    mimetype\n    file_key\n    file_type\n  }\n"): (typeof documents)["\n  fragment FileFragment on File {\n    id\n    caption\n    mimetype\n    file_key\n    file_type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateFile($input: CreateFile!) {\n    createFile(input: $input) {\n      ...FileFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFile($input: CreateFile!) {\n    createFile(input: $input) {\n      ...FileFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteFile($id: ID!) {\n    deleteFile(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteFile($id: ID!) {\n    deleteFile(id: $id)\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;