import { useGetLiveFixtures } from "./features/fixutres/api/use-get-fixtures";
import { HeroCard } from "./components/home-card";
import { GameSlider } from "./components/game-swiper";
import { useGetWeekFixtures } from "./features/fixutres/api/use-get-week-fixtures";
import { mainLeagues } from "./lib/data-test";

import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchPrams] = useSearchParams();
  const leagueId = Number(searchParams.get("selectedLeague")) || 71;

  const handleLeagueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("selectedLeague", event.target.value);

    setSearchPrams(newParams);
  };

  return (
    <div className="min-h-[100vh] w-full">
      <HeroCard />
      <section>
        <h1 className="text-2xl font-semibold text-white">Jogos Principais</h1>
        <GameSlider fetchFn={useGetLiveFixtures} />
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Jogos da Semana</h1>
          <select
            value={leagueId}
            onChange={handleLeagueChange}
            className="select select-bordered w-full max-w-xs"
          >
            {mainLeagues.map((league) => (
              <option value={league.value} key={league.value}>
                {league.name}
              </option>
            ))}
          </select>
        </div>
        <GameSlider fetchFn={() => useGetWeekFixtures(leagueId)} />
      </section>
    </div>
  );
}

export default App;
