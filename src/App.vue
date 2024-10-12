<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { initSmoothScrolling } from "../src/composables/animations/useScrolling";
import { LoadingSpinner } from '@/components'


const isLoading = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); 
});
// onMounted(async () => {
//   try {
//     initSmoothScrolling(); 
//   } catch (error) {
//     console.error("Error initializing smooth scrolling:", error);
//   } finally {
//     isLoading.value = false;
//   }
// });
</script>

<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <div v-else>
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
/* Add any scoped styles here */
</style>
