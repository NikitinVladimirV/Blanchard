window.addEventListener('DOMContentLoaded', function () {
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
  // Header__menu select
  const elements = document.querySelectorAll('.header-menu__select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      position: 'bottom',
      shouldSort: false,
    })
  })

  // var b = document.querySelector(".choices__list");
  // b.setAttribute("disabled", "disabled");
})