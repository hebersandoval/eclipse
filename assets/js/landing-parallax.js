// Countdown and parallax script for landing page
(function () {
    'use strict';

    const target = new Date('2026-03-31T23:59:59').getTime();

    function updateCountdown() {
        const now = Date.now();
        const diff = Math.max(0, target - now);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        daysEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
        hoursEl.textContent = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        minutesEl.textContent = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        secondsEl.textContent = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
    }

    function initParallax() {
        const hero = document.querySelector('.hero');
        const bg = document.querySelector('.hero-bg');
        const fog = document.querySelector('.fog');
        if (!hero || !bg || !fog) return;

        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) {
            // don't animate parallax
            bg.style.transform = 'translate3d(0,0,0)';
            fog.style.transform = 'translate3d(0,0,0)';
            return;
        }

        let mouseX = 0,
            mouseY = 0;
        let px = 0,
            py = 0;

        function onMove(e) {
            const rect = hero.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            mouseX = (e.clientX - cx) / rect.width;
            mouseY = (e.clientY - cy) / rect.height;
        }

        function animate() {
            px += (mouseX - px) * 0.08;
            py += (mouseY - py) * 0.08;

            const bgX = px * 30;
            const bgY = py * 30;
            bg.style.transform = `translate3d(${bgX}px, ${bgY}px, 0)`;

            const fogX = -px * 60;
            const fogY = -py * 60;
            fog.style.transform = `translate3d(${fogX}px, ${fogY}px, 0)`;

            requestAnimationFrame(animate);
        }

        window.addEventListener('mousemove', onMove);
        window.addEventListener(
            'touchmove',
            function (ev) {
                if (ev.touches && ev.touches[0]) onMove(ev.touches[0]);
            },
            { passive: true }
        );
        animate();
    }

    // Initialize after DOM is ready
    function ready() {
        updateCountdown();
        setInterval(updateCountdown, 1000);
        initParallax();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
    } else {
        ready();
    }
})();
