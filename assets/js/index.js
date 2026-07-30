// Phone number reveal — spam-resistant progressive enhancement
const phoneRevealModule = (() => {
    const PHONE_DIGITS = ['908', '517', '4393'];
    const PHONE_LABEL = '+1';
    const formatPhone = (area, prefix, line) => `(${area}) ${prefix}-${line}`;
    const FULL_NUMBER = formatPhone(...PHONE_DIGITS);
    const TEL_HREF = `tel:${PHONE_LABEL}${PHONE_DIGITS.join('')}`;

    const init = () => {
        const container = document.querySelector('.phone-reveal');
        if (!container) return;

        const btn = container.querySelector('.phone-reveal__btn');
        const masked = container.querySelector('.phone-reveal__masked');
        const full = container.querySelector('.phone-reveal__full');
        const link = container.querySelector('.phone-reveal__link');

        if (!btn || !masked || !full || !link) return;

        const reveal = () => {
            // Hide button but keep it in layout to prevent shift
            btn.style.visibility = 'hidden';
            // Fade out masked text, then hide (visibility preserves layout space)
            masked.style.opacity = '0';
            setTimeout(() => {
                masked.style.visibility = 'hidden';
            }, 250);
            masked.setAttribute('aria-hidden', 'true');
            // Populate and reveal full number
            link.textContent = FULL_NUMBER;
            link.href = TEL_HREF;
            full.removeAttribute('hidden');
            // Fade in the full number
            requestAnimationFrame(() => {
                full.style.opacity = '1';
            });
            // Update container label for screen readers
            container.setAttribute('aria-label', `Phone number: ${FULL_NUMBER}`);
            // Remove event listeners after first reveal
            btn.removeEventListener('click', reveal);
            btn.removeEventListener('keydown', handleKeydown);
        };

        const handleKeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                reveal();
            }
        };

        btn.addEventListener('click', reveal);
        btn.addEventListener('keydown', handleKeydown);
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
    phoneRevealModule.init();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Collapsible functionality
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((item) => {
    item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
    });
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('back-to-top--visible');
        } else {
            backToTop.classList.remove('back-to-top--visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}
