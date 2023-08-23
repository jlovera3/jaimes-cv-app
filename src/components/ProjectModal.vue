<template>
  <!-- Android without Notch -->
  <IonHeader
    v-if="!hasNotch"
    class="h-[12vh] pt-[env(safe-area-inset-top)] bg-banner bg-cover bg-center bg-no-repeat flex"
  >
    <IonIcon class="h-10 w-10 m-8 icon-white" :icon="arrowBackCircleOutline" @click="back()"></IonIcon
  ></IonHeader>

  <!-- iOS with Notch -->
  <IonHeader
    v-else
    class="h-[16vh] pt-[env(safe-area-inset-top)] bg-banner-notch bg-cover bg-center bg-no-repeat flex"
  ></IonHeader>
  <IonContent>
    <div class="w-full flex">
      <IonCard class="h-20 w-20 rounded-[100%]">
        <img :src="`${props.project.logo}`" class="h-20 w-20" />
      </IonCard>
      <IonLabel class="my-8 mx-4">
        <h3>{{ props.project.name }}</h3>
        <p></p>
      </IonLabel>
    </div>
  </IonContent>
</template>

<script setup lang="ts">
import { IonCard, IonContent, IonHeader, IonIcon, IonLabel, modalController } from "@ionic/vue";
import { Project } from "../interfaces/project.interface";
import { Device } from "@capacitor/device";
import { ref } from "vue";
import { arrowBackCircle, arrowBackCircleOutline } from "ionicons/icons";

const props = defineProps<{
  project: Project;
}>();

const hasNotch = ref(false);

const logDeviceInfo = async () => {
  const info = await Device.getInfo();
  hasNotch.value = info.platform === "ios";
  console.log(info);
};

function back() {
  modalController.dismiss();
}
logDeviceInfo();
</script>

<style scoped>
.bg-banner {
  background-image: url("../../public/pictures/banner.png");
}
.bg-banner-notch {
  background-image: url("../../public/pictures/banner-notch.png");
}
.icon-white{
  color: white;
}
</style>
