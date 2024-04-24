import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import pb from "./src/api/pocketbase";
import { getPbImage } from "./src/lib/getPbImage";
import comma from "./src/lib/comma";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", async () => {
  await loadCollections();
  await loadBestItems();
});

async function loadCollections() {
  try {
    const records = await pb
      .collection("collection_muzi")
      .getFullList({ sort: "-created" });

    const swiperContainer = document.querySelector(
      ".mySwiper-2 .swiper-wrapper"
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

    records.forEach((item, index) => {
      const img = swiperContainer.querySelectorAll("img")[index];
      gsap.to(img, {
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

    new Swiper(".mySwiper-2", {
      slidesPerView: 6,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1080: { slidesPerView: 6 },
        768: { slidesPerView: 3 },
        320: { slidesPerView: 2 },
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
      ".bestItem .swiper-wrapper"
    );
    bestItemSwiperContainer.innerHTML = bestItems
      .map(
        (item) => `
      <div class="swiper-slide">
        <a href="" class="item-card w-full flex flex-col items-center">
          <img src="${getPbImage(
            item.collectionId,
            item.id,
            item.photo
          )}" alt="${item.title}" class="w-full hover:scale-110" />
          <div class="w-full flex gap-2 justify-between">
            <h3 class="flex-1">${item.title}</h3>
            <span>${comma(item.price)}원</span>
          </div>
        </a>
      </div>
    `
      )
      .join("");

    new Swiper(".bestItem", {
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
