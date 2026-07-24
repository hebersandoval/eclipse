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
