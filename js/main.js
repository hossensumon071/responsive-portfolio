
const menuToggler = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".side-bar");

menuToggler.addEventListener('click', function() {
  sidebar.classList.toggle('active')
})