const menuButton = document.querySelector(".header-menu__button"),
  header = document.querySelector(".header"),
  menuLink = document.querySelectorAll(".menu-link"),
  video = document.querySelector("#video"),
  videoButton = document.querySelector(".video-btn"),
  checkBox = document.querySelectorAll(".checkbox"),
  faqItem = document.querySelectorAll(".faq-item"),
  buttonElementGoToTop = document.querySelector("#btn-top"),
  buyButton = document.querySelectorAll(".buy-button"),
  modal = document.querySelector("#modal"),
  modalTitle = document.querySelector(".modal-subtitle"),
  modalPrice = document.querySelector(".modal-total__price"),
  modalClose = document.querySelector(".modal-close"),
  overlay = document.querySelector(".overlay");

let isPlay = false;

const classes = {
  opened: "opened",
  hidden: "hidden",
  active: "active",
};

const checkBoxes = {
  requirements: ["minimum", "recommended"],
  versions: ["standard", "limited"],
};

const values = [
  {
    price: 19.99,
    title: "Standard Edition",
  },
  {
    price: 18.99,
    title: "Standard Edition",
  },
  {
    price: 29.99,
    title: "Deluxe Edition",
  },
  {
    price: 35.99,
    title: "Buy dualsense with a game",
  },
  {
    price: 21.99,
    title: "Standard Edition",
  },
  {
    price: 31.99,
    title: "Deluxe Edition",
  },
];

function toggleMenu() {
  header.classList.toggle(classes.opened);
}

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  if (!href && !href.startWith("#")) return;

  const section = href.slice(1);
  const top = document.getElementById(section)?.offsetTop || 0;
  window.scrollTo({ top: top, behavior: "smooth" });
}

function handleVideo({ target }) {
  const info = target.parentElement;
  isPlay = !isPlay;
  info.classList.toggle(classes.hidden, isPlay);
  target.innerText = isPlay ? "Pause" : "Play";
  isPlay ? video.play() : video.pause();
}
function handleCheckBox({ currentTarget: { checked, name } }) {
  const { active } = classes;
  const value = checkBoxes[name][Number(checked)];
  const list = document.getElementById(value);
  const tabs = document.querySelectorAll(`[data-${name}]`);
  const siblings = list.parentElement.children;

  for (const item of siblings) item.classList.remove(active);
  for (const tab of tabs) {
    tab.classList.remove(active);
    tab.dataset[name] === value && tab.classList.add(active);
  }

  list.classList.add(active);
  console.log(value);
}

function handleFaqItem({ currentTarget: target }) {
  target.classList.toggle(classes.opened);
  const isOpened = target.classList.contains(classes.opened);
  const height = target.querySelector("p").clientHeight;
  const content = target.querySelector(".faq-item__content");

  content.style.height = `${isOpened ? height : 0}px`;
}

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    buttonElementGoToTop.style.display = "block";
  } else {
    buttonElementGoToTop.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleByButton({ currentTarget: target }) {
  const { value } = target.dataset;

  if (!value) return;

  const { price, title } = values[value];
  modalTitle.innerText = title;
  modalPrice.innerText = `${price}$`;
  modal.classList.add("opened");
  overlay.classList.add("opened");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("opened");
  overlay.classList.remove("opened");
  document.body.style.overflow = "";
}

overlay.addEventListener("click", (event) => {
  if (event.currentTarget == overlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeModal();
  }
});

window.onscroll = scrollFunction;
menuButton.addEventListener("click", toggleMenu);
videoButton.addEventListener("click", handleVideo);
buttonElementGoToTop.addEventListener("click", topFunction);
menuLink.forEach((link) => link.addEventListener("click", scrollToSection));
checkBox.forEach((box) => box.addEventListener("click", handleCheckBox));
faqItem.forEach((item) => item.addEventListener("click", handleFaqItem));
buyButton.forEach((btn) => btn.addEventListener("click", handleByButton));
modalClose.addEventListener("click", closeModal);
