const navMenu = document.getElementById("nav-menu"); // store the element with the id nav-menu

const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});
