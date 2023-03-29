import { httpClient } from "@/transports";
import { MetadataPath } from "./config";
import { MetadataPort } from "./port";

export function useMetadata(): MetadataPort {
  return {
    async getPackage(name) {
      return (await httpClient.get(`${MetadataPath.PACKAGE}${name}`)).data;
    },
  };
}
