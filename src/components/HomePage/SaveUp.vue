<template>
    <section class="save-section">
        <div class="save-content ">
            <Animated :delay="0.6">
                <img src="/phone.png" alt="Coin stack" class="card-image" />
            </Animated>

            <Animated :delay="0.8">

                <div class="text-content ">
                    <p class="sub-title">The Rise App</p>
                    <h2 class="main-title">Save for your <span class="highlight">future</span></h2>
                    <p class="description">
                        With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your
                        children's future and more.
                    </p>
                    <a href="#" class="cta-button">Start Saving</a>
                </div>
            </Animated>
        </div>
    </section>
</template>

<script setup lang="ts">
import Animated from '../animated.vue'
</script>

<style scoped>
/* Main Section */
.save-section {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 2rem;
}

.save-content {
    display: flex;
    gap: 2rem;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

@media (min-width: 768px) {
    .save-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        gap: 10rem;
    }
    
}

/* Phone Mockup */
.phone-mockup {
    background: #e6e6e6;
    border-radius: 2rem;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 300px;
    position: relative;
}

.card {
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
}

.card-image {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
}

.card-content {
    padding: 1rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-description {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    color: #555555;
}

.card-link {
    color: #07969E;
    text-decoration: none;
    font-weight: 500;
}

.card-link:hover {
    text-decoration: underline;
}

/* Text Content */
.text-content {
    max-width: 500px;
    line-height: 40px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}

.sub-title {
    color: #2D2D2D;
    font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
         letter-spacing: -0.9px;
}

.main-title {
    color:  #2D2D2D;
    font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -2px;
}

.highlight {
    color: #6a5acd;
    font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -2px;
}

.description {
    font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    color: #2D2D2D
}

.cta-button {
    background: #07969E;
    color: #ffffff;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    display: inline-block;
}

@media (min-width: 768px) {
    .cta-button {
        width: 160px;
            text-align: center;
    }

        .main-title {
            font-size: 40px;
        }
    
}

.cta-button:hover {
    background: #066a7d;
}
</style>
