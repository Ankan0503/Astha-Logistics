const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".middle-section");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".middle-section a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.style.display = hamburger.classList.contains("active")
    ? "block"
    : "none";
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.style.display = "none";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.style.display = "none";
  });
});
