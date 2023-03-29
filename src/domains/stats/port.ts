import type { TopListPackage, StatPackage } from "./dto";

export interface StatsPort {
  getTopList(): Promise<TopListPackage[]>;
  getPackage(name: string): Promise<StatPackage>;
}
