<template>
    <div class="rise-app w-contain c-trigger">
        <div class="download-section c-text">
            <p class="download-text">Download The Rise App</p>
            <h1 class="headline">
                Join our 100,000 users investing and setting long term goals!
            </h1>
            <p class="sub-text">Dollar investments that help you grow.</p>
            <div class="app-buttons">
                <a href="https://apps.apple.com/ng/app/risevest-invest-in-dollars/id1486295645" target="_blank"
                    class="app-button">
                    <img src="/apple.png" alt="Apple" width="144" height="48" />
                </a>
                    <a href="https://play.google.com/store/apps/details?id=com.rise.mobile" target="_blank"
                        class="app-button">
                    <img src="/android.png" alt="Android" width="144" height="48" />
                </a>
            </div>
        </div>
        <div class="phone-section">
            <Animated :delay="0.8">
                <Hero />
            </Animated>
        </div>
    </div>
</template>

<script setup lang="ts">
import Animated from '../animated.vue'
import Hero from '../icons/hero.vue'
import { useAnimation } from '../../composables/animations/useAnimations';
import { onMounted } from 'vue';
const { animateLineText } = useAnimation()

onMounted(async () => {
    animateLineText(".c-text", ".c-trigger")
})
</script>

<style scoped>
.rise-app {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #ECFEFE;
    border-radius: 50px;
    text-align: center;
    overflow: hidden;
    margin-bottom: 6rem;
    margin-top: 4rem;
    height: 450px;
}

.download-section {
    max-width: 600px;
    margin-bottom: 7rem;
    z-index: 1;
}

.download-text {
    color: #07969E;
    font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    margin-bottom: 1rem;
}

.headline {
    font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -1.6px;
    color: #2D2D2D;
    margin-bottom: 1rem;
}

.highlight {
    color: #00a86b;
}

.sub-text {
    color: #4A5050;
    font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    margin-bottom: 2rem;
}

.app-buttons {
    display: flex;
    /* gap: 50px; */
}

.app-button {
    margin-right: 10px;
}


.phone-section {
    position: absolute;
    bottom: -330px;
    display: flex;
    justify-content: center;
    width: 100%;
}

.phone-image {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
}

@media (min-width: 768px) {
    .rise-app {
        flex-direction: row;
        justify-content: space-between;
        padding: 4rem;
    }

        .app-button {
            margin-right: 15px;
        }

    .headline {
        font-size: 32px;
    }

        .app-buttons {
            display: flex;
            flex-direction: row;
                justify-content: space-between;
            
        }

    .download-section {
        text-align: left;
        max-width: 500px;
    margin-bottom: -2rem;
    }

    .phone-section {
        position: absolute;
        bottom: -100px;
        max-width: 400px;
        right: -10px;
    }
}
</style>