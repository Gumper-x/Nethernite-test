<template>
  <v-dialog :model-value="true" max-width="400px" @update:model-value="emit('close')">
    <v-card>
      <v-card-title>
        <h2 class="package-detail__title">{{ name }}</h2>
      </v-card-title>
      <transition name="scale" mode="out-in">
        <v-card-text v-if="loading"> Loading... </v-card-text>
        <v-card-text v-else-if="errorLoad">Error Load Pacakge</v-card-text>
        <v-card-text v-else>
          <v-list lines="one">
            <v-list-item title="Rank" :subtitle="statsPacakge?.hits.rank"></v-list-item>
            <v-list-item title="Total" :subtitle="statsPacakge?.hits.total"></v-list-item>
            <v-list-item title="Version" :subtitle="metadataPacakge?.tags.latest"></v-list-item>
            <v-list-item title="Version amount" :subtitle="metadataPacakge?.versions.length"></v-list-item>
          </v-list>
        </v-card-text>
      </transition>
      <v-card-actions>
        <v-btn color="blue" block @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
  import { DI_KEY } from "@/constants";
  import { StatPackage } from "@/domains";
  import { MetadataPackage } from "@/domains/metadata/dto";
  import { injectStrict } from "@/utils";
  import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";

  const props = defineProps<{
    name: string;
  }>();
  const emit = defineEmits(["close"]);
  const errorLoad = ref(false);
  const loading = ref(true);
  const di = injectStrict(DI_KEY);
  const statsPacakge = ref<StatPackage | null>(null);
  const metadataPacakge = ref<MetadataPackage | null>(null);
  onBeforeMount(async () => {
    try {
      let convertedName = props.name;
      if (props.name[0] !== "@") {
        const splitName = props.name.split("/");
        convertedName = splitName[1] ? splitName[1] : splitName[0];
      }
      statsPacakge.value = await di.statsDomain.getPackage(convertedName);
      metadataPacakge.value = await di.metadataDomain.getPackage(convertedName);
    } catch {
      errorLoad.value = true;
    } finally {
      loading.value = false;
    }
  });
  onMounted(() => {
    document.addEventListener("keyup", handleEsc);
  });
  onUnmounted(() => {
    document.removeEventListener("keyup", handleEsc);
  });
  function handleEsc(event: KeyboardEvent) {
    if (event.key === "Escape") {
      close();
    }
  }
  function close() {
    errorLoad.value = false;
    statsPacakge.value = null;
    metadataPacakge.value = null;
    emit("close");
  }
</script>

<style lang="scss">
  .package-detail {
    &__title {
      padding-top: 0.8rem;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
    }
  }
</style>
