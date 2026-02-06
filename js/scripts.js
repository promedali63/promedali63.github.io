/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.onload = function() {
  // Сбрасываем прокрутку
  window.scrollTo(0, 0);

  // Глобальная анимация элементов
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

  document.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation();
};
