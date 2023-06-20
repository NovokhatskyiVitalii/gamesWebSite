import Swiper, { Navigation } from "swiper";
import "swiper/css/bundle";
Swiper.use([Navigation]);

function slider() {
  let slider1 = new Swiper(".slider1", {
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

  let slider2 = new Swiper(".slider2", {
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
      600: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
}

export default slider;
