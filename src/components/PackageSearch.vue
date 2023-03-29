<template>
  <div>
    <v-text-field
      label="Package name"
      :loading="loading"
      :model-value="searchText"
      variant="solo"
      @update:model-value="updateSearch"
    >
    </v-text-field>
  </div>
</template>

<script lang="ts" setup>
  import { DI_KEY } from "@/constants";
  import { injectStrict } from "@/utils";
  import { computed, ref } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const loading = ref(false);
  const searchText = computed(() => store.state.package.search);
  let timer: ReturnType<typeof window.setTimeout> | number = 0;
  const di = injectStrict(DI_KEY);
  function updateSearch(text: string) {
    loading.value = true;
    store.commit("setSearch", text);
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(trigerSearch.bind(null, text), 1000);
  }
  async function trigerSearch(text: string) {
    try {
      const packageSearch = await di.metadataDomain.getPackage(text);
      store.commit("setPackage", packageSearch);
    } catch {
      store.commit("setPackage", null);
      console.log("Not Found");
    } finally {
      loading.value = false;
    }
  }
</script>
