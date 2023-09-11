/* ========================= Site Navigation ========================== */
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll(".section");
  const navToggler = document.querySelector(".nav-toggler");
  const navbarBrand = document.querySelector(".navbar-brand");
  const aboutMeBtn = document.querySelector(".about-me");
  const contactMeBtn = document.querySelector(".contact-me");

  // Function to remove the "active" class from all sections
  function removeAllActive() {
    sections.forEach((section) => {
      section.classList.remove("active");
    });
  }

  // Function to remove the "back-section" class from all sections
  function removeAllBackSection() {
    sections.forEach((section) => {
      section.classList.remove("back-section");
    });
  }

  // Function to add the "active" class to the clicked section
  function addActive(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.classList.add("active");
    }
  }

  // Function to add the "back-section" class to the current active section
  function addBackSection() {
    const currentActiveSection = document.querySelector(".section.active");
    if (currentActiveSection) {
      currentActiveSection.classList.add("back-section");
    }
  }

  // Function to close the hamburger menu
  function closeMenu() {
    navToggler.classList.remove("open");
  }

  // Add click event listeners to the navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      removeAllBackSection();
      addBackSection();
      removeAllActive();

      const targetSectionId = link.getAttribute("href");
      addActive(targetSectionId);

      navToggler.click();
    });
  });

  // Add click event listener to the navbar-brand
  navbarBrand.addEventListener("click", function (e) {
    e.preventDefault();
    removeAllBackSection();
    addBackSection();
    removeAllActive();

    const defaultSectionId = "#home";
    addActive(defaultSectionId);

    if (navToggler.classList.contains("open")) {
      navToggler.click();
    }
  });

  // Add click event listener to the about-me button
  aboutMeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    removeAllBackSection();
    addBackSection();
    removeAllActive();

    const defaultSectionId = "#about";
    addActive(defaultSectionId);

    if (navToggler.classList.contains("open")) {
      navToggler.click();
    }
  });

  // Add click event listener to the about-me button
  contactMeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    removeAllBackSection();
    addBackSection();
    removeAllActive();

    const defaultSectionId = "#contact";
    addActive(defaultSectionId);

    if (navToggler.classList.contains("open")) {
      navToggler.click();
    }
  });

  // Add click event listener to the nav-toggler element
  navToggler.addEventListener("click", function () {
    navToggler.classList.toggle("open");
  });

  // Initialize the first section as "active"
  if (sections.length > 0) {
    sections[0].classList.add("active");
  }
});
/* ========================= Site Navigation ========================== */

/* ========================= Typing Animation ========================= */
var typed = new Typed(".typing", {
  strings: ["", "Full-Stack Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/* ========================= Typing Animation ========================= */
