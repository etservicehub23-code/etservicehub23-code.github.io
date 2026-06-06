// AstroBot AX-7 Client Script

/**
 * Lightweight DOM manipulation for initial visual feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    if (header) {
        // Simple fade-in effect on load to enhance perceived polish.
        header.style.opacity = 0;
        setTimeout(() => {
            header.style.transition = 'opacity 1s ease-out';
            header.style.opacity = 1;
        }, 50);
    }

    // Optional: Simple scroll observer for subtle effect (Placeholder)
    const sections = document.querySelectorAll('.content-section');

    if (!('IntersectionObserver' in window)) {
        sections.forEach((section) => {
            section.style.opacity = '1';
            section.style.transform = 'none';
        });
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { rootMargin: '0px', threshold: 0.1 });

    sections.forEach((section, index) => {
        // Apply initial hidden state for smooth scroll reveal on sections below the header
        if (index > 0) {
             section.style.opacity = '0';
             section.style.transform = 'translateY(20px)';
             setTimeout(() => section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out', 50);
             observer.observe(section);
        }
    });
});
