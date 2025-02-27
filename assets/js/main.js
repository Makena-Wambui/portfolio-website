const navMenu = document.getElementById("nav_menu");

const navToggle = document.getElementById("nav_toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show_menu");
  navToggle.classList.toggle("animate_toggle");
});
