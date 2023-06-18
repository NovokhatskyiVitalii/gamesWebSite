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
    breakpoints: {
      350: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 1.5,
      },
      1150: {
        slidesPerView: 2,
      },
    },
  });
}

export default slider;
