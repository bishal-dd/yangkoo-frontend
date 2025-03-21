import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelAmenitiesQuery } from "../../schema/queries/hotelAmenities";
import {
  HotelAmenitiesQuery,
  HotelAmenityFragmentFragment,
} from "@/shared/graphql/graphql";
import { useAmenityStore } from "../../store";
export function useHotelAmenitiesByHotelId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { initializeAmenities } = useAmenityStore();
  const { data, isLoading, error, refetch } = useSuspenseQuery<
    HotelAmenitiesQuery,
    Error
  >({
    queryKey: ["hotelPoliciesByHotelId", orgId],
    queryFn: async () => {
      const response = await requestAPI<HotelAmenitiesQuery>(
        hotelAmenitiesQuery,
        {
          hotelId: orgId,
        }
      );
      const data =
        response.hotelAmenitiesByHotelId as HotelAmenityFragmentFragment[];
      initializeAmenities(data?.map((a) => a?.amenity_id) as string[]);
      return response;
    },
  });
  return {
    hotelAmenities:
      data?.hotelAmenitiesByHotelId as HotelAmenityFragmentFragment[],
    isLoading,
    error,
    refetch,
  };
}
