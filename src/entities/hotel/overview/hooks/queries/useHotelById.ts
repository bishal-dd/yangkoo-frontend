import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelByIdQuery } from "../../schema/queries/hotelById";
import {
  HotelFragmentFragment,
  HotelQuery,
  Location,
} from "@/shared/graphql/graphql";
import {
  useDefaultCountryStore,
  useDefaultRegionStore,
  useDefaultCityStore,
  useDefaultLocationStore,
} from "../../store";
import { Country, Region, City } from "../../types/types";
import { useRegionsByCountryId } from "./useRegionsByCountryId";
import { useCitiesByRegionId } from "./useCitiesByRegionId";
export function useHotelById(orgId: string) {
  const requestAPI = useRequestAPI();
  const { setDefaultCountry } = useDefaultCountryStore();
  const { setDefaultRegion } = useDefaultRegionStore();
  const { regionsByCountryId } = useRegionsByCountryId();
  const { citiesByRegionId } = useCitiesByRegionId();
  const { setDefaultCity } = useDefaultCityStore();
  const { setDefaultLocation } = useDefaultLocationStore();

  const { data, isLoading, error } = useSuspenseQuery<HotelQuery, Error>({
    queryKey: ["hotelById", orgId],
    queryFn: async () => {
      const response = await requestAPI<HotelQuery>(hotelByIdQuery, {
        id: orgId,
      });
      const data = response.hotel as HotelFragmentFragment;
      const country = data.Location?.City?.Region?.Country as Country;
      const region = data.Location?.City?.Region as Region;
      const city = data.Location?.City as City;
      const location = data.Location as Location;

      if (country) {
        setDefaultCountry(country);
        regionsByCountryId(country.id);
      }
      if (region) {
        setDefaultRegion(region);
        citiesByRegionId(region.id);
      }
      if (city) {
        setDefaultCity(city);
        setDefaultLocation(location);
      }
      return response;
    },
  });
  return {
    hotel: data?.hotel as HotelFragmentFragment,
    isLoading,
    error,
  };
}
