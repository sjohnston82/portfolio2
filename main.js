const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navBarLinkItems = document.getElementsByClassName("nav-item");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
