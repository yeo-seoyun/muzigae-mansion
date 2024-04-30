import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import pb from "../api/pocketbase";
import { getPbImage } from "../lib/getPbImage";
import comma from "../lib/comma";

gsap.registerPlugin(ScrollTrigger);

const mySwiper = new Swiper(".main-Swiper", {
  loop: true,
  effect: "fade",
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

async function initPage() {
  try {
    // 데이터 로드 함수
    await loadCollections();
    await loadBestItems();

    document
      .querySelectorAll(".collection-Swiper .swiper-slide img")
      .forEach((img, index) => {
        gsap.from(img, {
          y: () => -0.1 * img.offsetHeight,
          ease: "sine.inOut",
          duration: 2,
          delay: 0.2 * index,
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: img,
            start: "top bottom-=200",
            end: "bottom top+=200",
            toggleActions: "restart pause resume pause",
            scrub: 1,
          },
        });
      });
  } catch (error) {
    console.error("Initialization failed:", error);
  }
}

document.addEventListener("DOMContentLoaded", initPage);

async function loadCollections() {
  try {
    const records = await pb
      .collection("collection_muzi")
      .getFullList({ sort: "-created" });

    const swiperContainer = document.querySelector(
      ".collection-Swiper .swiper-wrapper"
    );
    swiperContainer.innerHTML = records
      .map(
        (item) => `
      <div class="swiper-slide">
        <img src="${getPbImage(item.collectionId, item.id, item.photo)}" alt="${
          item.title
        }" class="w-full" />
      </div>
    `
      )
      .join("");

    new Swiper(".collection-Swiper", {
      slidesPerView: 5,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1080: { slidesPerView: 5 },
        768: { slidesPerView: 3 },
        320: { slidesPerView: 1 },
      },
    });
  } catch (error) {
    console.error("Data loading failed:", error);
  }
}

async function loadBestItems() {
  try {
    const bestItems = await pb
      .collection("product_muzi")
      .getFullList({ sort: "-created" });

    const bestItemSwiperContainer = document.querySelector(
      ".bestItem-Swiper .swiper-wrapper"
    );
    bestItemSwiperContainer.innerHTML = bestItems
      .map(
        (item) => `
      <div class="swiper-slide">
      <a href="#" class="item-card w-full flex flex-col items-center">
      <img src="${getPbImage(item.collectionId, item.id, item.photo)}" alt="${
          item.title
        }" class="w-full" />
      <div class="w-full flex gap-2 justify-between">
        <h3 class="flex-1">${item.title}</h3>
        <span>${comma(item.price)}원</span>
      </div>
    </a>
      </div>
    `
      )
      .join("");

    new Swiper(".bestItem-Swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1080: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        320: { slidesPerView: 2 },
      },
    });
  } catch (error) {
    console.error("Product list loading failed:", error);
  }
}
