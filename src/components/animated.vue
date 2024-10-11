<template>
    <div class="defaut-animate"  ref="animatedDiv" :style="{'animation-delay': delay + 's', 'animation-duration': duration + 's' }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';


interface Props {
    type?: "fade-up" | "fade-down" | "fade-left" | "fade-right",
    delay?: number,
    duration?: number
}

let props = withDefaults(defineProps<Props>(), {
    type: 'fade-up',
    delay: 0.1,
    duration: 0.5,
});
let animatedDiv = ref(null) as Ref<HTMLDivElement | null>
let observeCounter = ref(null) as any
onMounted(() => {
    function enters() {
        function func(entries: IntersectionObserverEntry[]) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (observeCounter.value != 2) {
                        observeCounter.value++
                        animatedDiv.value?.classList.add(props.type)
                    }
                }
            })
        }
        const observer = new IntersectionObserver(func, {
            threshold: 0.1,
        })
        if (animatedDiv.value)
        observer.observe(animatedDiv.value)
    }
    enters()
})

</script>

<style scoped>
.defaut-animate{
    opacity: 0;
    transition: all 0.2s ease-in-out;
}
.fade-up{
    animation-name: fade-up;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
}
@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
.fade-down{
    animation-name: fade-down;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
}
@keyframes fade-down {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
.fade-left{
    animation-name: fade-left;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
}

@keyframes fade-left {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
.fade-right{
    animation-name: fade-right;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
}
@keyframes fade-right {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

</style>