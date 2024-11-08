<template>
  <IonHeader class="flex mt-[env(safe-area-inset-top)] p-4">
    <IonIcon :src="closeOutline" @click="dismiss()" class="h-6 w-6"></IonIcon>
    <div class="h-auto w-20 justify-center align-middle text-center ml-[32%]">
      <img
        :src="`/companies/${props.company.logo}.png`"
        class="max-w-[100%] max-h-[100%]"
      />
    </div>
  </IonHeader>
  <IonContent>
    <IonCard>
      <IonCardHeader class="text-center pb-0">
        <IonItem>
          <IonLabel
            ><h1 class="whitespace-break-spaces">
              {{ props.company.role }}
            </h1></IonLabel
          >
        </IonItem>
      </IonCardHeader>
      <IonCardContent class="m-4">
        <IonLabel
          ><h2>{{ props.company.duration }}</h2></IonLabel
        >
      </IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader class="text-center pb-0">
        <IonItem>
          <IonLabel><h1>Projects</h1></IonLabel>
        </IonItem>
      </IonCardHeader>
      <IonCardContent class="">
        <div class="flex flex-wrap">
          <div
            v-for="(project, index) in props.company.projects"
            :key="index"
            class="w-1/4"
            :class="{ 'project-animate': animatedProjects.includes(index) }"
          >
            <Project :project="project"></Project>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader class="text-center pb-0">
        <IonItem>
          <IonLabel><h1>Responsabilities</h1></IonLabel>
        </IonItem>
      </IonCardHeader>
      <IonCardContent>
        <IonItem v-for="resp in props.company.responsabilities">
          <IonLabel
            ><p class="whitespace-break-spaces">{{ resp }}</p></IonLabel
          >
        </IonItem>
      </IonCardContent>
    </IonCard>
  </IonContent>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import Project from "./Project.vue";
import { Company } from "../interfaces/company.interface";
import { closeOutline } from "ionicons/icons";
import { ref, onMounted } from 'vue';

const props = defineProps<{
  company: Company;
}>();

const modalCtr = modalController;
const animatedProjects = ref<number[]>([]);

onMounted(() => {
  props.company.projects.forEach((_, index) => {
    setTimeout(() => {
      animatedProjects.value.push(index);
    }, index * 100);
  });
});

function dismiss() {
  modalCtr.dismiss();
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

@keyframes growAnimation {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.project-animate {
  animation: growAnimation 0.5s ease-in-out forwards;
}
</style>
