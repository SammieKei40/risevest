<template>
    <section class="download-section w-contain">
        <div class="content-container">
            <div class="text-content">
                <p class="sub-title">Download The Rise App</p>
                <h2 class="main-title">Join our 100,000 users investing and setting long term goals!</h2>
                <p class="description">Dollar investments that help you grow.</p>
                <div class="download-buttons">
                    <a href="#" class="download-button app-store">
                        <Apple />
                    </a>
                    <a href="#" class="download-button google-play">
                        <Android />
                    </a>
                </div>
            </div>
            <Animated :delay="0.8">
                <Hero />
            </Animated>
        </div>
    </section>
</template>

<script setup lang="ts">
import Hero from '../icons/hero.vue'
import Animated from '../animated.vue'
import Android from '../icons/android.vue'
import Apple from '../icons/apple.vue'

</script>

<style scoped>
/* Download Section Styling */
.download-section {
    background-color: #e7f8ff;
    padding: 0.1rem;
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 5rem;
}

.content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
}

@media (min-width: 768px) {
    .content-container {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10rem;
    }
}

/* Text Content Styling */
.text-content {
    max-width: 500px;
    text-align: center;
}

@media (min-width: 768px) {
    .text-content {
        text-align: left;
    }
}

.sub-title {
    color: #07969E;
    font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
}

.main-title {
    font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -1.6px;
    color: #2d2d2d;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .main-title {
        font-size: 2.5rem;
    }
}

.description {
    font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    color: #4a5050;
    margin-bottom: 2rem;
}

/* Download Buttons Styling */
.download-buttons {
    display: flex;
    gap: 1rem;
}

.download-button {
    display: inline-block;
    padding: 0.75rem 1rem;
    background-color: #2d2d2d;
    border-radius: 1rem;
    transition: transform 0.2s;
}

.download-button:hover {
    transform: translateY(-5px);
}

.download-button img {
    height: 2rem;
    width: auto;
}

/* Phone Mockup Styling */
.phone-mockup {
    flex-shrink: 0;
    max-width: 300px;
}

@media (min-width: 768px) {
    .phone-mockup {
        max-width: 400px;
    }
}

.phone-image {
    width: 100%;
    height: auto;
}
</style>