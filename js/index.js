window.addEventListener('DOMContentLoaded', function () {
  // Плавная прокрутка к якорю
  const anchors = document.querySelectorAll('.header__list a, .primary__text a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  // Выпадающий список
  const button = document.querySelectorAll('.header-menu__btn');
  const drop = document.querySelectorAll('.header-menu__drop')

  button.forEach(el => {
    el.addEventListener('click', (e) => {
      drop.forEach(el => { el.classList.remove(('header-menu__drop--active')) })
      e.currentTarget.closest('li').querySelector('.header-menu__drop').classList.toggle('header-menu__drop--active');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('header-menu__drop') && !e.target.classList.contains('header-menu__btn')) {
      drop.forEach(el => { el.classList.remove(('header-menu__drop--active')) })
    }
  });
  // Скрол
  // new SimpleBar(document.getElementById('myEl'));

  // Слайдер
  const swiper = new Swiper('.swiper-container', {
    loop: true,
  });

  const swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 3, // сколько показывать
    spaceBetween: 10, //расстояние между слайдами
    pagination: { // Точки пагинации
      el: '.swiper-pagination1', // класс контейнера для точек
      // type: 'bullets', тип: точки
      type: 'fraction', // тип: цифры
      clickable: true, // возможность кликать по точкам
    },

    slideToClickedSlide: true, // переход к кликаемому слайду(слайд переходит в начало)

    centeredSlides: true, // ставит кликнутый слайд в центр

    loop: true, // зацикленность

    navigation: { // стрелки навигации
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },

    // slidesPerGroup: 2,  сколько проматывать слайдов за один клик


  });

  //Селект
  const element = document.querySelector('#gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    noResultsText: 'Ничего не найдено',
    position: 'bottom',
    itemSelectText: '',
  });

})