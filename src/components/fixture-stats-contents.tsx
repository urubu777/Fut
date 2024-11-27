import { TbBallFootball } from "react-icons/tb";
import type { Response } from "../lib/entities/fixture";
import { cn, translateEvents, translateStats } from "../lib/utils";

export const FixtureStatsContent = ({ data }: { data: Response }) => {
  const translatedStatistics = data.statistics[0].statistics.map(
    (statistic) => ({
      type: translateStats(statistic.type),
    })
  );

  const homeTeamColor = data.lineups[0].team.colors.player.primary;
  const awayTeamColor = data.lineups[1].team.colors.player.primary;

  const homeTeamStatistics = data.statistics[0].statistics.map((stats) => ({
    value: stats.value ?? 0,
  }));

  const awayTeamStatistics = data.statistics[1].statistics.map((stats) => ({
    value: stats.value ?? 0,
  }));

  const getWidthStatsBar = (index: number) => {
    const homeTeamStats = homeTeamStatistics[index].value;
    const awayTeamStats = awayTeamStatistics[index].value;

    if (
      typeof homeTeamStats === "number" &&
      typeof awayTeamStats === "number"
    ) {
      const totalStats = homeTeamStats + awayTeamStats;
      const homeTeamPercentage =
        totalStats > 0 ? (homeTeamStats / totalStats) * 100 : 0;
      const awayTeamPercentage =
        totalStats > 0 ? (awayTeamStats / totalStats) * 100 : 0;

      return {
        homeTeamPercentage: homeTeamPercentage.toFixed(2),
        awayTeamPercentage: awayTeamPercentage.toFixed(2),
      };
    } else if (homeTeamStats.includes(".") && awayTeamStats.includes(".")) {
      const totalStats = Number(homeTeamStats) + Number(awayTeamStats);
      const homeTeamPercentage =
        totalStats > 0 ? (Number(homeTeamStats) / totalStats) * 100 : 0;
      const awayTeamPercentage =
        totalStats > 0 ? (Number(awayTeamStats) / totalStats) * 100 : 0;

      return {
        homeTeamPercentage,
        awayTeamPercentage,
      };
    }

    return {
      homeTeamPercentage: homeTeamStats.split("%")[0],
      awayTeamPercentage: awayTeamStats.split("%")[0],
    };
  };

  return (
    <div className={`p-6 rounded-lg bg-neutral flex flex-col gap-6`}>
      <div className="flex flex-col text-sm md:text-base gap-3 text-center">
        {translatedStatistics.map((statistic, index) => (
          <div key={index} className="flex-flex-col items-center gap-3">
            <span className="font-bold">{statistic.type}</span>
            <div className="w-full flex items-center justify-between">
              <span>{homeTeamStatistics[index].value}</span>
              <div className="w-[60%] flex h-3 rounded-full bg-slate-600 mx-auto overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${getWidthStatsBar(index).homeTeamPercentage}%`,
                    backgroundColor: `#${homeTeamColor}`,
                  }}
                />
                <div
                  className="h-full"
                  style={{
                    width: `${getWidthStatsBar(index).awayTeamPercentage}%`,
                    backgroundColor: `#${awayTeamColor}`,
                  }}
                />
              </div>
              <span>{awayTeamStatistics[index].value}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3"></div>
    </div>
  );
};

export const FixtureStatsLineUp = ({ data }: { data: Response }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className={`p-8 rounded-lg bg-neutral flex flex-col gap-6`}>
        <div className="flex flex-col text-sm md:text-base gap-3 text-center">
          <h2 className="text-xl font-semibold">Titulares</h2>
          <div
            className="flex items-center justify-center flex-col md:flex-row 
          md:justify-between gap-4"
          >
            {data.lineups.map((lineup, index) => (
              <div key={index} className="flex flex-col gap-1 items-start">
                <span className="mb-2">
                  <strong>Formação:</strong> {lineup.formation}
                </span>
                {lineup.startXI.map((player, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="font-semibold">
                      {player.player.number}
                    </span>
                    <span>{player.player.name}</span>
                  </div>
                ))}
                <span className="mt-4">
                  <strong>Treinador:</strong> {lineup.coach.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`p-8 rounded-lg bg-neutral flex flex-col gap-6`}>
        <div className="flex flex-col text-sm md:text-base gap-3 text-center">
          <h2 className="text-xl font-semibold">Substitutos</h2>
          <div
            className="flex items-center justify-center flex-col md:flex-row 
          md:justify-between gap-4"
          >
            {data.lineups.map((lineup, index) => (
              <div key={index} className="flex flex-col gap-1 items-start">
                {lineup.substitutes.map((player, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="font-semibold">
                      {player.player.number}
                    </span>
                    <span>{player.player.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FixtureStatsEvents = ({ data }: { data: Response }) => {
  return (
    <div className="flex flex-col gap-2">
      {data.events.reverse().map((event, index) => {
        const { translate, icon: Icon, style } = translateEvents(event.detail);

        return (
          <div
            key={index}
            className={`p-8 rounded-lg bg-neutral flex flex-col items-center relative overflow-hidden`}
          >
            <div
              className="absolute bg-white text-emerald-700 left-0 top-0 
          w-12 h-8 flex items-center justify-center font-bold rounded-br-lg"
            >
              <span>{event.time.elapsed}'</span>
            </div>
            {Icon && (
              <Icon
                className={cn(
                  "size-10 absolute top-8 md:top-1/2 -right-2 md:right-2 -translate-x-1/2 -translate-y-1/2",
                  style
                )}
              />
            )}
            <div className="flex flex-col gap-1 items-center">
              <div className="flex flex-col items-center">
                <img
                  src={event.team.logo}
                  alt={event.team.name}
                  className="size-10 p-2 rounded-full mb-1 bg-white"
                />
                <span>{event.player.name}</span>
              </div>
              <span className={cn("font-semibold", style)}>{translate}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
