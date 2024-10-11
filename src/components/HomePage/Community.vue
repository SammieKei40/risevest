<template>
    <div class="feature-section w-contain">
        <div class="text-content">
            <h3 class="feature-title">Join The Rise Community</h3>
            <p class="feature-description">If you want to go far, go together. Our Telegram community surrounds you with
                others who can help you along your financial journey with tips, support, advice and learning. It's
                completely free and open to new and seasoned investors.</p>
            <a href="#" class="cta-link" aria-label="Join our community">
                Join our Community
            </a>
        </div>
        <div class="image-container">
            <img src="/community.png" alt="Community Member 1" />

        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
</script>

<style scoped>
/* Feature Section Layout */
.feature-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 3rem;
}

@media (min-width: 768px) {
    .feature-section {
        flex-direction: row;
        gap: 10rem;
    }
}

/* Image Container */
.image-container {
    flex-shrink: 0;
    margin-bottom: 1.5rem;
    order: -1;
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
}

@media (min-width: 768px) {
    .text-content {
        text-align: left;
        max-width: 40%;
    }
        .image-container {
            order: 1;
        }
}

.feature-title {
    font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -2px;
    color: #2D2D2D;
    margin-bottom: 1rem;
}

.feature-description {
    color: #2D2D2D;
    font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    margin-bottom: 2rem;
}

/* Call-to-Action Link */
.cta-link {
    display: inline-block;
    background-color: #A0DDE2;
    color: #2D2D2D;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
    font-weight: 600;
}

.cta-link:hover {
    background-color: #019874;
}

/* Accessibility */
.cta-link:focus,
.community-image:focus {
    outline: 2px solid #00b894;
    outline-offset: 2px;
}
</style>