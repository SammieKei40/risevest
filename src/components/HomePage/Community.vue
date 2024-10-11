<template>
    <div class="feature-section w-contain">
        <div class="image-container">
            <img src="/community.png" alt="Community" class="feature-image" />
        </div>
        <div class="text-content">
            <h3 class="feature-title">Join The Rise Community</h3>
            <p class="feature-description">If you want to go far, go together. Our Telegram community surrounds you with
                others who can help you along your financial journey with tips, support, advice and learning. It's
                completely free and open to new and seasoned investors.</p>
            <a href="#" class="cta-link" aria-label="Start investing now">
                Start Investing Now
                <Arrow />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Arrow from '../icons/arrow.vue';
import { defineProps } from 'vue';

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
        /* Side-by-side layout for larger screens */
    }
}

.feature-section.reverse {
    flex-direction: column;
    /* Reverse order on mobile to make the image appear first */
}

@media (min-width: 768px) {
    .feature-section.reverse {
        flex-direction: row-reverse;
        /* Reverse direction for larger screens */
    }
}

/* Image Container */
.image-container {
    flex-shrink: 0;
    margin-bottom: 1.5rem;
    order: -1;
    /* Image appears before text content on mobile */
}

@media (min-width: 768px) {
    .image-container {
        margin-bottom: 0;
        order: 0;
        /* Reset order for larger screens */
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
    /* Default order for text content on mobile */
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
