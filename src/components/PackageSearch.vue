<template>
  <div>
    <v-text-field label="Package name" :model-value="searchText" variant="solo" @update:model-value="updateSearch">
    </v-text-field>
  </div>
</template>

<script lang="ts" setup>
  import { DI_KEY } from "@/constants";
  import { injectStrict } from "@/utils";
  import { computed } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const searchText = computed(() => store.state.package.search);
  let timer: ReturnType<typeof window.setTimeout> | number = 0;
  const di = injectStrict(DI_KEY);
  function updateSearch(text: string) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(trigerSearch.bind(null, text), 1000);
  }
  async function trigerSearch(text: string) {
    try {
      store.commit("setSearch", text);
      const packageSearch = await di.metadataDomain.getPackage(text);

      store.commit("setList", [packageSearch]);
    } catch {
      console.log("Not Found");
    }
  }
</script>
