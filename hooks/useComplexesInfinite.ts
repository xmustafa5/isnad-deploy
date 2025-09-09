import { useInfiniteQuery } from "@tanstack/react-query";
import { getComplexes } from "@/actions/complexes";
import { ComplexesResponse } from "@/types/complexesType";

export function useComplexesInfinite(developerId?: string) {
  return useInfiniteQuery({
    queryKey: ["complexes", developerId],
    queryFn: ({ pageParam = 1 }) => getComplexes(pageParam, 10, developerId),
    getNextPageParam: (lastPage: ComplexesResponse) => {
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
