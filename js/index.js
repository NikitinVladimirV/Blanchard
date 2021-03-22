window.addEventListener('DOMContentLoaded', function () {
  const anchors = document.querySelectorAll('.header-nav__link, .projects__link, .primary__button')
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
  const swiper = new Swiper('.swiper-container', {
    loop: true,
  });
  const swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination1',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });
  const swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });
  const swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  });
  const element = document.querySelector('#gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    noResultsText: 'Ничего не найдено',
    position: 'bottom',
    itemSelectText: '',
  });
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
  document.querySelectorAll('.accordion__tab').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__bottom--active .catalog__biography').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__biography--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__biography--active')
    })
  })
  document.querySelectorAll('.lang__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__bottom').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__bottom--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__bottom--active')
    })
  })
  $('#events__btn').click(function(){ $('#hidden1, #hidden2, #hidden3').show(); $('#events__btn').hide(); });
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
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)999-99-99"); 
  im.mask(selector);
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