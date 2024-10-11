<template>
    <div class="asset-card">
        <div class="icon-background">
            <div class="icon-container" :class="backgroundClass">
                <img :src="image" :alt="title" class="icon-image" />
            </div>
        </div>
        <h3 class="asset-title">{{ title }}</h3>
        <p class="asset-description">{{ description }}</p>
        <p class="asset-info">
            <span class="highlight">Historical returns:</span> 14% per annum
        </p>
        <p class="asset-info">
            <span class="highlight">Risk Level:</span> Medium
        </p>
        <div class="link-wrapper">
            <a href="#" class="asset-link" aria-label="Learn more about {{ title }}">
                {{ linkText }}
                <Arrow />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Arrow from '../icons/arrow.vue'
import { defineProps } from 'vue';

interface Props {
    title: string;
    description: string;
    image: string;
    backgroundClass: string;
    linkText: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
/* Asset Card */
.asset-card {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.2s ease-in-out;
    overflow: hidden;
    height: 100%;
    justify-content: space-between;
}

.asset-card:hover {
    transform: translateY(-5px);
}

/* Icon Background */
.icon-background {
    background-color: backgroundClass;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
}

/* Icon Container */
.icon-container {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
    .icon-container {
        width: 6rem;
        height: 6rem;
    }
}

.icon-image {
    width: 4rem;
    height: 4rem;
}

@media (min-width: 768px) {
    .icon-image {
        width: 5rem;
        height: 5rem;
    }
}

/* Text Content */
.asset-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #2d2d2d;
    margin-bottom: 0.75rem;
}

@media (min-width: 768px) {
    .asset-title {
        font-size: 1.5rem;
    }
}

.asset-description {
    font-size: 0.875rem;
    color: #4a4a4a;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .asset-description {
        font-size: 1rem;
    }
}

.asset-info {
    font-size: 0.875rem;
    color: #6b6b6b;
    margin-bottom: 0.5rem;
}

/* Highlighted text */
.highlight {
    font-weight: 600;
}

/* Link Wrapper to keep link aligned at bottom */
.link-wrapper {
    margin-top: auto;
    padding-top: 1rem;
}

/* Call-to-Action Link */
.asset-link {
    display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        font-weight: 500;
        color: #07969E;
        text-decoration: none;
}

@media (min-width: 768px) {
    .asset-link {
        font-size: 1rem;
    }
}

.asset-link:hover {
    text-decoration: underline;
}

/* Accessibility */
.asset-link:focus,
.icon-image:focus {
    outline: 2px solid #07969E;
    outline-offset: 2px;
}
</style>
