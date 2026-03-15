export const WebGLBackground = {
    init() {
        this.setupCanvas();
        this.createParticles();
        this.animate();
        console.log("WebGL/Canvas Background initialized.");
    },
    
    setupCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'webgl-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '0'; // Behind everything
        this.canvas.style.pointerEvents = 'none';
        
        // Insert right after body start
        document.body.insertBefore(this.canvas, document.body.firstChild);
        
        this.ctx = this.canvas.getContext('2d', { alpha: false });
        this.resize();
        window.addEventListener('resize', () => this.resize());
    },
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    
    createParticles() {
        this.particles = [];
        const count = window.innerWidth < 768 ? 30 : 70; // responsive count
        for(let i=0; i<count; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5
            });
        }
    },
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Draw background
        this.ctx.fillStyle = '#050505'; // Match --color-bg-base
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw particles and lines
        this.ctx.fillStyle = 'rgba(156, 131, 255, 0.5)';
        this.ctx.strokeStyle = 'rgba(156, 131, 255, 0.1)';
        
        for(let i=0; i<this.particles.length; i++) {
            const p = this.particles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            
            if(p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if(p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Connect nearby particles
            for(let j=i+1; j<this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if(dist < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }
    }
};
