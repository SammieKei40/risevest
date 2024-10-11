<template>
  <div class="hero relative">
    <div class="w-contain mx-auto">
      <NavBar />


      <Dot1 class="dot dot-1" />
      <Dot5 class="dot dot-5" />
      <Dot2 class="dot dot-2" />
      <Dot3 class="dot dot-3" />
      <Dot4 class="dot dot-4" />

      <div class="content">
        <div class="text-content c-trigger">
          <h2 class="title c-text">Dollar investments that help you grow</h2>
          <Animated :delay="0.4">
            <p class="description">
              We put your money in high-quality assets that help you build wealth and achieve your financial goals.
            </p>
            <div class="download-buttons">
              <a href="#" class="download-link">
                <Apple />
              </a>
              <a href="#" class="download-link">
                <Android />
              </a>
            </div>
          </Animated>
        </div>
        <div class="image-content">
          <Animated :delay="0.8">
            <Hero />
          </Animated>
        </div>
      </div>

      <h1 class="support-text">We are supported by</h1>
      <div class="partners">
        <Arm />
        <Western />
        <Tech />
        <Vem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Animated from '../animated.vue'
import Vem from '../icons/vem.vue';
import Tech from '../icons/tech.vue';
import Western from '../icons/western.vue';
import Arm from '../icons/arm.vue';
import Hero from '../icons/hero.vue';
import Android from '../icons/android.vue';
import Apple from '../icons/apple.vue';
import NavBar from '../NavBar.vue';
import Dot1 from '../icons/dot1.vue';
import Dot2 from '../icons/dot2.vue';
import Dot3 from '../icons/dot3.vue';
import Dot4 from '../icons/dot4.vue';
import Dot5 from '../icons/dot5.vue';
</script>

<style scoped>
.hero {
  height: 100%;
  background-color: #fff;
  width: 100%;
  background-image: url('/path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.dot {
  position: absolute;
  z-index: 1;
  opacity: 0.3;
}

.dot-1 {
  top: 16%;
  left: 14%;;
}

.dot-2 {
  bottom: 15%;
  right: 6%;
}

.dot-3 {
  bottom: 20%;
  left: 15%;
}

.dot-4 {
  top: 16%;
  right: 35%;
}

.dot-5 {
  top: 60%;
  left: 50%;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-top: 3rem;
  position: relative;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
    text-align: left;
  }
}

.text-content {
  flex: 1;
}

@media (min-width: 768px) {
  .text-content {
    max-width: 456px;
  }
}

.title {
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: -2.8px;
  color: #07969E;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 56px;
  }
}

.description {
  color: #4A5050;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.download-buttons {
  display: flex;
  margin-top: 1.5rem;
}

.download-link {
  display: flex;
  padding: 0.5rem;
  margin-bottom: 3rem;
  border-radius: 0.375rem;
  position: relative;
  transition: background-color 0.3s ease-in-out;
}

.download-link:hover {
  background-color: #f3f4f6;
}

.image-content {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
}

.support-text {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 4rem;
  color: #7B8DA8;
}

@media (min-width: 768px) {
  .support-text {
    display: none;
  }
  
}

.partners {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .partners {
    margin-top: 4rem;
  }
}
.content,
.text-content,
.image-content,
.partners,
.support-text {
  position: relative;
  z-index: 2;
}
</style>
