import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

let lenis: Lenis;
export const initSmoothScrolling = () => {
    lenis = new Lenis({
        lerp: 0.05,
        smoothWheel: true,
        // smoothTouch: true,
        syncTouchLerp:  0.5,
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    const scrollFn = (time: any) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
};
export const scrollTo = (target: HTMLElement | string) => {
    if (typeof target === 'string') {
        let targetEl : HTMLElement | null = document.querySelector(target);
        if (!targetEl) return;
        lenis.scrollTo(targetEl);
    }else {
        lenis.scrollTo(target);
    }
}