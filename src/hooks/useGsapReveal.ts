import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseGsapRevealOptions {
  y?: number;
  x?: number;
  scale?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  start?: string;
}

/**
 * Returns a ref to attach to a container element.
 * All direct children with class `.gsap-child` will animate in on scroll.
 */
export function useGsapReveal(options: UseGsapRevealOptions = {}) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const {
      y = 40,
      x = 0,
      scale = 1,
      opacity = 0,
      duration = 0.9,
      stagger = 0.12,
      delay = 0,
      ease = 'power3.out',
      start = 'top 88%',
    } = options;

    const targets = el.querySelectorAll('.gsap-child');
    const childTargets = targets.length > 0 ? targets : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        childTargets,
        { opacity, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return containerRef;
}

/**
 * Reveal a single element (no children stagger)
 */
export function useGsapSingleReveal(options: UseGsapRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 30,
      x = 0,
      scale = 1,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      ease = 'power3.out',
      start = 'top 90%',
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Animate a number counter from 0 to target
 */
export function useGsapCounter(target: number, suffix = '') {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.5,
        ease: 'power2.out',
        snap: { val: 1 },
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + suffix;
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [target, suffix]);

  return ref;
}
