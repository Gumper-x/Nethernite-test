<template>
  <div class="app">
    <div class="app__container">
      <PackageSearch />
      <transition name="scale" mode="out-in">
        <PackageTableSkeleton v-if="store.state.package.loading" />
        <PackageTable v-else />
      </transition>
      <PackagePaginator />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import PackageSearch from "@/components/PackageSearch.vue";
  import PackageTable from "@/components/PackageTable.vue";
  import Footer from "@/components/Footer.vue";
  import PackagePaginator from "@/components/PackagePaginator.vue";
  import PackageTableSkeleton from "@/components/PackageTableSkeleton.vue";
  import { onBeforeMount } from "vue";
  import { injectStrict } from "@/utils";
  import { DI_KEY } from "@/constants";
  import { useStore } from "vuex";
  import { setTopList } from "@/domains";

  const di = injectStrict(DI_KEY);
  const store = useStore();
  onBeforeMount(() => {
    setTopList(store, di.statsDomain.getTopList);
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
    min-height: 100vh;
    gap: 1rem;
    &__container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
