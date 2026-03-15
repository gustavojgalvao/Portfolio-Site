import { MotionSystem } from './motion-system.js';

export const Animations = {
    init() {
        if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            this.initPreloader();
            this.initScrollReveals();
            console.log("GSAP Animations initialized.");
        } else {
            console.warn("GSAP not loaded.");
        }
    },
    
    initPreloader() {
        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = 'auto'; // allow scroll after load
                this.initHeroAnimations();
            }
        });
        
        // Disable scroll during preloader
        document.body.style.overflow = 'hidden';
        
        const loaderTextClasses = ["System Check...", "Loading Modules...", "Mounting UI...", "Ready."];
        const loadingText = document.getElementById('loading-text');
        
        // Animate progress bar
        tl.to('#progress-bar', {
            width: "100%",
            duration: 2.5,
            ease: "power2.inOut",
            onUpdate: function() {
                const percent = Math.round(this.progress() * 100);
                document.getElementById('loading-percent').innerText = `${percent}%`;
                if(percent === 25) loadingText.innerText = loaderTextClasses[0];
                if(percent === 50) loadingText.innerText = loaderTextClasses[1];
                if(percent === 75) loadingText.innerText = loaderTextClasses[2];
                if(percent === 100) loadingText.innerText = loaderTextClasses[3];
            }
        })
        .to('.preloader', {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            delay: 0.3
        });
    },
    
    initHeroAnimations() {
        // Stagger hero elements in
        const reveals = document.querySelectorAll('.hero-reveal');
        if (reveals.length > 0) {
            gsap.fromTo(reveals, 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: MotionSystem.durations.reveal,
                    ease: MotionSystem.easings.smooth,
                    stagger: 0.15 
                }
            );
        }
        
        const heroImg = document.querySelector('.hero-image');
        if(heroImg) {
            gsap.fromTo(heroImg,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.7)"
                }
            );
        }
    },
    
    initScrollReveals() {
        // Scroll reveal logic
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 40,
                opacity: 0,
                duration: MotionSystem.durations.reveal,
                ease: MotionSystem.easings.smooth
            });
        });
        
        this.initTerminalTyping();
    },
    
    initTerminalTyping() {
        const textElement = document.getElementById('typing-effect');
        if (!textElement || typeof ScrollTrigger === 'undefined') return;

        const strings = [
            "npm run dev",
            "Compiling modules...",
            "Server running at http://localhost:3000",
            "Welcome to Gustavo's digital experience.",
            "Building scalable solutions..."
        ];
        
        let stringIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentString = strings[stringIndex];
            
            if (isDeleting) {
                textElement.innerText = currentString.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.innerText = currentString.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 30 : 60 + Math.random() * 50;
            
            if (!isDeleting && charIndex === currentString.length) {
                typeSpeed = 2500; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                stringIndex = (stringIndex + 1) % strings.length;
                typeSpeed = 500; // Pause before next word
            }
            
            setTimeout(type, typeSpeed);
        }
        
        ScrollTrigger.create({
            trigger: "#terminal",
            start: "top 80%",
            onEnter: () => {
                setTimeout(type, 500);
            },
            once: true
        });
    }
};
