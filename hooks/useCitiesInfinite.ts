import { useInfiniteQuery } from "@tanstack/react-query";
import { getCities } from "@/actions/cities";
import { CitiesResponse } from "@/types/citiesType";

export function useCitiesInfinite(isVisible?: number, governorateId?: string) {
  return useInfiniteQuery({
    queryKey: ["cities", isVisible, governorateId],
    queryFn: ({ pageParam = 1 }) =>
      getCities(pageParam, 10, isVisible, governorateId),
    getNextPageParam: (lastPage: CitiesResponse) => {
      if (lastPage.current_page < lastPage.total_pages) {
        return lastPage.current_page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

