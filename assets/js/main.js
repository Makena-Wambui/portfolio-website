const navMenu = document.getElementById("nav-menu"); // store the element with the id nav-menu

const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/* Mixitup Filter for Portfolio */
var mixer = mixitup("#work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* Active Project */
const linkWork = document.querySelectorAll(".work-item");

function activeProject() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeProject));

/* Resume */
const accordionItems = document.querySelectorAll(".resume-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".resume-header");

  const content = item.querySelector(".resume-content");

  const icon = item.querySelector(".resume-icon i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open");

    content.style.height = isOpen ? content.scrollHeight + "px" : 0;

    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line";

    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordion-open")
      ) {
        otherItem.querySelector(".resume-content").style.height = "0";
        otherItem.querySelector(".resume-icon i").classList = "ri-add-line";
        otherItem.classList.remove("accordion-open");
      }
    });
  });
});

/* Email JS */
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");
const message = document.getElementById("message");

const sendEmail = (e) => {
  e.preventDefault(); // prevent the default behavior of the form

  // Check if any of the fields are empty
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    message.classList.remove("color-first");
    message.classList.add("color-red");

    message.textContent = "Please fill in all fields";

    // Remove the error message after 3 seconds
    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_bazoz6h",
        "template_bnhi53j",
        "#contact-form",
        "hLz8l5JmoQ5qN6RPn"
      )
      .then(
        () => {
          message.classList.add("color-first");

          message.textContent = "Message sent successfully";

          // Remove the success message after 5 seconds
          setTimeout(() => {
            message.textContent = "";
          }, 5000);

          /* Clear the form fields */
          contactName.value = "";
          contactEmail.value = "";
          contactSubject.value = "";
          contactMessage.value = "";
        },
        (error) => {
          alert("OOPS! Something went wrong, please try again...", error);
        }
      );
  }
};

// Add event listener to the form
contactForm.addEventListener("submit", sendEmail);

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

/* Hide Menu Mobile */
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navToggle.classList.remove("animate-toggle");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Change header as you scroll */
const scrollHeader = () => {
  const header = document.getElementById("header");

  window.scrollY >= 20
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll("section[id]");

/* Active Link */
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      `.nav-menu a[href*=${sectionId}]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

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

/* Testimonials Swiper */
var servicesSwiper = new Swiper(".testimonials-swiper", {
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
