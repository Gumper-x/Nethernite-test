import { httpClient } from "@/transports";
import { MetadataPath } from "./config";
import { MetadataPort } from "./port";

export function useMetadata(): MetadataPort {
  return {
    getPackage(name) {
      return httpClient.get(`${MetadataPath.PACKAGE}${name}`);
    },
  };
}
