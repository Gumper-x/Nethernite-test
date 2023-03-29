import { MetadataPackage } from "./dto";

export interface MetadataPort {
  getPackage(name: string): Promise<MetadataPackage>;
}
