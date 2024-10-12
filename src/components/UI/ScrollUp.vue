<template>
    <div>
        <button v-show="isVisible" @click="scrollToTop" class="scroll-top-button">
            &#8679;
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
    isVisible.value = window.scrollY > 100;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.content {
    height: 2000px;
}

.scroll-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 24px;
    background-color:  #A0DDE2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity 0.3s;
}

.scroll-top-button:hover {
    background-color: #07969E;
}
</style>