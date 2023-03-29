<template>
  <div class="app">
    <div class="app__container">
      <PackageSearch />
      <PackageTable />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import PackageSearch from "@/components/PackageSearch.vue";
  import PackageTable from "@/components/PackageTable.vue";
  import Footer from "@/components/Footer.vue";
  import { onBeforeMount } from "vue";
  import { injectStrict } from "@/utils";
  import { DI_KEY } from "@/constants";
  import { useStore } from "vuex";
  import { initTopList } from "@/domains";

  const di = injectStrict(DI_KEY);
  const store = useStore();
  onBeforeMount(async () => {
    initTopList(store, await di.statsDomain.getTopList());
  });
</script>

<style lang="scss">
  .app {
    padding-top: 3rem;
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    &__container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
