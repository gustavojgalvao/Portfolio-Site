export const Analytics = {
    init() {
        console.log("Analytics initialized in internal mock mode.");
        this.bindTrackers();
    },

    trackEvent(eventName, properties = {}) {
        // Placeholder for real analytics integration (e.g., Google Analytics, Vercel Analytics)
        console.log(`[Analytics Event] ${eventName}`, properties);
    },

    bindTrackers() {
        // Example: Track project clicks
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const projectTitle = card.querySelector('.project-title')?.innerText || 'Unknown Project';
                this.trackEvent('project_clicked', { project: projectTitle });
            });
        });

        // Example: Track contact submissions
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', () => {
                this.trackEvent('contact_form_submitted');
            });
        }
    }
};
