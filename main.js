const menuButton = document.querySelector("#menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector("#close-btn");
const links = document.querySelectorAll("a");

// Toggle Mobile Menu

menuButton.addEventListener("click", () => {
  //Open mobile menu
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    menuButton.classList.add("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
});

//Hide Mobile Menu
closeButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  menuButton.classList.remove("hidden");
});

// Hide mobile menu when link is clicked
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileMenu.classList.add("hidden");
    console.log("click");
  });
});

//Toggle Navbar visibility on scroll

let lastScrollTop;

navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
