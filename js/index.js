window.addEventListener('DOMContentLoaded', function () {

  // Плавная прокрутка к якорю хедер
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

  // Выпадающий список хедер(от преподавателя)
  // const button = document.querySelectorAll('.header-menu__btn');
  // const drop = document.querySelectorAll('.header-menu__drop')
  // button.forEach(el => {
  //   el.addEventListener('click', (e) => {
  //     drop.forEach(el => { el.classList.remove(('header-menu__drop--active')) })
  //     e.currentTarget.closest('li').querySelector('.header-menu__drop').classList.toggle('header-menu__drop--active');
  //   });
  // });
  // document.addEventListener('click', (e) => {
  //   if (!e.target.classList.contains('header-menu__drop') && !e.target.classList.contains('header-menu__btn')) {
  //     drop.forEach(el => { el.classList.remove(('header-menu__drop--active')) })
  //   }
  // });

  // Выпадающий список хедер(на основе пройденных уроков) 
  document.querySelectorAll('.header-menu__btn').forEach(function (drop) {
    drop.addEventListener('click', function (add) {
      add.target.classList.toggle('is-active')
    })
  });

  // Слайдер главный
  const swiper = new Swiper('.swiper-container', {
    loop: true, // зацикленность
  });

  // Слайдер галерея
  const swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 3, // сколько показывать
    slidesPerGroup: 3, // сколько проматывать слайдов за один клик
    slidesPerColumn: 2, // сколько слайдов в колонке
    spaceBetween: 50, //расстояние между слайдами
    pagination: { // Точки пагинации
      el: '.swiper-pagination1', // класс контейнера для пагинации
      // type: 'bullets', тип: точки
      type: 'fraction', // тип: цифры
      // clickable: true, возможность кликать по точкам
    },
    // slideToClickedSlide: true, переход к кликаемому слайду(слайд переходит в начало)
    // centeredSlides: true, ставит кликнутый слайд в центр
    navigation: { // стрелки навигации
      nextEl: '.swiper-button-next1', // класс навигации в предыдущий
      prevEl: '.swiper-button-prev1', // класс навигации в следующий
    },
  });

  // Слайдер издания
  const swiper2 = new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 17,
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });

  // Слайдер проекты
  const swiper3 = new Swiper('.swiper-container3', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  });

  //Селект галерея
  const element = document.querySelector('#gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    noResultsText: 'Ничего не найдено',
    position: 'bottom',
    itemSelectText: '',
  });

  //Аккордион каталог
  $(function () {
    $("#accordion1").accordion({
      collapsible: true,
      heightStyle: 'content'
    });
    $("#accordion2").accordion({
      collapsible: true,
      heightStyle: 'content'
    });
    $("#accordion3").accordion({
      collapsible: true,
      heightStyle: 'content'
    });
    $("#accordion4").accordion({
      collapsible: true,
      heightStyle: 'content'
    });
    $("#accordion5").accordion({
      collapsible: true,
      heightStyle: 'content'
    });
  });

  //Табы аккордионов каталог
  document.querySelectorAll('.accordion__tab').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__biography').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__biography--active')
      })
      document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tabContent) {
        tabContent.classList.add('catalog__biography--active')

        $('.accordion').accordion("refresh");
      })
    })
  })

  //Табы в аккордионе
  document.querySelectorAll('.lang__button').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__bottom').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__bottom--active')
      })
      document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tabContent) {
        tabContent.classList.add('catalog__bottom--active')

        $('.accordion').accordion("refresh");
      })
    })
  })

  // Доп. лист события
  $('#events__btn').click(function(){ $('#hidden1, #hidden2, #hidden3').show(); $('#events__btn').hide(); });
    
  //Карта контакты
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.762259, 37.646498],
      zoom: 14.4
    });
    var myPlacemark = new ymaps.Placemark([55.758450, 37.601072], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/contacts/geopoint.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
  }
  
  //Маскирование полей контакты
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)999-99-99"); 
  im.mask(selector);
  
  //Валидация форм контакты
  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10 
        },
      },
    },
  });
})