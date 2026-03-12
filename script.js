/** * ONDIEGI ENTERPRISES - CORE SYSTEM v2.0
 * HIGH-END ENTERPRISE ARCHITECTURE 
 */

const OndiegiApp = (() => {
    // 1. SYSTEM CONFIGURATION
    const config = {
        themeColor: '#3b82f6',
        services: [
            { id: '01', title: 'Workflows', category: 'Automation', size: 'md:col-span-2 md:row-span-2', icon: '⚡', desc: 'Custom Python & Node.js bots that handle Ksh 10M+ daily transactions.' },
            { id: '02', title: 'UI/UX', category: 'Design', size: 'md:col-span-2', icon: '🎨', desc: 'High-conversion, glassmorphic interfaces for fintech & logistics.' },
            { id: '03', title: 'Support', category: 'Infrastructure', size: 'md:col-span-1', icon: '🛡️', desc: '24/7 Tier 3 technical lifelines for distributed teams.' },
            { id: '04', title: 'API Sync', category: 'Integration', size: 'md:col-span-1', icon: '🔗', desc: 'Seamless ERP-to-Cloud handshakes.' }
        ],
        terminalMessages: [
            "> Initializing Discovery Audit...",
            "> Mapping legacy system architecture...",
            "> Identifying automation bottlenecks...",
            "> Protocol: Query-First coding initiated.",
            "> Analyzing data flow scalability...",
            "> ONDIEGI SYSTEM ONLINE: Waiting for inquiry."
        ]
    };

    // 2. CANVAS AMBIENT ENGINE
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let blobs = [];

    class AmbientBlob {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * 400 + 200;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.03)' : 'rgba(168, 85, 247, 0.03)';
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < -200 || this.x > window.innerWidth + 200) this.vx *= -1;
            if (this.y < -200 || this.y > window.innerHeight + 200) this.vy *= -1;
        }
        draw() {
            const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            grad.addColorStop(0, this.color);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const initCanvas = () => {
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        blobs = Array.from({ length: 8 }, () => new AmbientBlob());
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            blobs.forEach(b => { b.update(); b.draw(); });
            requestAnimationFrame(animate);
        };
        animate();
    };

    // 3. DYNAMIC BENTO GRID RENDERER
    const renderBento = () => {
        const container = document.getElementById('bento-container');
        container.innerHTML = config.services.map((s, i) => `
            <div class="bento-card glass p-8 rounded-[2.5rem] ${s.size} group hover:border-blue-500/50 relative overflow-hidden flex flex-col justify-between opacity-0 translate-y-20" data-delay="${i * 100}">
                <div class="absolute -right-10 -top-10 text-9xl opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 rotate-12 group-hover:rotate-0">
                    ${s.icon}
                </div>
                <div class="relative z-10">
                    <span class="font-mono text-[10px] text-blue-500 tracking-[0.4em] uppercase mb-2 block">${s.category}</span>
                    <h3 class="text-3xl font-black text-white uppercase tracking-tighter mb-4">${s.title}</h3>
                </div>
                <p class="relative z-10 text-slate-500 group-hover:text-slate-300 transition-colors text-sm leading-relaxed max-w-[250px]">
                    ${s.desc}
                </p>
                <div class="mt-8 flex justify-between items-center relative z-10">
                    <div class="text-xs font-mono text-blue-400">#${s.id}</div>
                    <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">→</div>
                </div>
            </div>
        `).join('');
    };

    // 4. TERMINAL TYPING ENGINE
    const initTerminal = () => {
        const target = document.getElementById('terminal-text');
        let msgIndex = 0;
        let charIndex = 0;

        const type = () => {
            if (msgIndex < config.terminalMessages.length) {
                const currentMsg = config.terminalMessages[msgIndex];
                if (charIndex < currentMsg.length) {
                    target.innerHTML += currentMsg.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 30);
                } else {
                    target.innerHTML += '<br>';
                    msgIndex++;
                    charIndex = 0;
                    setTimeout(type, 1000);
                }
            }
        };
        type();
    };

    // 5. INTERSECTION OBSERVERS (Framer-style)
    const initScrollAnims = () => {
        const options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.remove('opacity-0', 'translate-y-20', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }, delay);
                }
            });
        }, options);

        // Hero Anims
        const h1 = document.getElementById('hero-main');
        const h2 = document.getElementById('hero-sub');
        observer.observe(h1);
        observer.observe(h2);

        // Bento Anims
        document.querySelectorAll('.bento-card').forEach(card => observer.observe(card));
    };

    

    // 6. NAVIGATION & MOBILE LOGIC
    const initNav = () => {
        const nav = document.getElementById('navbar');
        const menuBtn = document.getElementById('menu-toggle');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('glass', 'py-4', 'mt-4', 'mx-6', 'rounded-3xl', 'max-w-7xl', 'left-1/2', '-translate-x-1/2');
                nav.classList.remove('py-8', 'w-full');
            } else {
                nav.classList.remove('glass', 'py-4', 'mt-4', 'mx-6', 'rounded-3xl', 'max-w-7xl', 'left-1/2', '-translate-x-1/2');
                nav.classList.add('py-8', 'w-full');
            }
        });

        menuBtn.addEventListener('click', () => {
            alert('Enterprise System Menu coming soon. Mobile architecture optimized.');
        });
    };

    return {
        launch: () => {
            console.log("%cONDIEGI_SYSTEM_BOOT: SUCCESS", "color: #3b82f6; font-weight: bold;");
            initCanvas();
            renderBento();
            initNav();
            setTimeout(() => {
                initScrollAnims();
                initTerminal();
            }, 100);
        }
    };
})();

// BOOT ENGINE
document.addEventListener('DOMContentLoaded', OndiegiApp.launch);