import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import type { Response } from "../../../lib/entities/fixture";

export const useGetFixture = (fixtureId: string) => {
  const query = useQuery({
    queryKey: ["fixture", fixtureId],
    queryFn: async () => {
      const { data } = await api.get<{ response: Response[] }>(
        `/fixtures?id=${fixtureId}`
      );

      console.log(data);

      return data.response;
    },

    staleTime: 60000, // 1 minute
    refetchInterval: 60000, // 1 minute
  });

  return query;
};
