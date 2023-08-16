<template>
  <IonToolbar>
    <IonHeader class="mt-[env(safe-area-inset-top)] flex ">
      <IonIcon :src="closeOutline" @click="dismiss()" class="h-7 w-7"></IonIcon>
      <div class="h-auto w-20 justify-center align-middle text-center">
        <img
          :src="`/companies/${props.company.logo}.png`"
          class="max-w-[100%] max-h-[100%]"
        />
      </div>
    </IonHeader>
  </IonToolbar>
  <IonContent>
    <div>
      <div id="container">
        <strong>{{ props.company.name }}</strong>
        <p>
          Explore
          <a target="_blank" rel="noopener noreferrer" :href="props.company.url"
            >Company Website</a
          >
        </p>
      </div>
      <div v-for="project in props.company.projects">
        <Project :project="project"> </Project>
      </div>
    </div>
  </IonContent>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import Project from "./Project.vue";
import { Company } from "../interfaces/company.interface";
import { closeOutline } from "ionicons/icons";

const props = defineProps<{
  company: Company;
}>();
const modalCtr = modalController;

function dismiss() {
  console.log('dismiss - dismiss:', dismiss);
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
</style>
