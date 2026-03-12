/**
 * ONDIEGI ENTERPRISES - Core Site Engine
 * Features: Particle Physics, Custom Estimator, Scroll Observers,
 * Dynamic Service Injections, and Hardware-accelerated UI.
 */

const OndiegiEngine = (() => {
    // 1. STATE MANAGEMENT
    const state = {
        isNavActive: false,
        particles: [],
        services: [
            { id: 'auto', title: 'Automations', icon: 'zap', desc: 'Eliminate manual work with custom Python/GAS bots.', cost: 1500 },
            { id: 'web', title: 'Web Design', icon: 'layout', desc: 'High-performance, responsive corporate ecosystems.', cost: 2500 },
            { id: 'tech', title: 'Tech Support', icon: 'headphones', desc: 'Tier 2/3 remote infrastructure and network maintenance.', cost: 1200 },
            { id: 'int', title: 'Integration', icon: 'share-2', desc: 'Syncing ERP, CRM, and APIs seamlessly.', cost: 3000 }
        ],
        projectScale: 40,
        selectedServiceCost: 1500
    };

    // 2. PARTICLE SYSTEM CONFIG
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
            ctx.fill();
        }
    }

    const initParticles = () => {
        resize();
        state.particles = Array.from({ length: 120 }, () => new Particle());
        animate();
    };

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        state.particles.forEach(p => {
            p.update();
            p.draw();
            // Connect particles
            state.particles.forEach(p2 => {
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 100})`;
                    ctx.lineWidth = 0.2;
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(animate);
    };

    // 3. UI GENERATORS
    const renderServices = () => {
        const grid = document.getElementById('servicesGrid');
        grid.innerHTML = state.services.map(s => `
            <div class="group p-8 bg-slate-900/50 border border-white/5 rounded-[2rem] hover:bg-blue-600 transition-all duration-500 cursor-pointer overflow-hidden relative">
                <div class="absolute -right-4 -bottom-4 text-white/5 transform group-hover:scale-150 transition-transform duration-700">
                    <svg width="100" height="100" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <div class="text-blue-400 group-hover:text-white transition-colors uppercase font-black text-[10px]">${s.id}</div>
                </div>
                <h3 class="text-xl font-bold text-white mb-4">${s.title}</h3>
                <p class="text-sm text-slate-400 group-hover:text-blue-100 transition-colors leading-relaxed">
                    ${s.desc}
                </p>
            </div>
        `).join('');
    };

    const renderCodeHero = () => {
        const lines = [
            "Initializing Ondiegi_Core...",
            "Checking Automation Protocols",
            "API Handshake: SUCCESS",
            "Deploying Integration Microservices",
            "System Optimization Active"
        ];
        const container = document.getElementById('codeLines');
        lines.forEach((line, i) => {
            const el = document.createElement('div');
            el.className = "flex gap-4 font-mono text-xs opacity-0 transform translate-x-4 transition-all duration-1000";
            el.innerHTML = `<span class="text-blue-500">${i + 1}</span> <span class="text-slate-300">${line}</span>`;
            container.appendChild(el);
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateX(0)";
            }, i * 300);
        });
    };

    // 4. THE ESTIMATOR LOGIC
    const handleEstimator = () => {
        const serviceSelect = document.getElementById('estService');
        const scaleInput = document.getElementById('estScale');
        const scaleDisplay = document.getElementById('scaleDisplay');
        const priceDisplay = document.getElementById('priceDisplay');

        const update = () => {
            const selected = state.services.find(s => s.id === serviceSelect.value || s.title.toLowerCase().includes(serviceSelect.value));
            const costPerHr = selected ? selected.cost : 2000;
            const total = costPerHr * scaleInput.value;
            
            scaleDisplay.innerText = `${scaleInput.value} Hours / Month`;
            
            // Animate number count
            let current = parseInt(priceDisplay.innerText.replace(/\D/g,'')) || 0;
            const animatePrice = () => {
                if (current < total) {
                    current += Math.ceil((total - current) * 0.1);
                    priceDisplay.innerText = `Ksh ${current.toLocaleString()}`;
                    requestAnimationFrame(animatePrice);
                } else {
                    priceDisplay.innerText = `Ksh ${total.toLocaleString()}`;
                }
            };
            animatePrice();
        };

        serviceSelect.addEventListener('change', update);
        scaleInput.addEventListener('input', update);
        update();
    };

    // 5. OBSERVER PATTERN (SCROLL REVEALS)
    const initObservers = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section, .reveal-init').forEach(el => observer.observe(el));
    };

    const handleNavScroll = () => {
        const nav = document.getElementById('mainNav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                nav.classList.add('bg-slate-950/80', 'backdrop-blur-xl', 'py-2', 'border-white/5');
                nav.classList.remove('py-4', 'border-transparent');
            } else {
                nav.classList.remove('bg-slate-950/80', 'backdrop-blur-xl', 'py-2', 'border-white/5');
                nav.classList.add('py-4', 'border-transparent');
            }
        });
    };

    // 6. START THE ENGINE
    return {
        start: () => {
            initParticles();
            renderServices();
            renderCodeHero();
            handleEstimator();
            initObservers();
            handleNavScroll();
            window.addEventListener('resize', resize);
            console.log("Ondiegi Engine Online. All systems green.");
        }
    };
})();

// Execute
document.addEventListener('DOMContentLoaded', OndiegiEngine.start);