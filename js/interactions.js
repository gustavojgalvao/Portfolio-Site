export const Interactions = {
    init() {
        this.initMagneticButtons();
        this.initTiltEffects();
        this.initContactForm();
        console.log("Interactions initialized.");
    },
    
    initMagneticButtons() {
        const magnets = document.querySelectorAll('.magnetic');
        magnets.forEach(magnet => {
            magnet.addEventListener('mousemove', (e) => {
                const position = magnet.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                
                if(typeof gsap !== 'undefined') {
                    gsap.to(magnet, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 1,
                        ease: "power3.out"
                    });
                }
            });
            
            magnet.addEventListener('mouseleave', () => {
                if(typeof gsap !== 'undefined') {
                    gsap.to(magnet, {
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: "elastic.out(1, 0.3)"
                    });
                }
            });
        });
    },

    initTiltEffects() {
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
        
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
        
                if(typeof gsap !== 'undefined') {
                    gsap.to(card, {
                        rotateX: rotateX,
                        rotateY: rotateY,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        
            card.addEventListener('mouseleave', () => {
                if(typeof gsap !== 'undefined') {
                    gsap.to(card, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        });
    },

    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                const whatsappMessage = `Olá! Meu nome é ${name}. Email: ${email}. Mensagem: ${message}`;
                const whatsappUrl = `https://wa.me/5571992550509?text=${encodeURIComponent(whatsappMessage)}`;

                window.open(whatsappUrl, '_blank');
                contactForm.reset();
            });
        }
    }
};
