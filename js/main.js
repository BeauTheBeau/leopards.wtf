import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

/**
 * @name: Floating Navbar
 * @type {Element}
 * @description: When the user scrolls down, the navbar will detach from the top and float.
 *               When the user scrolls up, the navbar will reattach to the top and take up 100% of the width.
 *               We do this by adding and removing the "floating" class, defined in css/index.scss
 */

// const navbar = document.getElementsByClassName("navbar")[0]
// let scrollY = window.scrollY;
//
// window.addEventListener('scroll', () => {
//   if (window.scrollY > scrollY) navbar.classList.add("floating")
//    else navbar.classList.remove("floating")
//   scrollY = window.scrollY;
// })

/**
 * @name: Slowly increase opacity of .hero's "before" pseudo-element as the user scrolls down
 * @type {Element}
 * description: We do this by reading the scroll position and setting the opacity of .hero::before
 *             to the percentage of the scroll position divided by the height of the hero section,
 *             then setting the opacity of .hero::before (getComputedStyle) to that value.
 */



window.addEventListener('scroll', () => {
  const heroHeight = document.getElementsByClassName("hero")[0].offsetHeight;
  const opacity = (Math.min(window.scrollY / heroHeight, 1) * 2).toFixed(2);
  const blur = 20 - (Math.min(window.scrollY / heroHeight, 1) * 10).toFixed(2);
  console.log(opacity, blur);

  const heroForeground = document.getElementById("hero__foreground");
  heroForeground.style.opacity = opacity;
  heroForeground.style.filter = `blur(${blur}px)`;
  heroForeground.style.y = `${window.scrollY / 2}px`;
});



import('./typewriter.js').then(({default: typewriter}) => {
  typewriter(
    [
      "Revolutionize tank production with self-replicating technology.",
      "Leopard Evo: Dominating the Battlefield, Redefining Armored Warfare.",
      "Unleash Your Inner Warrior: Experience Evo's Unmatched Performance.",
      "Swift Agility, Unmatched Power: Conquer with Evo.",
      "Unleash Devastating Force: Your Key to Battlefield Supremacy.",
      "Unparalleled Adaptability: The Ultimate Tank for Every Combat Scenario.",
      "Confidence in Every Battle: Secure Your Investment with Exclusive Extended Warranty.",
      "Unmatched Peace of Mind: Protect Your Tank with Our Limited-Time Extended Warranty.",
      "Dominate Now, Worry Less: 5 Years of Repairs and Replacements with Extended Warranty.",
      "Upgrade Your Armor: Experience the Revolution of Tank Technology.",
      "The Future of Armored Warfare: Unleash the Power of Self-Replication."],
    document.getElementById("typewriter"),
    50
  );

});



