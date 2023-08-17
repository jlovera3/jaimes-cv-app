<template>
  <div class="w-full flex">
    <IonCard class="h-20 w-20 rounded-[100%]">
      <img :src="`${props.project.logo}`" class="h-20 w-20"/>
    </IonCard>
    <IonLabel class="my-8 mx-4">
        <h3>{{ props.project.name }}</h3>
        <p></p>
    </IonLabel>
  </div>
</template>

<script setup lang="ts">
import { IonCard, IonLabel } from "@ionic/vue";
import { Project } from "../interfaces/project.interface";

const props = defineProps<{
  project: Project;
}>();
</script>

<style scoped>
</style>
