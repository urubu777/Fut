export interface Fixture {
  team: Team;
  statistics: Statistic[];
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Statistic {
  type: string;
  value: any;
}
