import Swiper, { Navigation } from "swiper";
import "swiper/css/bundle";
Swiper.use([Navigation]);

function slider() {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    initialSlide: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export default slider;
