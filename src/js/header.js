import $ from "jquery";
import { toggleModal } from "./categoryModal.js";

document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const logo = document.querySelector(".logo");

  if (window.scrollY >= 100) {
    header.classList.remove("text-white");
    header.classList.add("text-black");
    header.classList.add("bg-white");
    logo.style.backgroundImage = "url('/assets/cm_logo_black_1.svg')";
  } else {
    header.classList.remove("text-black");
    header.classList.add("text-white");
    header.classList.remove("bg-white");
    logo.style.backgroundImage = "url('/assets/cm_logo_white_1.svg')";
  }
});

$(document).ready(function () {
  $("#menu-open").click(function () {
    toggleModal();
  });
});
