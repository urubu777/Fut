export interface Response {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
  events: Event[];
  lineups: Lineup[];
  statistics: Statistic[];
  players: Player5[];
}

export interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: number;
  second: number;
}

export interface Venue {
  id: number;
  name: string;
  city: string;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export interface Teams {
  home: Home;
  away: Away;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
  winner: any;
}

export interface Away {
  id: number;
  name: string;
  logo: string;
  winner: any;
}

export interface Goals {
  home: number;
  away: number;
}

export interface Score {
  halftime: Halftime;
  fulltime: Fulltime;
  extratime: Extratime;
  penalty: Penalty;
}

export interface Halftime {
  home: number;
  away: number;
}

export interface Fulltime {
  home: number;
  away: number;
}

export interface Extratime {
  home: any;
  away: any;
}

export interface Penalty {
  home: any;
  away: any;
}

export interface Event {
  time: Time;
  team: Team;
  player: Player;
  assist: Assist;
  type: string;
  detail: string;
  comments?: string | null;
}

export interface Time {
  elapsed: number;
  extra?: number | null;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Player {
  id: number;
  name: string;
}

export interface Assist {
  id?: number | null;
  name?: string | null;
}

export interface Lineup {
  team: Team2;
  coach: Coach;
  formation: string;
  startXI: StartXi[];
  substitutes: Substitute[];
}

export interface Team2 {
  id: number;
  name: string;
  logo: string;
  colors: Colors;
}

export interface Colors {
  player: Player2;
  goalkeeper: Goalkeeper;
}

export interface Player2 {
  primary: string;
  number: string;
  border: string;
}

export interface Goalkeeper {
  primary: string;
  number: string;
  border: string;
}

export interface Coach {
  id: number;
  name: string;
  photo: string;
}

export interface StartXi {
  player: Player3;
}

export interface Player3 {
  id: number;
  name: string;
  number: number;
  pos: string | null;
  grid: string;
}

export interface Substitute {
  player: Player4;
}

export interface Player4 {
  id: number;
  name: string;
  number: number;
  pos?: string | null;
  grid: any;
}

export interface Statistic {
  team: Team3;
  statistics: Statistic2[];
}

export interface Team3 {
  id: number;
  name: string;
  logo: string;
}

export interface Statistic2 {
  type: string;
  value: any;
}

export interface Player5 {
  team: Team4;
  players: Player6[];
}

export interface Team4 {
  id: number;
  name: string;
  logo: string;
  update: string;
}

export interface Player6 {
  player: Player7;
  statistics: Statistic3[];
}

export interface Player7 {
  id: number;
  name: string;
  photo?: string | null;
}

export interface Statistic3 {
  games: Games;
  offsides?: number | null;
  shots: Shots;
  goals: Goals2;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty2;
}

export interface Games {
  minutes?: number | null;
  number: number;
  position: string;
  rating?: string | null;
  captain: boolean;
  substitute: boolean;
}

export interface Shots {
  total?: number | null;
  on?: number | null;
}

export interface Goals2 {
  total: any;
  conceded: number | null;
  assists?: number | null;
  saves?: number | null;
}

export interface Passes {
  total?: number | null;
  key?: number | null;
  accuracy?: string | null;
}

export interface Tackles {
  total?: number | null;
  blocks?: number | null;
  interceptions?: number | null;
}

export interface Duels {
  total?: number | null;
  won?: number | null;
}

export interface Dribbles {
  attempts?: number | null;
  success?: number | null;
  past?: number | null;
}

export interface Fouls {
  drawn?: number | null;
  committed?: number | null;
}

export interface Cards {
  yellow: number | null;
  red: number | null;
}

export interface Penalty2 {
  won: any;
  commited: any;
  scored: number;
  missed: number;
  saved?: number | null;
}
