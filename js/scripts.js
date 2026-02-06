/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
/*!
* Start Bootstrap - Agency v7.0.12
* Авторские права: Start Bootstrap
*/

// Ждём полной загрузки страницы, чтобы все элементы были готовы
window.onload = function() {

    // ----------------------
    // СБРОС ПРОКРУТКИ ВВЕРХ
    // ----------------------
    window.scrollTo(0, 0);

    // ----------------------
    // Navbar shrink function
    // ----------------------
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Запускаем сразу
    navbarShrink();
    // Событие прокрутки для navbar
    document.addEventListener('scroll', navbarShrink);

    // ----------------------
    // Bootstrap ScrollSpy
    // ----------------------
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // ----------------------
    // Collapse responsive navbar when toggler is visible
    // ----------------------
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ----------------------
    // ГЛОБАЛЬНАЯ АНИМАЦИЯ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ
    // ----------------------
    const allElements = document.querySelectorAll('body *');
    allElements.forEach(el => {
        if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && el.offsetHeight > 0) {
            el.classList.add('animate-on-scroll');
        }
    });

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= window.innerHeight - offset;
    };

    const displayScrollElement = (el) => el.classList.add('visible');

    const handleScrollAnimation = () => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => {
            if (elementInView(el, 50)) {
                displayScrollElement(el);
            }
        });
    };

    // Событие прокрутки
    document.addEventListener('scroll', handleScrollAnimation);
    // Запуск сразу для элементов, видимых с начала
    handleScrollAnimation();
};
