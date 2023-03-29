<template>
  <v-table density="compact" class="package-table">
    <thead>
      <tr>
        <th class="text-left"> Name </th>
        <th class="text-left"> Type </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>
  import { computed } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const list = computed(() => store.getters.paginatedList);
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
