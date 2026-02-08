// Intersection Observer for Smooth Reveal
const observerOptions = { threshold: 0.15 };

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    // Add initial state via JS to ensure it works even if CSS fails
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
    revealOnScroll.observe(section);
});

// Update styles when visible
const style = document.createElement('style');
style.innerHTML = `
    .is-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Smooth Scroll for Nav
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
