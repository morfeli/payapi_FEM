const hamburgerBtn = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

hamburgerBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
