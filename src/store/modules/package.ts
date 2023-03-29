import { PACKAGE_ON_PAGE } from "@/constants";

interface Item {
  type: string;
  name: string;
}
interface State {
  list: Item[];
  loading: boolean;
  page: number;
  search: string;
}
export const packageStore = {
  state(): State {
    return {
      loading: true,
      page: 1,
      list: [],
      search: "",
    };
  },
  mutations: {
    setList(state: State, value: Item[]): void {
      state.list = value;
    },
    setLoading(state: State, value: boolean): void {
      state.loading = value;
    },
    setPage(state: State, value: number): void {
      state.page = value;
    },
    setSearch(state: State, value: string): void {
      state.search = value;
    },
  },
  getters: {
    paginatedList(state: State): Item[] {
      const copyList = [...state.list];
      const filteredList = copyList;
      return filteredList.splice((state.page - 1) * PACKAGE_ON_PAGE, PACKAGE_ON_PAGE);
    },
  },
};
