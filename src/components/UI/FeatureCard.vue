<template>
    <section class="feature-section c-trigger" :class="{ 'reverse': imagePosition === 'left' }">
        <div class="image-container"
            :class="{ 'left-margin': imagePosition === 'left', 'right-margin': imagePosition === 'right' }">
            <Animated class="col-span-6 ml-auto" type="fade-right">
                <img  :src="image" :alt="title" class="feature-image" />
            </Animated>
        </div>
        <div class="text-content c-text">
            <h2 class="feature-title">{{ title }}</h2>
            <p class="feature-description">{{ description }}</p>
            <a href="#" class="cta-link" aria-label="Start investing now">
                Start Investing Now
                <Arrow />
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import Animated from '../animated.vue'
import Arrow from '../icons/arrow.vue';
import { defineProps, onMounted } from 'vue';
import { useAnimation } from '@/composables/animations/useAnimations';
const { animateLineText } = useAnimation()
interface Props {
    title: string;
    description: string;
    image: string;
    imagePosition: 'left' | 'right';
}
onMounted(async () => {
    animateLineText(".c-text", ".c-trigger")
})
const props = defineProps<Props>();
</script>

<style scoped>
/* Feature Section Layout */
.feature-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

@media (min-width: 768px) {
    .feature-section {
        flex-direction: row;
    }
}

.feature-section.reverse {
    flex-direction: column;
}

@media (min-width: 768px) {
    .feature-section.reverse {
        flex-direction: row-reverse;
    }
}

/* Image Container */
.image-container {
    flex-shrink: 0;
    margin-bottom: 1.5rem;
    order: -1;
}

@media (min-width: 768px) {
    .image-container {
        margin-bottom: 0;
        order: 0;
    }

    .image-container.right-margin {
        margin-right: 1.5rem;
    }

    .image-container.left-margin {
        margin-left: 1.5rem;
    }
}

.feature-image {
    width: 280px;
    height: 263px;
    object-fit: cover;
}

@media (min-width: 768px) {
    .feature-image {
        width: 488px;
        height: 460px;
    }
}

/* Text Content */
.text-content {
    text-align: center;
    max-width: 100%;
    order: 0;
}

@media (min-width: 768px) {
    .text-content {
        text-align: left;
    }
}

@media (min-width: 1024px) {
    .text-content {
        max-width: 40%;
    }
}

.feature-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2D2D2D;
    margin-bottom: 0.5rem;
    letter-spacing: -0.125rem;
}

@media (min-width: 768px) {
    .feature-title {
        font-size: 1.875rem;
        letter-spacing: -0.2rem;
    }
}

.feature-description {
    color: #4A5050;
    line-height: 1.875rem;
    font-size: 1rem;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .feature-description {
        font-size: 1.125rem;
    }
}

/* Call-to-Action Link */
.cta-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-weight: 500;
    color: #07969E;
    text-decoration: none;
}

@media (min-width: 768px) {
    .cta-link {
        justify-content: flex-start;
    }
}

.cta-link:hover {
    font-weight: 700;
    text-decoration: underline;
}

/* Accessibility */
.cta-link:focus,
.feature-image:focus {
    outline: 2px solid #07969E;
    outline-offset: 2px;
}
</style>
