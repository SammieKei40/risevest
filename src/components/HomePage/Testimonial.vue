<template>
    <section class="empower-section w-contain">
        <div class="content-container">
            <h2 class="main-title">
                From The People Who Use Rise
            </h2>
            <Animated :delay="0.4">
                <p class="description">
                    Our mission at Risevest is to empower more people just like you to achieve your personal financial
                    goals.
                </p>
            </Animated>
        </div>
        <div class="testimonial-carousel">
            <Carousel :autoplay="4000" :per-page="1" :loop="true" :itemsToShow="1" :wrapAround="true" :transition="2000"
                class="testimonial-wrapper">
                <Slide v-for="testimonial in testimonials" :key="testimonial.id">
                    <div class="testimonial-card">
                        <p class="testimonial-text">{{ testimonial.text }}</p>
                        <div class="testimonial-author">
                            <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar" />
                            <span class="author-name">{{ testimonial.name }}</span>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </section>
</template>

<script setup lang="ts">
import Animated from '../animated.vue';
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const testimonials = ref([
    { id: 1, text: "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.", name: 'Lade', avatar: '/man1.png' },
    { id: 2, text: "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.", name: 'Jesse', avatar: '/girl1.png' },
    { id: 3, text: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that's at an all-time high in Nigeria.", name: 'Raye', avatar: '/man1.png' },
]);
</script>

<style scoped>
/* Section Styling */
.empower-section {
    height: auto;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

/* Container for Text Content */
.content-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    color: #2d2d2d;
    margin-bottom: 3rem;
}

/* Main Title */
.main-title {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -2px;
    color: #40BBC3;
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

/* Testimonial Carousel */
.testimonial-carousel {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

}

.testimonial-wrapper {
    overflow: hidden;
    width: 100%;
}

.testimonial-card {
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 600px;
    margin: 0 auto;
}

.testimonial-text {
    font-size: 1rem;
    color: #4A5050;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    text-align: start;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.author-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.author-name {
    font-size: 1rem;
    font-weight: 600;
    color: #2d2d2d;
}

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>