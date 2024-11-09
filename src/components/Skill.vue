<template>
  <div class="skill-container">
    <IonIcon :src="skill.icon" class="m-2 h-8 w-8"></IonIcon>
    <div class="label-progress-container">
      <label class="tech-label">{{ skill.name }}</label>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progressWidth }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { IonIcon } from "@ionic/vue";
import { Skill } from "../interfaces/skill.interface";
import { useRouter } from "vue-router";

// Define props for the component
const props = defineProps<{
  skill: Skill;
}>();

// Animation state
const progressWidth = ref("0%");
const router = useRouter();

// Function to start the animation
const startAnimation = () => {
  progressWidth.value = "0%"; // Reset to 0%
  setTimeout(() => {
    progressWidth.value = `${props.skill.percentage}%`;
  }, 100); // Small delay for better UX
};

// Trigger animation on first mount
onMounted(() => {
  startAnimation();
});

// Detect route changes to reset the animation
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    startAnimation();
  }
);
</script>


<style scoped>
.skill-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 0px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.label-progress-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tech-label {
  font-weight: 400;
  font-size: small;
  margin-bottom: 4px;
}

.progress-bar-container {
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #4caf50;
  transition: width 1.5s ease-in-out;
}
</style>
