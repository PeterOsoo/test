/**
 * ONDIEGI ENTERPRISES - CORE ENGINE v3.0
 */

const OndiegiCore = (() => {
    
    const initScroll = () => {
        const horizontal = document.getElementById('horizontal-scroll');
        const wrapper = document.querySelector('.horizontal-wrapper');
        
        window.addEventListener('scroll', () => {
            const offset = wrapper.offsetTop;
            const scrollDist = window.pageYOffset;
            
            // Horizontal Scroll Math
            if (scrollDist > offset && scrollDist < offset + (window.innerHeight * 2)) {
                const percentage = ((scrollDist - offset) / (window.innerHeight * 2)) * 100;
                horizontal.style.transform = `translateX(-${percentage}%)`;
            }

            // Hero Parallax & Massive Text Weight Shift
            const heroTitle = document.getElementById('title-1');
            const scrollVal = window.scrollY;
            heroTitle.style.transform = `translateX(${scrollVal * 0.2}px)`;
            document.getElementById('title-2').style.transform = `translateX(-${scrollVal * 0.3}px)`;
        });
    };

    const initCursor = () => {
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Magnetic effect on links
        document.querySelectorAll('.nav-link, .wa-bridge').forEach(link => {
            link.addEventListener('mousemove', (e) => {
                const rect = link.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            link.addEventListener('mouseleave', () => {
                link.style.transform = `translate(0px, 0px)`;
            });
        });
    };

    const initObservers = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.bento-item').forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(50px)";
            el.style.transition = "all 1s cubic-bezier(0.19, 1, 0.22, 1)";
            observer.observe(el);
        });
    };

    return {
        init: () => {
            initScroll();
            initCursor();
            initObservers();
            console.log("ONDIEGI CORE v3.0: High-End Mode Engaged.");
        }
    }
})();

document.addEventListener('DOMContentLoaded', OndiegiCore.init);