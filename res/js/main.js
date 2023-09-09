const sectionsList = document.querySelectorAll(".section");
const totalSections = sectionsList.length;

const navTogglerBtn = document.querySelector(".nav-toggler");
const navigationBar = document.querySelector("nav");

navTogglerBtn.addEventListener("click", () => {
  navSectionTogglerButton();
});

function navSectionTogglerButton() {
  navigationBar.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSections; i++) {
    sectionsList[i].classList.toggle("open");
  }
}
