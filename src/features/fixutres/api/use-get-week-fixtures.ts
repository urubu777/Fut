import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import type { Game } from "../../../lib/entities/game-stats";
// import { mainLeagues } from "../../../lib/data-test";

export const useGetWeekFixtures = (leagueId: number = 71) => {
  const query = useQuery({
    queryKey: ["week-fixtures", leagueId],
    queryFn: async () => {
      const today = new Date().toISOString().split("T")[0];
      const startOfWeek = new Date();
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
      const startOfWeekStr = startOfWeek.toISOString().split("T")[0];
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(endOfWeek.getDate() + 6);
      const endOfWeekStr = endOfWeek.toISOString().split("T")[0];

      const { data } = await api.get<{ response: Game[] }>(
        `/fixtures?from=${startOfWeekStr}&to=${endOfWeekStr}&league=${leagueId}&season=${new Date().getFullYear()}`
      );

      console.log(data);

      return data.response;
    },

    staleTime: 60000, // 1 minute
    refetchInterval: 60000, // 1 minute
  });

  return query;
};
