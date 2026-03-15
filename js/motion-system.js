export const MotionSystem = {
    // Standard durations
    durations: {
        fast: 0.2,
        standard: 0.6,
        slow: 1.2,
        reveal: 0.8
    },

    // Standard easing curves
    easings: {
        default: "power2.out",
        smooth: "power3.out",
        energetic: "back.out(1.7)",
        linear: "none"
    },

    // Global settings flag
    prefersReducedMotion: false,

    init() {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        this.prefersReducedMotion = mediaQuery.matches;

        // Listen for changes
        mediaQuery.addEventListener('change', (e) => {
            this.prefersReducedMotion = e.matches;
            this.updateGSAPGlobals();
        });

        this.updateGSAPGlobals();
        console.log("MotionSystem initialized.");
    },

    updateGSAPGlobals() {
        if (typeof gsap === 'undefined') return;
        
        if (this.prefersReducedMotion) {
            gsap.ticker.fps(10); // Reduce GSAP framerate or disable animations
            gsap.globalTimeline.timeScale(100); // effectively skip animations
        } else {
            gsap.ticker.fps(60);
            gsap.globalTimeline.timeScale(1);
        }
    }
};
