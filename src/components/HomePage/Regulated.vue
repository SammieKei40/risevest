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
                <div class="button-wrapper">
                    <router-link to="#" class="btn-primary">
                        Get Started
                    </router-link>
                </div>
            </Animated>
        </div>
    </section>
</template>

<script setup lang="ts">
// No additional logic needed for this template
</script>

<style scoped>
/* Section Styling */
.empower-section {
    height: auto;
    padding: 3px;
    display: grid;
    place-content: center;
    text-align: center;
    background: var(--Pink-4, #F6E4F0);
        mix-blend-mode: multiply;
    
}

/* Container for Text Content */
.content-container {
    color: #ffffff;
    width: 40%;
    max-width: 60%;
    margin: 0 auto;
    gap: 1rem;
}

/* Main Title */
.main-title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
    color: #2D2D2D;
}

@media (min-width: 768px) {
    .main-title {
        font-size: 3.3rem;
        letter-spacing: -3px;
        line-height: 60px;
    }
}

/* Highlighted Text */
.highlight {
    color: #07969E;
    /* Replace with your brand's primary color */
}

/* Description Paragraph */
.description {
    margin-top: 1rem;
    line-height: 1.5;
    color: #4A5050;
}

/* Button Styling */
.button-wrapper {
    display: inline-block;
    margin-top: 1rem;
}

.btn-primary {
    background-color: #07969E;
    color: #ffffff;
    min-width: 200px;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-primary:hover {
    background-color: #066a7d;
}
</style>
