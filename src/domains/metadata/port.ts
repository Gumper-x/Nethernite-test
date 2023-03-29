import { AxiosResponse } from "axios";
import { MetadataPackage } from "./dto";

export interface MetadataPort {
  getPackage(name: string): Promise<AxiosResponse<MetadataPackage>>;
}
