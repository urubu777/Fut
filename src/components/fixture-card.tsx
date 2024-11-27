import type { Response } from "../lib/entities/fixture";

export const FixtureCard = ({ data }: { data: Response }) => {
  return (
    <div className="min-w-72 w-auto rounded-lg p-4 border border-slate-600 bg-neutral">
      <div className="grid grid-cols-3 items-center mb-4">
        <img
          src={data.league.logo}
          alt={data.league.name}
          className="size-10 border border-slate-800 bg-slate-600 p-1 rounded-full object-cover"
        />
        <div className="flex flex-col items-center mx-auto">
          {!data.fixture.status.elapsed ? (
            <>
              <span className="block">
                {new Date(data.fixture.date).toLocaleDateString("pt-BR")}
              </span>
              <span className="block text-sm font-semibold">
                {new Date(data.fixture.date).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </>
          ) : data.fixture.status.short === "FT" ? (
            <span className="font-semibold text-sm mx-auto">Encerrado</span>
          ) : (
            <span className="text-emerald-500 font-semibold text-sm mx-auto">
              Ao vivo - {data.fixture.status.elapsed}'
            </span>
          )}
        </div>
        <img
          src={data.league.flag}
          alt={data.league.country}
          className="w-10 h-10 object-cover rounded-full ml-auto"
        />
      </div>

      <div className="grid grid-cols-3 items-center justify-items-center md:w-[80%] mx-auto">
        <div className="grid place-items-center">
          <img
            src={data.teams.home.logo}
            alt={data.teams.home.name}
            className="size-16 mb-2 object-contain"
          />
          <span className="font-bold text-xs">
            {data.teams.home.name.split(" ")[0]}
          </span>
        </div>

        <div className="flex items-center justify-between gap-8">
          <span className="text-3xl lg:text-4xl font-oswald font-bold">
            {data.goals.home || 0}
          </span>
          <span className="font-oswald font-semibold text-lg">X</span>
          <span className="text-3xl lg:text-4xl font-oswald font-bold">
            {data.goals.away || 0}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="grid place-items-center">
            <img
              src={data.teams.away.logo}
              alt={data.teams.away.name}
              className="size-16 mb-2 object-contain"
            />
            <span className="font-bold text-xs">
              {data.teams.away.name.split(" ")[0]}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-8">
        <span className="text-xs">
          <strong>Arbitragem:</strong> {data.fixture.referee}
        </span>
        <span className="text-xs">
          <strong>Estádio:</strong> {data.fixture.venue.name}
        </span>
      </div>
    </div>
  );
};
