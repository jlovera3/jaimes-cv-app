<template>
  <!-- Android without Notch -->
  <IonHeader
    v-if="!hasNotch"
    class="h-[12vh] pt-[env(safe-area-inset-top)] bg-banner bg-cover bg-center bg-no-repeat flex"
  >
    <img
      src="../../public/pictures/me-white.png"
      class="h-16 w-16 rounded-[100%] ml-6 mt-4"
    />
  </IonHeader>

  <!-- iOS with Notch -->
  <IonHeader
    v-else
    class="h-[16vh] pt-[env(safe-area-inset-top)] bg-banner-notch bg-cover bg-center bg-no-repeat flex"
  >
    <img
      src="../../public/pictures/me-white.png"
      class="h-16 w-16 rounded-[100%] ml-6 mt-0"
    />
  </IonHeader>
</template>

<script setup lang="ts">
import { IonHeader } from "@ionic/vue";
import { Device } from "@capacitor/device";
import { ref } from "vue";

const hasNotch = ref(false);

const logDeviceInfo = async () => {
  const info = await Device.getInfo();
  hasNotch.value = info.platform === "ios";
  console.log(info);
};
logDeviceInfo();
</script>

<style>
.bg-banner {
  background-image: url("../../public/pictures/banner2.png");
}
.bg-banner-notch {
  background-image: url("../../public/pictures/banner-notch.png");
}
</style>
