/* ==========================================================================
   Conflo Coming Soon Interactive Handlers (Light Theme)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SNEAK PEEK TAB SWITCHER ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            // Toggle buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Toggle panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetTabId) {
                    pane.classList.add('active');
                }
            });
        });
    });


    // --- 2. CANVAS PARTICLE FLOW BACKGROUND (LIGHT THEME) ---
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let particleCount = 45;

        // Resize Canvas
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Adjust particle count for smaller screens
            if (window.innerWidth < 768) {
                particleCount = 20;
            } else {
                particleCount = 45;
            }
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1; // 1px to 3px
                this.speedX = (Math.random() - 0.5) * 0.2; // extremely slow moving
                this.speedY = (Math.random() - 0.5) * 0.2;
                // Green to Cyan subtle color variations
                const colorHue = Math.random() > 0.5 ? 165 : 180;
                const saturation = 70 + Math.floor(Math.random() * 20);
                const lightness = 35 + Math.floor(Math.random() * 10); // slightly darker for light background visibility
                this.alpha = 0.05 + Math.random() * 0.15; // low opacity for background subtlety
                this.color = `hsla(${colorHue}, ${saturation}%, ${lightness}%, ${this.alpha})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
                if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        // Initialize particles
        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        initParticles();

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Redraw glow nodes slowly
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw subtle lines connecting nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        const alpha = (1 - (dist / 150)) * 0.04; // maximum 0.04 opacity
                        ctx.strokeStyle = `rgba(0, 168, 132, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();
    }
});
