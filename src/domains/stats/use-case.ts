import { Store } from "vuex";
import { TopListPackage } from "./dto";

export function initTopList(store: Store<unknown>, list: TopListPackage[]): void {
  store.commit("setList", list);
}
