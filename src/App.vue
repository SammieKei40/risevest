<script setup lang="ts">
// import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import {  ScrollUp } from './components'


// const isLoading = ref<boolean>(true);

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
    <!-- <LoadingSpinner v-if="isLoading" /> -->
    <!-- <div> -->
      <RouterView />
      <ScrollUp />
    <!-- </div> -->
</template>

<style scoped lang="scss">
/* Add any scoped styles here */
</style>
