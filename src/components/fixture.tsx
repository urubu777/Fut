// import { useGetStats } from "../features/stats/api/use-get-stats";
import { FixtureCard } from "./fixture-card";
import { FixtureStatsTab } from "./fixture-stats-tabs";
import {
  FixtureStatsContent,
  FixtureStatsEvents,
  FixtureStatsLineUp,
} from "./fixture-stats-contents";
import { useGetFixture } from "../features/fixture/api/use-get-fixture";
import { useParams, useSearchParams } from "react-router-dom";
import { FixtureGoalCard } from "./fixture-goal-card";
import { MaxWidthWrapper } from "./max-width-wrapper";

function Fixture() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetFixture(params.matchId!);
  const currentTab = searchParams.get("tab");

  return (
    <MaxWidthWrapper className="w-full lg:max-w-4xl">
      {isLoading || !data ? (
        <div className="min-h-[100vh] w-full my-6 px-4 md:px-2 lg:px-0">
          <p>Carregando...</p>
        </div>
      ) : (
        <div className="min-h-[100vh] w-full my-6 px-4 md:px-2 lg:px-0">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <FixtureCard data={data[0]} />
              <FixtureGoalCard data={data[0]} />
              <FixtureStatsTab />
              {currentTab === "stats" || !currentTab ? (
                <FixtureStatsContent data={data[0]} />
              ) : currentTab === "lineup" ? (
                <FixtureStatsLineUp data={data[0]} />
              ) : (
                <FixtureStatsEvents data={data[0]} />
              )}
            </>
          )}
        </div>
      )}
    </MaxWidthWrapper>
  );
}

export default Fixture;
