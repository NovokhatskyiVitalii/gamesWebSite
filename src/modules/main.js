const menuButton = document.querySelector(".header-menu__button"),
  header = document.querySelector(".header"),
  menuLink = document.querySelectorAll(".menu-link");

const classes = {
  opened: "opened",
};

const toggleMenu = () => header.classList.toggle(classes.opened);
const scrollToSection = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  if (!href && !href.startWith("#")) return;

  const section = href.slice(1);
  const top = document.getElementById(section)?.offsetTop || 0;
  window.scrollTo({ top: top, behavior: "smooth" });
};

menuButton.addEventListener("click", toggleMenu);
menuLink.forEach((link) => link.addEventListener("click", scrollToSection));
