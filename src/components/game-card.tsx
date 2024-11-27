import { Link } from "react-router-dom";
import type { Game } from "../lib/entities/game-stats";

const liveAbbreviations = ["1H", "HT", "2H", "ET", "BT", "P"];

export const SkeletonGameCard = () => {
  return (
    <div
      role="status"
      className="flex items-center justify-center min-w-80 min-h-[214px] max-w-sm 
    bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    ></div>
  );
};

export const GameCard = ({ game }: { game: Game }) => {
  const generateBorderBasedOnTimeFixture = (short: string) => {
    if (liveAbbreviations.includes(short)) {
      return "border-emerald-500";
    } else {
      return "border-base-200";
    }
  };
  return (
    <div
      className={`p-6 bg-neutral rounded-lg shadow-lg min-w-80 border ${generateBorderBasedOnTimeFixture(
        game.fixture.status.short
      )}`}
    >
      <div className="flex items-center justify-between mb-4 min-h-9">
        <img src={game.league.logo} alt={game.league.name} className="w-5" />
        <div className="text-center text-xs flex-1">
          {liveAbbreviations.includes(game.fixture.status.short) ? (
            <>
              <span
                className="text-emerald-500 font-semibold text-sm 
              animate-pulse"
              >
                Ao vivo - {game.fixture.status.elapsed}'
              </span>
            </>
          ) : game.fixture.status.short === "FT" ? (
            <span className="block text-sm font-semibold">Encerrado</span>
          ) : (
            <>
              <span className="block">
                {new Date(game.fixture.date).toLocaleDateString("pt-BR")}
              </span>
              <span className="block text-sm font-semibold">
                {new Date(game.fixture.date).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </>
          )}
        </div>
        <div className="text-right">
          <img
            src={game.league.flag}
            alt={game.league.country}
            className="w-5"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
        <div className="flex flex-col items-start">
          <span className="font-bold text-xs text-center mb-2">
            {game.teams.home.name.split(" ").find((word) => word.length > 2) ||
              game.teams.home.name.split(" ")[0]}
          </span>
          <div className="flex items-center gap-3">
            <img
              src={game.teams.home.logo}
              alt={game.teams.home.name}
              className="size-10 mb-2 object-contain"
            />
            <span className="font-bold text-xl md:text-2xl text-center mb-2">
              {game.goals.home ?? 0}
            </span>
          </div>
        </div>

        <span className="text-2xl font-bold">VS</span>

        <div className="flex flex-col items-end">
          <span className="font-bold text-xs text-center mb-2">
            {game.teams.away.name.split(" ").find((word) => word.length > 2) ||
              game.teams.away.name.split(" ")[0]}
          </span>
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl md:text-2xl text-center mb-2">
              {game.goals.away ?? 0}
            </span>
            <img
              src={game.teams.away.logo}
              alt={game.teams.away.name}
              className="size-10 mb-2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link
          to={`/fixture/${game.fixture.id}`}
          className="text-blue-400 hover:underline"
        >
          Ver mais {">"}
        </Link>
      </div>
    </div>
  );
};
