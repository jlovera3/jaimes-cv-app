<template>
  <IonPage>
    <AppHeader></AppHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense"> </IonHeader>
      <IonItem class="m-4">
        <IonLabel>
          <h1>Profile</h1>
          <p class="whitespace-normal !mt-6">
            After spending a few years studying Industrial Engineering, I
            discovered my passion for programming and mobile applications, and
            since then I have put all my being into trying to be the best at
            what I do. I am sociable and I solve problems calmly and with a cool
            mind.
          </p>
        </IonLabel>
      </IonItem>
      <IonItem class="m-4">
        <IonLabel>
          <h1>Education</h1>
          <IonList class="whitespace-normal !mt-6">
            <IonItem>
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
            </IonItem>
            <IonItem>
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
            <IonItem lines="none">
              <IonLabel>
                <h3>Bachelor (2018 - 2020)</h3>
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
