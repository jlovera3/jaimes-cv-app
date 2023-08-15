<template>
  <IonCard class="h-20 w-20 rounded-[100%] ">
    <img :src="`${props.project.logo}`" class="h-20 w-20"/>
  </IonCard>
</template>

<script setup lang="ts">
import { IonCard } from "@ionic/vue";
import { Project } from "../interfaces/project.interface";

const props = defineProps<{
  project: Project;
}>();
</script>

<style scoped>
</style>
