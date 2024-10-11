import { gsap } from "gsap"
import SplitType from 'split-type';
import { IO } from './observer'
export const useAnimation = () => {

    function animateLineText(el: HTMLElement | string, trigger: HTMLElement | string) {
        let elems = null as NodeListOf<HTMLElement> | null;
        if (typeof el === 'string') {
            elems = document.querySelectorAll(el) as NodeListOf<HTMLElement>
        }
        let triggers: NodeListOf<HTMLElement>;
        if (typeof trigger === 'string') {
            triggers = document.querySelectorAll(trigger) as NodeListOf<HTMLElement>
        }
        // const tl = gsap.timeline({ paused: true })
        if (!elems) return;
        elems.forEach((el, idx) => {
            el.style.opacity = '1';
            const split = new SplitType(el, { types: 'lines' }) as any;
            const splittedText = new SplitType(split.lines, { types: 'lines' });
            IO(triggers[idx], {
                threshold: 0.1
            })
            .then(() => {
                gsap.to(splittedText.lines, {
                    y: 0,
                    opacity: 1,
                    // autoAlpha: 1,
                    stagger: 0.08,
                    duration: 0.6,
                transformStyle: "preserve-3d",
                ease: 'power3.inOut'
                // ease: "easeIn",
                });
            })
        })
    }
    function animatHeaderTextEach(el: HTMLElement | string, trigger: HTMLElement) {
        const split = new SplitType(el, { types: 'words' }) as any;
        const splittedText = new SplitType(split.words, { types: 'words' });
        IO(trigger, {
            threshold: 0.1
        })
        .then(() => {
            gsap.to(splittedText.words, {
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                stagger: 0.08,
                duration: 0.6,
            transformStyle: "preserve-3d",
            ease: "easeIn",
            });
        })
    }

    return {
        animateLineText,
        animatHeaderTextEach
    }
}

export const animateHero = (el1: string, trg: string) => {
    let elems = document.querySelectorAll(el1) as NodeListOf<HTMLElement>
    let trigger = document.querySelector(trg) as HTMLElement
    const tl = gsap.timeline({ paused: true })

    tl.fromTo(elems[0], {
        yPercent: 100,
        visibility: 'hidden'
    }, {
        yPercent: 0,
        visibility: 'visible',
        duration: 0.7,
        ease: 'power3.in'
    }, 0.3).fromTo(elems[1], {
        yPercent: 100,
        visibility: 'hidden'
    }, {
        yPercent: 0,
        visibility: 'visible',
        duration: 0.8,
        ease: 'power3.inOut',
    }, '-=0.6')

    IO(trigger, {
        threshold: 0.1
    }).then(() => {
        tl.play()
    })


}