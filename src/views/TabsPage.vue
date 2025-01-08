<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar slot="bottom" class="shadow-black shadow-xl">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon aria-hidden="true" :icon="homeOutline" />
          <IonLabel>Intro</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon aria-hidden="true" :icon="bagHandleOutline" />
          <IonLabel>Career</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon aria-hidden="true" :icon="atCircleOutline" />
          <IonLabel>About Me</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  accessibilityOutline,
  homeOutline,
  bagHandleOutline,
  atCircleOutline,
} from "ionicons/icons";
</script>
