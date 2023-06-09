import "./scss/style.scss";

import "./modules/main";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
  timer(".header-timer", "2023-07-25");
});
