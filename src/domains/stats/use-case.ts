import { Store } from "vuex";
import { TopListPackage } from "./dto";

export async function setTopList(store: Store<unknown>, listCallback: () => Promise<TopListPackage[]>): Promise<void> {
  store.commit("setLoading", true);
  const list = await listCallback();
  store.commit("setList", list);
  store.commit("setLoading", false);
}
