<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left"> Name </th>
        <th class="text-left"> Calories </th>
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
  const list = computed(() => store.state.package.list);
</script>
