import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelPoliciesByHotelIdQuery } from "../../schema/queries/hotelPoliciesByHotelIdQuery";
import {
  HotelPoliciesByHotelIdQuery,
  HotelPolicyFragmentFragment,
} from "@/shared/graphql/graphql";
import { useHotelPoliciesStore } from "../../store";
export function useHotelPoliciesByHotelId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { setHotelPolicies } = useHotelPoliciesStore();
  const { data, isLoading, error } = useSuspenseQuery<
    HotelPoliciesByHotelIdQuery,
    Error
  >({
    queryKey: ["hotelPoliciesByHotelId", orgId],
    queryFn: async () => {
      const response = await requestAPI<HotelPoliciesByHotelIdQuery>(
        hotelPoliciesByHotelIdQuery,
        {
          hotelId: orgId,
        }
      );
      setHotelPolicies(
        response.hotelPoliciesByHotelId as HotelPolicyFragmentFragment[]
      );
      return response;
    },
  });
  return {
    policies: data?.hotelPoliciesByHotelId as HotelPolicyFragmentFragment[],
    isLoading,
    error,
  };
}
