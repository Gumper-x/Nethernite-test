import { MetadataPort, StatsPort, useMetadata, useStats } from "@/domains";

export interface DIContainer {
  statsDomain: StatsPort;
  metadataDomain: MetadataPort;
}

let diContainer: DIContainer;

initDIContainer();
export function initDIContainer(): void {
  diContainer = {
    statsDomain: useStats(),
    metadataDomain: useMetadata(),
  };
}

export function getDIContainer(): DIContainer {
  return diContainer;
}
