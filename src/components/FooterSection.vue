<template>

    <footer class="footer w-contain">

        <div class="footer__grid">
            <div>
                <img src="/logo.png" class="footer__logo" alt="" />
                <ul class="footer__list">
                    <li v-for="link in companyLinks" :key="link.name" class="footer__item">
                        <a :href="link.link" class="footer__link">
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h1 class="footer__heading">Explore</h1>
                <ul class="footer__list">
                    <li v-for="item in exploreLinks" :key="item.name" class="footer__item">
                        <a :href="item.link" class="footer__link">
                            {{ item.name }}
                            <Arrowup />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h1 class="footer__heading">Products</h1>
                <ul class="footer__list">
                    <li v-for="item in applyLinks" :key="item.name" class="footer__item">
                        <a :href="item.link" class="footer__link">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h1 class="footer__heading">Contact Us</h1>
                <ul class="footer__list">
                    <li v-for="item in followLinks" :key="item.name" class="footer__item">
                        <a :href="item.link" class="footer__link">
                            {{ item.name }}
                            <Arrowup />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>

</template>

<script setup lang="ts">
import Arrowup from './icons/arrowup.vue'
import { onMounted } from 'vue';
import { companyLinks, exploreLinks, applyLinks, followLinks } from '../composables/footer';
import { useAnimation } from '@/composables/animations/useAnimations';
const { animateLineText } = useAnimation();

onMounted(() => {
    animateLineText(".c-text", ".c-trigger");
});
</script>

<style scoped>
.footer {
    background-color: #fff;
    padding-top: 20px;
    margin: 0 auto;
}

.footer__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    justify-content: space-between;
    width: 100%;
}

@media (min-width: 768px) {
    .footer__grid {
        display: flex;
    }
}

.footer__logo {
    margin-bottom: 24px;
}

.footer__list {
    color: var( #2D2D2D);
    font-weight: 400;
    cursor: pointer;
}

.footer__item {
    margin-bottom: 16px;
}

.footer__link {
    color: var( #2D2D2D);
    display: flex;
    align-items: center;
}

.footer__heading {
    margin-bottom: 24px;
    font-size: 1rem;
    font-weight: 600;
    color: #2D2D2D;
}
</style>
