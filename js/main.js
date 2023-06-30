import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 30,
  effect: 'cards',
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,

  },

});
