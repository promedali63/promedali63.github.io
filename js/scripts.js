/*!
* Start Bootstrap - Agency v7.0.12
* Авторские права: Start Bootstrap
*/

// Ждём полной загрузки страницы
window.onload = function() {
    // Сбрасываем прокрутку (если нужно)
    setTimeout(() => window.scrollTo(0,0), 10);

    // Глобальная анимация
    const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, section, div');
    allElements.forEach(el => {
        if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && el.offsetHeight > 0) {
            el.classList.add('animate-on-scroll');
        }
    });

    const elementInView = (el, offset = 0) => el.getBoundingClientRect().top <= window.innerHeight - offset;

    const displayScrollElement = (el) => {
        // Используем requestAnimationFrame, чтобы transition точно сработал
        requestAnimationFrame(() => el.classList.add('visible'));
    };

    const handleScrollAnimation = () => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => {
            if (elementInView(el, 50)) {
                displayScrollElement(el);
            }
        });
    };

    document.addEventListener('scroll', handleScrollAnimation);

    // Запуск анимации сразу, с небольшой задержкой
    setTimeout(handleScrollAnimation, 50);
};
