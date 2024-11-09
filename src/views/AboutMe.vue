<template>
  <IonPage>
    <AppHeader></AppHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense"> </IonHeader>
      <IonLabel>
        <h1 class="animate-fade-up animate-ease-out">Skills</h1>
        <div class="">
          <Skill :skill="skill" v-for="(skill, index) in skills" :key="index"></Skill>
        </div>
      </IonLabel>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonContent,
  IonLabel,
} from "@ionic/vue";
import AppHeader from "@/components/AppHeader.vue";
import Skill from "@/components/Skill.vue";

interface Skill {
  icon: string;
  name: string;
  percentage: number;
}

const skills: Skill[] = [{
  name: "Vue.js",
  icon: "/icons/vuelogo.svg",
  percentage: 90,
}, {
  name: "React",
  icon: "logo-react",
  percentage: 80,
}, {
  name: "Angular",
  icon: "logo-angular",
  percentage: 70,
}, {
  name: "Ionic",
  icon: "logo-ionic",
  percentage: 85,
}, {
  name: "Capacitor",
  icon: "logo-capacitor",
  percentage: 80,
}, {
  name: "Web Components",
  icon: "logo-html5",
  percentage: 85,
}, {
  name: "JavaScript",
  icon: "logo-javascript",
  percentage: 90,
}, {
  name: "TypeScript",
  icon: "logo-typescript",
  percentage: 85,
}, {
  name: "HTML",
  icon: "logo-html5",
  percentage: 95,
}, {
  name: "CSS",
  icon: "logo-css3",
  percentage: 90,
}, {
  name: "Sass",
  icon: "logo-sass",
  percentage: 80,
}, {
  name: "Stylus",
  icon: "logo-stylus",
  percentage: 60,
}, {
  name: "Node.js",
  icon: "logo-nodejs",
  percentage: 80,
}, {
  name: "MongoDB",
  icon: "logo-mongodb",
  percentage: 70,
}, {
  name: "MySQL",
  icon: "logo-mysql",
  percentage: 60,
}, {
  name: "SQLite",
  icon: "logo-sqlite",
  percentage: 40,
}, {
  name: "Firebase",
  icon: "logo-firebase",
  percentage: 70,
}];
</script>
