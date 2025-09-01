import { useQuery } from "@tanstack/react-query";
import { getCityById } from "@/actions/cities";

export function useCityById(id: string) {
  return useQuery({
    queryKey: ["city", id],
    queryFn: () => getCityById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

