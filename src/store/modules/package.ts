import { TopListPackage } from "@/domains";

interface State {
  list: TopListPackage[];
}
export const packageStore = {
  state(): State {
    return {
      list: [],
    };
  },
  mutations: {
    setList(state: State, value: TopListPackage[]): void {
      state.list = value;
    },
  },
};
