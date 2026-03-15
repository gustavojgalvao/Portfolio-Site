export const Navigation = {
    init() {
        this.navbar = document.getElementById('navbar');
        this.mobileToggle = document.getElementById('mobileToggle');
        this.navMenu = document.getElementById('navMenu');
        this.links = document.querySelectorAll('.nav-link');
        
        this.bindEvents();
        this.createScrollIndicator();
        this.initPageTransitions();
        console.log("Navigation initialized.");
    },

    initPageTransitions() {
        const links = document.querySelectorAll('a[href]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                const target = link.getAttribute('target');
                
                // Ignore hash links, external links, or new tabs, and download links
                if (!href || href.startsWith('#') || target === '_blank' || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || link.hasAttribute('download')) {
                    return;
                }
                
                e.preventDefault();
                
                const preloader = document.getElementById('preloader');
                if (preloader) {
                    const textSpan = document.getElementById('loading-text');
                    const progressContainer = document.querySelector('.progress-bar-container');
                    const percentSpan = document.getElementById('loading-percent');
                    
                    if (progressContainer) progressContainer.style.display = 'none';
                    if (percentSpan) percentSpan.style.display = 'none';
                    if (textSpan) textSpan.innerText = 'Loading';
                    
                    preloader.style.display = "flex";
                    gsap.set(preloader, { y: "-100%", opacity: 1 });
                    gsap.to(preloader, 
                        {
                            y: "0%",
                            duration: 0.6,
                            ease: "power3.inOut",
                            onComplete: () => {
                                window.location.href = href;
                            }
                        }
                    );
                } else {
                    window.location.href = href;
                }
            });
        });
    },

    bindEvents() {
        if(this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
            });
        }
        
        this.links.forEach(link => {
            link.addEventListener('click', () => {
                if(this.navMenu) this.navMenu.classList.remove('active');
            });
        });

        window.addEventListener('scroll', () => {
            this.handleScroll();
            this.updateScrollIndicator();
        }, { passive: true });
    },

    handleScroll() {
        if (!this.navbar) return;
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    },

    createScrollIndicator() {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(this.progressBar);
    },

    updateScrollIndicator() {
        if (!this.progressBar) return;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        this.progressBar.style.width = scrolled + "%";
    }
};
