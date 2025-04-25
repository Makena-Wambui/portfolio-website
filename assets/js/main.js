const navMenu = document.getElementById("nav-menu"); // store the element with the id nav-menu

const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/* Style Switcher */
const styleSwitcher = document.getElementById("style-switcher");

const switcherToggle = document.getElementById("switcher-toggle");

const switcherClose = document.getElementById("switcher-close");

switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});

switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

/* Theme Colors */
const colors = document.querySelectorAll(".style-switcher-color");
colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);
  };
});

/* Theme Mode */

let currentTheme = "light";
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
  });
});

/* Services Swiper */
var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    /* when screen size is larger than 768px we will show 2 slides per view */
    768: {
      slidesPerView: 2,
    },
    /* when screen size is larger than 1208px we will show 3 slides per view */
    1208: {
      slidesPerView: 3,
    },
  },
});
