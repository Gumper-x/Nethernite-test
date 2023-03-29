import { httpClient } from "@/transports";
import { StatsPath } from "./config";
import { StatsPort } from "./port";

export function useStats(): StatsPort {
  return {
    async getTopList() {
      return (
        await httpClient.get(StatsPath.TOP_LIST, {
          params: {
            limit: 100,
          },
        })
      ).data;
    },
    async getPackage(name) {
      return (await httpClient.get(`${StatsPath.PACKAGE}${name}`)).data;
    },
  };
}
