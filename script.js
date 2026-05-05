const countdown = () => {
    const eventDate = new Date("May 22, 2026 18:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    console.log(`Pozostało: ${days}d ${hours}h`);
};

const revealSections = () => {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    countdown();
    revealSections();
});