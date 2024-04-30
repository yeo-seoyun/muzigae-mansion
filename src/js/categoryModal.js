import $ from "jquery";
import { gsap } from "gsap";

const modal = $("#category-modal");
const tl = gsap.timeline({ paused: true });

tl.fromTo(
  modal,
  { x: "-100%", autoAlpha: 0 },
  { duration: 0.5, x: "0%", autoAlpha: 1, ease: "power2.out" }
);

export function toggleModal() {
  if (tl.isActive()) {
    return;
  }
  tl.reversed() ? tl.play() : tl.reverse();
}

$("#menu-open").click(function () {
  toggleModal();
});
$("#menu-close").click(function () {
  toggleModal();
});
