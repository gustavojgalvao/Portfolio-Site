export const Cursor = {
    init() {
        // Only initialize on desktop devices
        if (window.innerWidth <= 768 || ('ontouchstart' in window)) return;
        
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        document.body.appendChild(this.cursor);
        
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'custom-cursor-dot';
        document.body.appendChild(this.cursorDot);
        
        this.bindEvents();
        console.log("Custom Cursor initialized.");
    },
    
    bindEvents() {
        // Cursor movement
        window.addEventListener('mousemove', (e) => {
            if(typeof gsap !== 'undefined') {
                // Main cursor (trails slightly)
                gsap.to(this.cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.6,
                    ease: "power3.out"
                });
                
                // Dot (follows immediately)
                gsap.set(this.cursorDot, {
                    x: e.clientX,
                    y: e.clientY
                });
            }
        });
        
        // Hover states
        this.addHoverStates();
        
        // Re-bind hover states when DOM might change
        const observer = new MutationObserver(() => this.addHoverStates());
        observer.observe(document.body, { childList: true, subtree: true });
    },
    
    addHoverStates() {
        const interactives = document.querySelectorAll('a, button, .interactive, input, textarea');
        interactives.forEach(el => {
            if (!el.hasAttribute('data-cursor-bound')) {
                el.setAttribute('data-cursor-bound', 'true');
                el.addEventListener('mouseenter', () => {
                    this.cursor.classList.add('hover');
                    this.cursorDot.classList.add('hover');
                });
                el.addEventListener('mouseleave', () => {
                    this.cursor.classList.remove('hover');
                    this.cursorDot.classList.remove('hover');
                });
            }
        });
    }
};
