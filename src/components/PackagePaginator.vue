<template>
  <v-pagination
    v-if="showPaginator"
    :value="1"
    :total-visible="5"
    :length="maxPage"
    @update:model-value="onChangePage"
  ></v-pagination>
</template>

<script lang="ts" setup>
  import { PACKAGE_ON_PAGE } from "@/constants";
  import { computed } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const maxPage = computed(() => store.state.package.list.length / PACKAGE_ON_PAGE);
  const showPaginator = computed(() => maxPage.value >= PACKAGE_ON_PAGE);
  async function onChangePage(page: number) {
    store.commit("setPage", page);
  }
</script>

<style lang="scss">
  .package-table {
    tr {
      transition: background-color 0.2s ease-in;
      &:hover {
        cursor: pointer;
        background-color: rgba($primary, 0.1);
      }
    }
  }
</style>
