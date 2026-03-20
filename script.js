// Reveal On Scroll System
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1, // Reduced threshold for better trigger
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Custom Cursor Glow Logic
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Mobile Navbar Logic
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.borderRadius = '0';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.top = '1.5rem';
        navbar.style.width = '90%';
        navbar.style.borderRadius = '20px';
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Floating icons initial setup
const icons = document.querySelectorAll('.tech-icon');
icons.forEach((icon, i) => {
    icon.style.setProperty('--delay', `${i * 0.5}s`);
});

// Initialize icons
if (typeof window.lucide !== 'undefined') {
    window.lucide.createIcons();
}

