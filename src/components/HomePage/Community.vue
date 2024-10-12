<template>
  <div class="feature-section w-contain c-trigger">
    <div class="text-content">
      <h3 class="feature-title c-text">Join The Rise Community</h3>
      <p class="feature-description">
        If you want to go far, go together. Our Telegram community surrounds you with others who can help you along
        your financial journey with tips, support, advice and learning. It's completely free and open to new and
        seasoned investors.
      </p>
      <a href="#" class="cta-link" aria-label="Join our community">Join our Community</a>
    </div>
    
    <Animated :delay="0.8" class="image-container">
      <img class="community-image" src="/community.png" alt="Community Member 1" />
    </Animated>
  </div>
</template>

<script setup lang="ts">
import Animated from '../animated.vue'
import { defineProps, onMounted } from 'vue';
import { useAnimation } from '@/composables/animations/useAnimations';
const { animateLineText } = useAnimation()

onMounted(async () => {
    animateLineText(".c-text", ".c-trigger")
})
</script>

<style scoped>
/* Feature Section Layout */
.feature-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
}

@media (min-width: 768px) {
  .feature-section {
    flex-direction: row;
    justify-content: space-between;
  }
}

/* Image Container */
.image-container {
  flex-shrink: 0;
  margin-bottom: 1.5rem;
}



.community-image {
  width: 280px;
  height: 263px;
  object-fit: cover;
}

/* Text Content */
.text-content {
  text-align: center;
  max-width: 100%;
  order: 1;
}

@media (min-width: 768px) {
  .text-content {
    text-align: left;
    max-width: 40%;
    order: 1;
  }
}

@media (min-width: 768px) {
  .image-container {
    order: 2; 
  }
  .community-image {
  width: 432px;
height: 386px;
}
}

.feature-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -2px;
  color: #2d2d2d;
  margin-bottom: 1rem;
}

.feature-description {
  color: #2d2d2d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 2rem;
}

/* Call-to-Action Link */
.cta-link {
  display: inline-block;
  background-color: #a0dde2;
  color: #2d2d2d;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-weight: 600;
}

.cta-link:hover {
  background-color: #07969e;
  color: #fff;
}

/* Accessibility */
.cta-link:focus,
.community-image:focus {
  outline: 2px solid #00b894;
  outline-offset: 2px;
}
</style>