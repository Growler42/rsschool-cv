"use strict";

const menuButton = document.querySelector('.mini-header')
const menu = document.querySelector('.burger-menu')
if (menuButton) {
  menuButton.addEventListener("click", function () {
    document.body.classList.toggle('_lock')
    menuButton.classList.toggle('_active')
    menu.classList.toggle('_active')
  })
}

const navLinks = document.querySelectorAll('.menu-link')
if (navLinks.length > 0) {
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const navLink = e.target

    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto)
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      })

      e.preventDefault();
    }

    if (menuButton.classList.contains('_active')) {
      document.body.classList.remove('_lock')
      menuButton.classList.remove('_active')
      menu.classList.remove('_active')
    }
  }
}
