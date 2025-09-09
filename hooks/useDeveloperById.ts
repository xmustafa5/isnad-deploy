import { useQuery } from "@tanstack/react-query";
import { getDeveloperById } from "@/actions/developers";

export function useDeveloperById(id: string) {
  return useQuery({
    queryKey: ["developer", id],
    queryFn: () => getDeveloperById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}