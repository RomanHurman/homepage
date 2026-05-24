document.addEventListener('DOMContentLoaded', function () {
    console.log('Resume page loaded successfully!');

    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });

    const fadeElements = document.querySelectorAll('.about, .projects, .work, .education, .goals, .certificates, .interests');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });

    const projectItems = document.querySelectorAll('.projects-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });

    const downloadBtn = document.querySelector('.download-cv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            console.log('Downloading CV...');
        });
    }

    const skillItems = document.querySelectorAll('.tech-skills-item, .soft-skills-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });

    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });
});

if (document.querySelector('.year')) {
    document.querySelector('.year').textContent = new Date().getFullYear();
}