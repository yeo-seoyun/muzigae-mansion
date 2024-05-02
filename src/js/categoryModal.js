import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");
  const modal = document.getElementById("category-modal");

  console.log("Open Button:", openBtn);
  console.log("Close Button:", closeBtn);
  console.log("Modal:", modal);

  if (!openBtn || !closeBtn || !modal) {
    return;
  }

  const tl = gsap.timeline({ paused: true });

  tl.to(modal, {
    x: "0%",
    autoAlpha: 1,
    duration: 0.5,
    ease: "power2.out",
  });

  openBtn.addEventListener("click", function () {
    tl.play();
  });

  closeBtn.addEventListener("click", function () {
    tl.reverse();
  });
});
