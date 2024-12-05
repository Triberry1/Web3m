const hamBurger = document.querySelector(".HamBurger")
const menuSideBar = document.querySelector(".menu-sidebar")
const closeMenu = document.querySelector(".close-menu")


hamBurger.addEventListener("click", function() {
  menuSideBar.style.transform = "translate(0%)"
})

closeMenu.addEventListener("click", function() {
  menuSideBar.style.transform = "translate(-100%)"
})