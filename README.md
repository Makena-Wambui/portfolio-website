# Personal Portfolio Website 🌐

A responsive and interactive personal portfolio website to showcase my projects, skills, and work categories — including design, development, and photography. Built using HTML, CSS, and JavaScript with filtering powered by the [Mixitup](https://www.kunkalabs.com/mixitup/) library.

## 🚀 Features

- 🔍 Project filtering using Mixitup (All, Development, Design, Photography)
- 🎨 Theme switcher (light/dark mode)
- 🧩 Category filters with animated transitions
- 📱 Responsive layout for desktop, tablet, and mobile
- 🧭 Hamburger toggle
- 🎯 Built-in Swiper slider for services section
- 🎨 Customizable theme colors via the style switcher

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — Flexbox, Grid, custom properties (variables)
- **JavaScript (ES6+)** — DOM manipulation, event handling
- **Mixitup** — Project filtering and animation
- **Swiper.js** — Services carousel slider

---

## 📁 Folder Structure

├── assets/ │ ├── images/ # All image files used across sections │ └── css/ # Stylesheets │ └── style.css # Main CSS ├── js/ │ └── main.js # Main JavaScript logic ├── index.html # Landing page └── README.md

---

## 🧩 How It Works

### 🔗 Filtering Projects

Using Mixitup, each project card is tagged with a category class (`.design`, `.development`, `.photography`). The filter buttons use `data-filter` attributes to match and show/hide projects dynamically.

### 🎛️ Style Switcher

Toggle different hues and light/dark mode using the color palette and theme switcher.

---

## 🧪 Getting Started Locally

1. Clone this repo:

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git

   ```

2. Open index.html in a browser.

3. No build tools or dependencies required — pure HTML/CSS/JS.

✨ Customization Tips

- Replace placeholder project images (assets/images/projectX.jpg) with your own.

- Update the work-title, work-description, and work-category in HTML to reflect your actual projects.

- Add real links to project demos or GitHub repos in the anchor tags.

## 📸 Preview

You can preview a live version here:  
**🔗 [Live Demo](https://aliciam-portfolio.netlify.app/)**

📌 To-Do (Optional Enhancements)

- Integrate backend (e.g., Firebase or Node.js) to store contact submissions

- Add animation on scroll using AOS or GSAP

- Add unit tests for JS functions (e.g., toggles)

🧑‍💻 Author
Alicia Makena
