<template>
  <ion-page>
    <ion-header class="shadow-grey shadow-md">
      <ion-toolbar>
        <ion-title class="text-center">Career</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div
        class="p-5 grid justify-center items-center sm:flex sm:justify-around sm:pt-20 sm:px-10"
      >
        <IonCard
          v-for="company in companies"
          class="w-auto h-40 text-center flex justify-center items-center mb-0 hover:bg-slate-200 active:bg-slate-50 sm:w-[20%]"
          @click="openDetails(company)"
        >
          <IonCardContent class="text-center flex justify-center items-center">
            <img
              :src="`/companies/${company.logo}.png`"
              class="max-w-[80%] max-h-[80%]"
            />
          </IonCardContent>
        </IonCard>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  modalController,
} from "@ionic/vue";
import { Company } from "../interfaces/company.interface";
import CompanyModal from "../components/CompanyModal.vue";

const companies: Company[] = [
  {
    name: "Meinestadt",
    logo: "logo-meinestadt",
    url: "https://www.meinestadt.de/",
    projects: [
      {
        name: 'Meinestadt App',
        logo: '/projects/meine-app-logo.png'
      }
    ],
  },
  {
    name: "NTT Data",
    logo: "logo_nttdata",
    url: "https://www.nttdata.com/global/en/",
    projects: [
      {
        name: 'Reciclos',
        logo: '/projects/reciclos-app-logo.png'
      },
      {
        name: 'Tarjeta Social Digital',
        logo: '/projects/tsd-app-logo.png'
      },
      {
        name: 'ColeChef',
        logo: '/projects/colechef-app-logo.png'
      },
      {
        name: 'ColeChef Pro',
        logo: '/projects/colepro-app-logo.png'
      },
      {
        name: 'Calidad del Aire',
        logo: '/projects/calidad-app-logo.png'
      },
    ],
  },
  {
    name: "Magtel",
    logo: "logo-magtel",
    url: "https://magtel.es/",
    projects: [
      {
        name: 'Meinestadt App',
        logo: 'meine-app-logo'
      }
    ],
  },
  {
    name: "PTV Telecom",
    logo: "logo-ptv-telecom",
    url: "https://www.ptvtelecom.com/",
    projects: [
      {
        name: 'Meinestadt App',
        logo: 'meine-app-logo'
      }
    ],
  },
];

async function openDetails(company: Company) {
  const modalCtl = modalController.create({
    component: CompanyModal,
    componentProps: { company },
  });

  return (await modalCtl).present();
}
</script>
