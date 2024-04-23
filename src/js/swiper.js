import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const mySwiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
