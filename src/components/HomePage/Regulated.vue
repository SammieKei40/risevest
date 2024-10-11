<template>
    <section class="empower-section">
        <div class="content-container">
            <h2 class="main-title">
                How we are Regulated
            </h2>
            <Animated :delay="0.4">
                <p class="description">
                    Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered
                    investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and
                    all our assets are held with regulated third parties, in all relevant jurisdictions
                </p>
            </Animated>
        </div>
    </section>
</template>

<script setup lang="ts">
import Animated from '../animated.vue'
// No additional logic needed for this template
</script>

<style scoped>
/* Section Styling */
.empower-section {
    height: auto;
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(90deg, rgba(246, 228, 240, 1) 0%, rgba(234, 244, 252, 1) 50%, rgba(228, 250, 239, 1) 100%);
}

/* Container for Text Content */
.content-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    color: #2d2d2d;
}

/* Main Title */
.main-title {
    font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -2px;
    color: #2D2D2D;
    margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
    .main-title {
        font-size: 40px;
    }
}

/* Description Paragraph */
.description {
    margin-top: 1rem;
    color: #4A5050;
    font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
}
</style>