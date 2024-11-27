import type { Event, Response } from "../lib/entities/fixture";

import { TbBallFootball, TbBallFootballOff } from "react-icons/tb";

const GoalDetail = ({
  side,
  goal,
  detail,
}: {
  side: "home" | "away";
  goal: Event;
  detail: string;
}) => {
  if (side === "home") {
    return (
      <div className="text-sm flex items-center justify-between gap-3">
        {detail === "Normal Goal" || detail == "Penalty" ? (
          <TbBallFootball className="size-4 text-emerald-500" />
        ) : detail === "Own Goal" ? (
          <TbBallFootballOff className="size-4 text-blue-500" />
        ) : (
          <TbBallFootballOff className="size-4 text-red-500" />
        )}
        <span>
          {goal.time.elapsed}' {goal.player.name}{" "}
          {detail === "Own Goal" && "(GC)"}
        </span>
      </div>
    );
  }

  return (
    <div className="text-sm flex items-center justify-between gap-3">
      <span>
        {goal.time.elapsed}' {goal.player.name}
      </span>
      {detail === "Normal Goal" || detail == "Penalty" ? (
        <TbBallFootball className="size-4 text-emerald-500" />
      ) : (
        <TbBallFootballOff className="size-4 text-red-500" />
      )}
    </div>
  );
};

export const FixtureGoalCard = ({ data }: { data: Response }) => {
  const events = data.events.filter((event) => event.type === "Goal");

  if (events.length === 0) {
    return (
      <div
        className="min-w-72 flex items-center justify-center w-auto rounded-lg 
    p-4 border border-slate-600 bg-neutral mt-4"
      >
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Nenhum gol aconteceu.</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-w-72 flex items-center justify-between w-auto rounded-lg 
    p-4 border border-slate-600 bg-neutral mt-4"
    >
      <div className="flex flex-col gap-2">
        {events.map((goal, index) => {
          const homeTeamGoal = goal.team.name === data.teams.home.name;

          return (
            <>
              {homeTeamGoal && (
                <GoalDetail
                  key={index}
                  side="home"
                  goal={goal}
                  detail={goal.detail}
                />
              )}
            </>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        {events.map((goal, index) => {
          const awayTeamGoal = goal.team.name === data.teams.away.name;

          return (
            <>
              {awayTeamGoal && (
                <GoalDetail
                  key={index + 1}
                  side="away"
                  goal={goal}
                  detail={goal.detail}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
