const hamburger = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("openDrawer");

  if (mobileNav.classList.contains("openDrawer")) {
    hamburger.innerHTML = "close";
  } else {
    hamburger.innerHTML = "menu";
  }
});
