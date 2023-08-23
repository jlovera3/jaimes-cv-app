<template>
  <div @click="openProject()">
    <IonCard class="h-[80%] w-[80%] rounded-[100%] mb-0">
      <img :src="`${props.project.logo}`"/>
    </IonCard>
  </div>
</template>

<script setup lang="ts">
import { IonCard, IonLabel, modalController } from "@ionic/vue";
import { Project } from "../interfaces/project.interface";
import ProjectModal from "./ProjectModal.vue";

const props = defineProps<{
  project: Project;
}>();

async function openProject() {
  const modalCtl = modalController.create({
    component: ProjectModal,
    componentProps: { project: props.project },
  });

  return (await modalCtl).present();
}
</script>

<style scoped></style>
