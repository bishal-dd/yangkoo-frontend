import { useRequestAPI } from "@/shared/utils/request";
import { citiesByRegionIdQuery } from "../../schema/queries/citiesByRegionId";
import { CitiesByRegionIdQuery } from "@/shared/graphql/graphql";
import { City } from "../../types/types";
import { useCitiesStore } from "../../store";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export function useCitiesByRegionId() {
  const requestAPI = useRequestAPI();
  const queryClient = useQueryClient();
  const { setCities } = useCitiesStore();

  const citiesByRegionId = useCallback(
    async (regionId: string = "") => {
      try {
        const response = await queryClient.fetchQuery({
          queryKey: ["citiesByRegionId", regionId],
          queryFn: async () => {
            return await requestAPI<CitiesByRegionIdQuery>(
              citiesByRegionIdQuery,
              {
                regionId,
              }
            );
          },
        });
        setCities(response.citiesByRegionId as City[]);
        return response;
      } catch (error) {
        console.error("Error fetching cities:", error);
        return { citiesByRegionId: [] };
      }
    },
    [queryClient, requestAPI, setCities]
  );

  return { citiesByRegionId };
}
