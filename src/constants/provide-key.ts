import { DIContainer } from "@/di";
import { InjectionKey } from "vue";

export const DI_KEY: InjectionKey<DIContainer> = Symbol("$di");
