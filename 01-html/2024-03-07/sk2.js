var text = ["첫번째", "두번째", "세번째", "네번째"];

var bottomSwiper = new Swiper(".swiper-bottom", {
  slidesPerView: "1",
  pagination: {
    el: ".swiper-pagination-custom",
    clickable: true,
    bulletClass: "custom_bullet",
    bulletActiveClass: "swiper-pagination-custom-bullet-active",

    renderBullet: function (index, className) {
      return (
        '<div class="' + className + '"><span>' + text[index] + "</span></div>"
      );
    },
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  touchRatio: 0.2,
  observer: true,
  observeParents: true,
});
