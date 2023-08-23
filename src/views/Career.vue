<template>
  <ion-page>
    <AppHeader></AppHeader>
    <ion-content :fullscreen="true" class="blue-background">
      <div
        class="p-5 grid justify-center items-center sm:flex sm:justify-around sm:pt-20 sm:px-10"
      >
        <IonCard
          v-for="(company, index) in companies"
          class="animate-fade-left w-80 text-center flex justify-center items-center my-2 h-28 hover:bg-slate-200 active:bg-slate-50"
          @click="openDetails(company)"
        >
          <IonCardContent
            class="p-0 text-center flex justify-center items-center"
          >
            <img
              :src="`/companies/${company.logo}.png`"
              class="max-w-[60%] max-h-auto"
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
    duration: "Jan 2023 - Now",
    role: "Frontend Developer",
    responsabilities: [
      "Develop the app that represents the company's web portal",
      "Communicate, improve and apply internal product concepts",
      "Be in charge of the deployment of apps in the stores",
    ],
    projects: [
      {
        name: "Meinestadt App",
        logo: "/projects/meine-app-logo.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.meinestadt.appv3&gl=DE",
        appleUrl: "https://apps.apple.com/de/app/meinestadt-de/id1603822055",
      },
    ],
  },
  {
    name: "NTT Data",
    logo: "logo_nttdata",
    role: "FullStack Developer, Team Leader",
    duration: "Nov 2021 - Dec 2022",
    responsabilities: [
      "Working on several apps simultaneously to resolve bugs in production",
      "To be in charge of a team of 4 people managing and organizing the tasks of 3 projects while covering a paternity leave",
      "Develop and enhance apps for external customers improving product quality and effectiveness"
    ],
    url: "https://www.nttdata.com/global/en/",
    projects: [
      {
        name: "Reciclos",
        logo: "/projects/reciclos-app-logo.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.ecoembes.reciclos",
        appleUrl:
          "https://apps.apple.com/es/app/reciclos-tu-app-para-reciclar/id1487106432",
      },
      {
        name: "Tarjeta Social Digital",
        logo: "/projects/tsd-app-logo.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=es.megss.tsu.android",
        appleUrl:
          "https://apps.apple.com/es/app/tarjeta-social-digital/id1444737323",
      },
      {
        name: "ColeChef",
        logo: "/projects/colechef-app-logo.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.colechef.educa.app.movil",
        appleUrl: "https://apps.apple.com/es/app/colechef/id1510330780",
      },
      {
        name: "ColeChef Pro",
        logo: "/projects/colepro-app-logo.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.colechef.educa.app.monitores",
        appleUrl: "",
      },
      {
        name: "Calidad del Aire",
        logo: "/projects/calidad-app-logo.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=es.juntadeandalucia.cma.cda",
        appleUrl:
          "https://apps.apple.com/uz/app/calidad-del-aire-andaluc%C3%ADa/id1667232352",
      },
      {
        name: "Digitalízate Plus",
        logo: "/projects/logo_fundae.svg",
        googleUrl: "",
        appleUrl: "",
      },
      {
        name: "Roble",
        logo: "/projects/mova_icon.png",
      },
    ],
  },
  {
    name: "Magtel",
    logo: "logo-magtel",
    role: "Fullstack developer",
    duration: "Jun 2021 - Oct 2021",
    responsabilities: [
      "WEB, Android and iOS application development in Ionic - Angular - Cordova. BackEnd with Laravel.",
      "Applications: 'Museums of Malaga', 'Our Lady of la Leche' and 'Nuestra Señora del Juncal, Galeón'",
      "Version control: GIT. Agile, Scrum.",
      "Virtual Reality and Augmented Reality on Android devices.",
    ],
    url: "https://magtel.es/",
    projects: [
      {
        name: "Museos de Málaga",
        logo: "/projects/museos-app.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.magtel.museosmalaga",
      },
      {
        name: "Universidad de Málaga",
        logo: "/projects/malaga-app.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=es.uma.appuma",
        appleUrl: "https://apps.apple.com/es/app/uma/id997729022",
      },
      {
        name: "Our Lady Of La Leche",
        logo: "/projects/laleche-app.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.overlaping.mission_nombre_de_dios",
      },
      {
        name: "Exposición Galeón Juncal",
        logo: "/projects/galeon-app.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.magtel.galeon",
      },
    ],
  },
  {
    name: "PTV Telecom",
    logo: "logo-ptv-telecom",
    role: "Mobile developer",
    duration: "Sept 2020 - Jun 2021",
    responsabilities: [
      "Development of WEB, Android and iOS application from scratch for the technical service of PTV Telecom clients.",
      "Using Ionic - Angular, Github, HTML, CSS, TypeScript, and PHP drivers.",
      "Deployment in AppStore and GooglePlay.",
      "Use of native Google Maps, sending SMS, card payments ...",
    ],
    url: "https://www.ptvtelecom.com/",
    projects: [
      {
        name: "PTV SAT",
        logo: "/projects/ptvsat-app.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.ptv.sat&pcampaignid=web_share",
        appleUrl: "https://apps.apple.com/es/app/ptv-sat/id1542582727?l=en",
      },
      {
        name: "Mi PTV",
        logo: "/projects/miptv-app.png",
        googleUrl:
          "https://play.google.com/store/apps/details?id=com.ptvtelecom.sistemas.miptv&pcampaignid=web_share",
        appleUrl: "https://apps.apple.com/jm/app/mi-ptv/id1019419013",
      },
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
.blue-background {
  background-image: url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif);
}
</style>
