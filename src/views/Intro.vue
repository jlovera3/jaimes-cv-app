<template>
  <IonPage>
    <AppHeader></AppHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense"> </IonHeader>
      <IonItem class="m-4">
        <IonLabel>
          <h1 class="animate-fade-up animate-ease-out">Profile</h1>
          <p
            class="whitespace-normal animate-fade-left animate-delay-100 !mt-6"
          >
            After studying Industrial Engineering for a few years, I found my
            love for programming and making mobile apps. Since then, I've been
            fully dedicated to becoming the best at what I do. I'm friendly, and
            I'm good at staying calm and solving problems
          </p>
        </IonLabel>
      </IonItem>
      <IonItem class="m-4">
        <IonLabel>
          <h1 class="animate-fade-up animate-ease-out">Education</h1>
          <IonList class="whitespace-normal !mt-6">
            <!-- <IonItem class="animate-fade-left animate-delay-200">
              <IonLabel>
                <h3>Bachelor (2012 - 2014)</h3>
                <p class="whitespace-normal !mt-2">Sciences Bachelor studies</p>
                <a
                  class="whitespace-normal !mt-2"
                  href="https://goo.gl/maps/vhtehjM4vbTx9xQ19"
                >
                  <IonIcon :src="locationOutline"></IonIcon>
                  La Salle Córdoba School
                </a>
              </IonLabel>
            </IonItem> -->
            <IonItem class="animate-fade-left animate-delay-300">
              <IonLabel>
                <h3>University (2014 - 2018)</h3>
                <p class="whitespace-normal !mt-2">
                  Industrial Engineering at ETSI Sevilla
                </p>
                <a
                  class="whitespace-normal !mt-2"
                  href="https://goo.gl/maps/ZrnpfdsXFVnnsnrZ7"
                >
                  <IonIcon :src="locationOutline"></IonIcon>
                  ETSI Sevilla
                </a>
              </IonLabel>
            </IonItem>
            <IonItem class="animate-fade-left animate-delay-500" lines="none">
              <IonLabel>
                <h3>Higher Degree (2018 - 2020)</h3>
                <p class="whitespace-normal !mt-2">
                  Higher Degree in Development of Multiplatform Applications
                </p>
                <a
                  class="whitespace-normal !mt-2"
                  href="https://goo.gl/maps/DHerFiRLjgUJahPY9"
                >
                  <IonIcon :src="locationOutline"></IonIcon>
                  IES Francisco de los Ríos
                </a>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonLabel>
      </IonItem>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
} from "@ionic/vue";
import ExploreContainer from "../components/ExploreContainer.vue";
import AppHeader from "@/components/AppHeader.vue";
import { locationOutline } from "ionicons/icons";
</script>
