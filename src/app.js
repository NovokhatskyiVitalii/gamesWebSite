import "./scss/style.scss";

import "./modules/main";
import "./modules/language";
import timer from "./modules/timer";
import "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  timer(".header-timer", "2023-07-25");
});
