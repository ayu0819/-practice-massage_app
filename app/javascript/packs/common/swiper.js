// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });



  import Swiper from "swiper";

window.addEventListener(
  "DOMContentLoaded",
  function() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
  false
);

