import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { countriesQuery } from "../../schema/queries/countries";
import {
  CountryFragmentFragment,
  CountriesQuery,
} from "@/shared/graphql/graphql";
export function useCountries() {
  const requestAPI = useRequestAPI();

  const { data, isLoading, error } = useSuspenseQuery<CountriesQuery, Error>({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await requestAPI<CountriesQuery>(countriesQuery);
      return response;
    },
  });
  return {
    countries: data?.countries.edges.map(
      (edge) => edge.node
    ) as CountryFragmentFragment[],
    isLoading,
    error,
  };
}
