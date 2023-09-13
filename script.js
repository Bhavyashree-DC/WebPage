document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

    }

    document.querySelector('.arrow-right').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector('.arrow-left').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});








window.addEventListener('scroll', function() {
    var bodyContainer = document.querySelector('.bodycontainer');
    var whiteLogo = document.querySelector('.white-logo');
    var originalLogo = document.querySelector('.logo-image');
    if (bodyContainer && whiteLogo && originalLogo) {
        if (window.scrollY > 0) {
            bodyContainer.classList.add('scrolled');
            whiteLogo.style.display = 'block';
            originalLogo.style.display = 'none'; 
        } else {
            bodyContainer.classList.remove('scrolled');
            whiteLogo.style.display = 'none'; 
            originalLogo.style.display = 'block'; 
        }
    }
});

