document.addEventListener('DOMContentLoaded', function() { //Загружается вся страница
    document.querySelectorAll('.lang__button').forEach(function(tabsBtn) { //Найти все .lang__button и каждому сделать функцию tabsBtn
        tabsBtn.addEventListener('click', function(event) { //у tabsBtn обработать событие click, после клика вызвать функцию event
            const path = event.currentTarget.dataset.path // ! path значит элемент в который был клик, его дата-атрибут path
            console.log(path)

            document.querySelectorAll('.catalog__bottom').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__bottom--active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__bottom--active')
        })
    })

    
  //Табы аккордионов каталог
  // document.querySelectorAll('.accordion__tab').forEach(function (tabsBtn) {
  //   tabsBtn.addEventListener('click', function (event) {
  //     const path = event.currentTarget.dataset.path
  //     document.querySelectorAll('.catalog__biography').forEach(function (tabContent) {
  //       tabContent.classList.remove('catalog__biography--active')
  //     })
  //     document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tabContent) {
  //       tabContent.classList.add('catalog__biography--active')
  //     })
  //   })
  // })

  //Табы в аккордионе
  // document.querySelectorAll('.lang__button').forEach(function (tabsBtn) {
  //   tabsBtn.addEventListener('click', function (event) {
  //     const path = event.currentTarget.dataset.path
  //     document.querySelectorAll('.catalog__bottom').forEach(function (tabContent) {
  //       tabContent.classList.remove('catalog__bottom--active')
  //     })
  //     document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tabContent) {
  //       tabContent.classList.add('catalog__bottom--active')
  //     })
  //   })
  // })
})