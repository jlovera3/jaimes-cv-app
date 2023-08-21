<template>
  <ion-page>
    <AppHeader></AppHeader>
    <ion-content :fullscreen="true" class="blue-background">
      <div
        class="p-5 grid justify-center items-center sm:flex sm:justify-around sm:pt-20 sm:px-10"
      >
        <IonCard
          v-for="(company, index) in companies"
          class="animate-fade-left w-80 h-25 text-center flex justify-center items-center mb-0 hover:bg-slate-200 active:bg-slate-50 sm:w-[20%]"
          @click="openDetails(company)"
        >
          <IonCardContent class="p-0 text-center flex justify-center items-center">
            <img
              :src="`/companies/${company.logo}.png`"
              class="max-w-[80%] max-h-auto"
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
import AppHeader from "@/components/AppHeader.vue";

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
      {
        name: 'Digitalízate Plus',
        logo: '/projects/logo_fundae.svg'
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

<style>
.blue-background{
  background-image: url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif);
}
</style>
