import { ClassValue, clsx } from "clsx";
import type { IconType } from "react-icons/lib";
import { TbBallFootball, TbBallFootballOff } from "react-icons/tb";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { RiFootballFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isGameLive = (elapsed?: number | null) => {
  // const gameStartTime = new Date(fixtureDate).getTime();
  // const currentTime = new Date().getTime();
  // const gameDuration = 90 * 60 * 1000; // 90 minutes in milliseconds
  if (!elapsed) return false;

  return elapsed > 0 && elapsed < 90; // Verifica se o jogo está em andamento (com base nos minutos jogados)
};

export const translateStats = (statType: string): string => {
  const translations: { [key: string]: string } = {
    "Shots on Goal": "Chutes a Gol",
    "Shots off Goal": "Chutes Fora do Gol",
    "Total Shots": "Total de Chutes",
    "Blocked Shots": "Chutes Bloqueados",
    "Shots insidebox": "Chutes Dentro da Área",
    "Shots outsidebox": "Chutes Fora da Área",
    Fouls: "Faltas",
    "Corner Kicks": "Escanteios",
    Offsides: "Impedimentos",
    "Ball Possession": "Posse de Bola",
    "Yellow Cards": "Cartões Amarelos",
    "Red Cards": "Cartões Vermelhos",
    "Goalkeeper Saves": "Defesas do Goleiro",
    "Total passes": "Total de Passes",
    "Passes accurate": "Passes Precisos",
    "Passes %": "Porcentagem de Passes",
    expected_goals: "Gols Esperados",
    goals_prevented: "Gols Impedidos",
  };
  return translations[statType] || statType; // Return original if no translation found
};

export const translateEvents = (
  eventType: string
): { translate: string; style: string; icon?: IconType } => {
  const translations: {
    [key: string]: { translate: string; style: string; icon?: IconType };
  } = {
    "Normal Goal": {
      translate: "Gooool",
      style: "text-emerald-500",
      icon: TbBallFootball,
    },
    "Own Goal": {
      translate: "Gol Contra",
      style: "text-blue-500",
      icon: TbBallFootball,
    },
    Penalty: {
      translate: "Penalty",
      style: "",
      icon: RiFootballFill,
    },
    "Missed Penalty": {
      translate: "Penalty Perdido",
      style: "text-gray-500",
      icon: TbBallFootballOff,
    },
    "Yellow Card": {
      translate: "Cartão Amarelo",
      style: "text-yellow-500",
    },
    "Red Card": {
      translate: "Cartão Vermelho",
      style: "text-red-500",
    },
    Substitution: {
      translate: "Substituição",
      style: "text-gray-500",
      icon: FaArrowRightArrowLeft,
    },
    "Goal cancelled": {
      translate: "Gol Anulado",
      style: "text-gray-500",
      icon: TbBallFootballOff,
    },
    "Penalty confirmed": {
      translate: "Penalty confirmado",
      style: "text-blue-500",
    },
  };

  return translations[eventType] || eventType;
};
