import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { amenitiesQuery } from "../../schema/queries/amenitiesQuery";
import {
  AmenityFragmentFragment,
  AmenitiesQuery,
} from "@/shared/graphql/graphql";
export function useAmenities() {
  const requestAPI = useRequestAPI();

  const { data, isLoading, error } = useSuspenseQuery<AmenitiesQuery, Error>({
    queryKey: ["amenities"],
    queryFn: async () => {
      const response = await requestAPI<AmenitiesQuery>(amenitiesQuery);
      return response;
    },
  });
  return {
    amenities: data?.amenities.edges.map(
      (edge) => edge.node
    ) as AmenityFragmentFragment[],
    isLoading,
    error,
  };
}
