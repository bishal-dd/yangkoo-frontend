import { useRequestAPI } from "@/shared/utils/request";
import { regionsByCountryIdQuery } from "../../schema/queries/regionsByCountryId";
import { RegionsByCountryIdQuery } from "@/shared/graphql/graphql";
import { Region } from "../../types/types";
import { useRegionsStore } from "../../store/useRegion";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export function useRegionsByCountryId() {
  const requestAPI = useRequestAPI();
  const queryClient = useQueryClient();
  const { setRegions } = useRegionsStore();

  const regionsByCountryId = useCallback(
    async (countryId: string = "") => {
      try {
        const response = await queryClient.fetchQuery({
          queryKey: ["regionsByCountryId", countryId],
          queryFn: async () => {
            return await requestAPI<RegionsByCountryIdQuery>(
              regionsByCountryIdQuery,
              {
                countryId,
              }
            );
          },
        });

        setRegions(response.regionsByCountryId as Region[]);
        return response;
      } catch (error) {
        console.error("Error fetching products:", error);
        return { regionsByCountryId: [] };
      }
    },
    [queryClient, requestAPI, setRegions]
  );

  return { regionsByCountryId };
}
