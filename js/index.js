window.addEventListener('DOMContentLoaded', function () {
  // Плавная прокрутка к якорю
  const anchors = document.querySelectorAll('.header__list a[href*="#"]')
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
    console.log(e.target)
    if (!e.target.classList.contains('header-menu__drop') && !e.target.classList.contains('header-menu__btn')) {
      drop.forEach(el => { el.classList.remove(('header-menu__drop--active')) })
    }
  });
  // Скрол
  // new SimpleBar(document.getElementById('myEl'));
})