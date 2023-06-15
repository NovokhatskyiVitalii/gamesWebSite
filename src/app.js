import "./scss/style.scss";

import "./modules/main";
import "./modules/language";
import timer from "./modules/timer";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  timer(".header-timer", "2023-07-25");
  slider();
});
