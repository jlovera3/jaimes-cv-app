<template>
  <ion-app>
    <div v-if="isDesktop" class="app-wrapper">
      <div class="iphone-frame">
        <i>Speaker</i>
        <b>Camera</b>
        <iframe src="/" class="app-content"></iframe>
      </div>
    </div>
    <div v-else>
      <ion-router-outlet />
    </div>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { ref, onMounted } from "vue";

const isDesktop = ref(false);

onMounted(() => {
  if (window.innerWidth > 768) {
    isDesktop.value = true;
  }
});
</script>

<style scoped>
.app-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Ajusta el color de fondo */
}

.iphone-frame {
  position: absolute;
  margin: 40px auto;
  width: 360px;
  height: 780px;
  background-color: #7371ee;
  background-image: linear-gradient(60deg, #7371ee 1%, #a1d9d6 100%);
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919,
    0px 0px 0px 20px #111;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }

  &:before {
    top: 0px;
    width: 56%;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  }

  i,
  b,
  s,
  span {
    position: absolute;
    display: block;
    color: transparent;
  }

  i {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  }

  b {
    left: 10%;
    top: 0px;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #101010;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);

    &:after {
      content: "";
      position: absolute;
      background-color: #2d4d76;
      width: 6px;
      height: 6px;
      top: 2px;
      left: 2px;
      top: 3px;
      left: 3px;
      display: block;
      border-radius: 4px;
      box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
    }
  }
}

.app-content {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 35px;
}
</style>
