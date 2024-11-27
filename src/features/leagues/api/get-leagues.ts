import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import type { Game } from "../../../lib/entities/game-stats";
import { mainLeagues } from "../../../lib/data-test";

export const useGetLeagues = (onlyMainLeagues: boolean = false) => {
  const query = useQuery({
    queryKey: ["leagues", onlyMainLeagues],
    queryFn: async () => {
      const { data } = await api.get<{ response: Game[] }>(
        `/leagues?live=all${
          onlyMainLeagues
            ? `&league=${mainLeagues.map((league) => league.value).join(",")}`
            : ""
        }`
      );

      return data.response;
    },
    staleTime: 120000, // 2 minute
    refetchInterval: 120000, // 2 minute
  });

  return query;
};
