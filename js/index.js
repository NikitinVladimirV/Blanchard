window.addEventListener('DOMContentLoaded', function () {
  // Smooth Scroll
  const anchors = document.querySelectorAll('.header-nav__link, .projects__link, .primary__button, .accordion__btn, .accordion__tab--active')
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

  // Header drop
  const button = document.querySelectorAll('.header-menu__btn');
  button.forEach(el => {
    el.addEventListener('click', (e) => {
      button.forEach(el => { el.classList.remove(('header-menu__btn--active')) })
      e.currentTarget.closest('li').querySelector('.header-menu__btn').classList.toggle('header-menu__btn--active');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('header-menu__btn') && !e.target.classList.contains('header-menu__btn')) {
      button.forEach(el => { el.classList.remove(('header-menu__btn--active')) })
    }
  });

  // Burger
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('burger--open')
    document.querySelector('.header__nav').classList.toggle('header__nav--hidden')
    document.querySelector('.header__enter').classList.toggle('header__enter--hidden')
  })

  // Swiper main
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    speed: 4000,
    autoplay: {
      delay: 2000,
    },
  });

  // Swiper gallery
  const swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 1,
    spaceBetween: 5,
    pagination: {
      el: '.swiper-pagination1',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },
      1210: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        spaceBetween: 50,
      }
    }
  });

  // Swiper events
  const slider = document.querySelector('.swiper-container4');
  let mySwiper;
  function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.events__pag',
          type: 'bullets',
          clicable: true,
        },
        loop: true,
        slideClass: 'events__item',
      });
      slider.dataset.mobile = 'true';
    }
    if (window.innerWidth > 767) {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-container-initialized')) {
        mySwiper.destroy();
      }
    }
  }
  mobileSlider();
  window.addEventListener('resize', () => {
    mobileSlider();
  })

  // Swiper publications
  const slider2 = document.querySelector('.swiper-container2');
  let mySwiper2;
  function desktopSlider() {
    if (window.innerWidth >= 768 && slider2.dataset.desktop == 'false') {
      mySwiper2 = new Swiper(slider2, {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34,
        pagination: {
          el: '.swiper-pagination2',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 49,
          },
          1210: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
          }
        }
      });
      slider2.dataset.desktop = 'true';
    }
    if (window.innerWidth < 767) {
      slider2.dataset.desktop = 'false';
      if (slider2.classList.contains('swiper-container-initialized')) {
        mySwiper2.destroy();
      }
    }
  }
  desktopSlider();
  window.addEventListener('resize', () => {
    desktopSlider();
  })

  // Swiper project
  const swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1210: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  });

  // Gallery select
  const element = document.querySelector('#gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    noResultsText: 'Ничего не найдено',
    position: 'bottom',
    itemSelectText: '',
  });

  // Catalog accordions
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

  // Tab accordions
  document.querySelectorAll('.lang__button').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.lang__button').forEach(function (tabContent) {
        tabContent.classList.remove('lang__button--active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('lang__button--active')
      document.querySelectorAll('.catalog__bottom').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__bottom--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__bottom--active')

      $('.accordion').accordion("refresh");
    })
  })

  // Tab in accordion
  document.querySelectorAll('.accordion__tab').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__bottom--active .accordion__tab--active').forEach(function (tabContent) {
        tabContent.classList.remove('accordion__tab--active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('accordion__tab--active')
      document.querySelectorAll('.catalog__bottom--active .catalog__biography').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__biography--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__biography--active')

      $('.accordion').accordion("refresh");
    })
  })

  // Events__picture
  document.querySelector('.events__button').addEventListener('click', function () {
      document.querySelectorAll('.events__item').forEach(function (visible) {
        visible.classList.add('visible')
      })
      document.querySelector('.events__button').classList.add('events__hidden')
  })


  // Publications__category
  document.querySelector('.publications-category__title').addEventListener('click', function () {
    document.querySelector('.publications-category__checkbox').classList.toggle('publications-category__checkbox--open')
  });
  document.querySelectorAll('.publications-category__label').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.target.classList.toggle('publications-category__span--checked')
    })
  })

  // Map
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.761259, 37.635498],
      zoom: 14.4,
    });
    var myPlacemark = new ymaps.Placemark([55.758450, 37.601072], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts/geopoint.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
  }

  // Mask, validation and sent form
  let selector = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);
  let validateForms = function (selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form) {
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
              document.querySelector('.contacts__modal').classList.add('contacts__modal--visible')
              document.querySelector('.modal__window').classList.add('modal__window--visible')
              document.querySelector('.contacts__modal').addEventListener('click', function () {
                document.querySelector('.contacts__modal').classList.remove('contacts__modal--visible')
                document.querySelector('.modal__window').classList.remove('modal__window--visible')
              })
            }
          }
        }
        xhr.open('POST', '../mail.php', true);
        xhr.send(formData);
        form.reset();
      }
    });
  }
  validateForms('.form', { email: { required: true, email: true }, tel: { required: true } }, '.thanks-popup', 'send goal');

  // Gallery__modal
  const btns = document.querySelectorAll('.card');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modals = document.querySelectorAll('.modal__artist');
  const cross = document.querySelectorAll('.modal__cross')
  const body = document.querySelector('.body');
  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
      modals.forEach((el) => {
        el.classList.remove('modal__artist--visible');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('modal__artist--visible');
      modalOverlay.classList.add('modal-overlay--visible');
      body.classList.add('overflow');
    });
  });
  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      body.classList.remove('overflow');
      modals.forEach((el) => {
        el.classList.remove('modal__artist--visible');
      });
    };
  });
  cross.forEach((el) => {
    el.addEventListener('click', (e) => {
      modalOverlay.classList.remove('modal-overlay--visible');
      body.classList.remove('overflow');
      modals.forEach((el) => {
        el.classList.remove('modal__artist--visible');
      });
    });
  })

  // Header search
  document.querySelector('.header-search__btn').addEventListener('focus', function () {
    document.querySelector('.header__search').classList.add('header__search--active')
    document.querySelector('.header-search__btn').classList.add('header-search__btn--active')
  });
  document.querySelector('.header-search__btn').addEventListener('click', function () {
    document.querySelector('.header__search').classList.toggle('header__search--active')
    document.querySelector('.header-search__btn').classList.toggle('header-search__btn--active')
  });

  // Where focus
  window.addEventListener('focusin', event => console.log(new Date, event.target));

  // Smooth scroll catalog
  let artistNameBtn = document.querySelectorAll('.accordion__tab'),
  infoHeading = document.querySelectorAll('.biography__name');

  for (let item of artistNameBtn) {
    item.addEventListener('click', function (e) {
      artistNameBtn.forEach(el => el.classList.remove('active'));

      infoHeading.forEach(el => {
        el.parentElement.style.display = "none";

        let person = el.innerText;
        if (person === e.currentTarget.innerText) {
          el.parentElement.style.display = "block";

          item.classList.add('active');
        }

        if (window.innerWidth < 1024) {
          el.parentElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
})
