import { useQuery } from "@tanstack/react-query";
import { getComplexById } from "@/actions/complexes";

export function useComplexById(id: string) {
  return useQuery({
    queryKey: ["complex", id],
    queryFn: () => getComplexById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}
