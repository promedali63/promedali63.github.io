/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
// ---- Начало кода глобальной анимации ----

// Берём все элементы на странице
const allElements = document.querySelectorAll('body *');

// Добавляем всем элементам класс animate-on-scroll
allElements.forEach(el => {
  // исключаем скрипты и пустые элементы
  if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && el.offsetHeight > 0) {
    el.classList.add('animate-on-scroll');
  }
});

// Функция проверяет, виден ли элемент на экране
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

// Показываем элемент (добавляем класс visible)
const displayScrollElement = (el) => {
  el.classList.add('visible');
};

// Обработка прокрутки
const handleScrollAnimation = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    if (elementInView(el, 50)) { // элемент появится за 50px до видимой границы
      displayScrollElement(el);
    }
  });
};

// Навешиваем обработчик на скролл
document.addEventListener('scroll', handleScrollAnimation);

// Чтобы элементы видимые с начала сразу показались
handleScrollAnimation();

// ---- Конец кода глобальной анимации ----

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
    // Collapse responsive navbar when toggler is visible
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

});
