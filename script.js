// ONDIEGI EXPERIENCE v4.0

const OndiegiHUD = () => {
    const cursor = document.getElementById('cursor');
    const border = document.getElementById('cursor-border');

    document.addEventListener('mousemove', (e) => {
        // Dot follows instantly
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Border follows with a slight delay (Lag-Smooth)
        setTimeout(() => {
            border.style.left = e.clientX + 'px';
            border.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover Scaling
    document.querySelectorAll('a, .bento-card').forEach(link => {
        link.addEventListener('mouseenter', () => {
            border.style.width = '80px';
            border.style.height = '80px';
            border.style.borderColor = '#3b82f6';
        });
        link.addEventListener('mouseleave', () => {
            border.style.width = '40px';
            border.style.height = '40px';
            border.style.borderColor = 'rgba(255,255,255,0.2)';
        });
    });
};

const RevealSystem = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(100px)';
        el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
};

OndiegiHUD();
RevealSystem();