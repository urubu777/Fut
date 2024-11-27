import { Link, useSearchParams } from "react-router-dom";

export const FixtureStatsTab = () => {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab");

  return (
    <div role="tablist" className="tabs tabs-boxed my-4">
      <Link
        to={"?tab=stats"}
        role="tab"
        className={`tab ${
          !currentTab || currentTab === "stats" ? "tab-active" : ""
        }`}
      >
        Estatísticas
      </Link>
      <Link
        to={"?tab=lineup"}
        role="tab"
        className={`tab ${currentTab === "lineup" && "tab-active"}`}
      >
        Escalação
      </Link>
      <Link
        to={"?tab=events"}
        role="tab"
        className={`tab ${currentTab === "events" && "tab-active"}`}
      >
        Acontecimentos
      </Link>
    </div>
  );
};
