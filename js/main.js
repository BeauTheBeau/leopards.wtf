import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,

  }
});

// If hash is #subscribe
if (window.location.hash === "#subscribe" && document.getElementById("subscribe")) document.getElementById("payment").showModal();


/**
 * Floating Navbar
 * @type {Element}
 * description: When the user scrolls down, the navbar will detach from the top and float.
 *              When the user scrolls up, the navbar will reattach to the top and take up 100% of the width.
 *              This is done by adding and removing the "floating" class, defined in css/index.scss
 */

const navbar = document.getElementsByClassName("floating__links")[0]
let scrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollY) navbar.classList.add("floating")
   else navbar.classList.remove("floating")
  scrollY = window.scrollY;
})

/**
 * Typewriter Effect
 * @type {Element}
 * @function typeText
 * @returns {void}
 description: Initializes a typewriter effect that displays a series of phrases in a specified HTML element.
 The typewriter effect simulates the process of typing and erasing text, creating a dynamic and engaging presentation.
 */

const typedSpan = document.getElementById("typed")
const toType = [
  "Revolutionizing tank production with self-replicating technology.",
  "Dominating the Battlefield: Unleash the Power of the Leopard Evo and Revolutionize Armored Warfare.",
  "Unleash Your Inner Warrior: Experience Unmatched Performance with the Leopard Evo.",
  "Outmaneuver. Strike. Conquer: Discover the Swift Agility of the Leopard Evo.",
  "Unleash Devastating Force: The Leopard Evo, Your Key to Battlefield Supremacy.",
  "Unparalleled Adaptability: The Leopard Evo, the Ultimate Tank for Every Combat Scenario.",
  "Confidence in Every Battle: Secure Your Investment with Our Exclusive Extended Warranty.",
  "Unmatched Peace of Mind: Protect Your Tank with Our Limited-Time Extended Warranty.",
  "Dominate Now and Worry Less: Enjoy 5 Years of Repairs and Replacements with Our Extended Warranty.",
  "Upgrade Your Armor: Experience the Evolution of Tank Technology with the Leopard Evo.",
  "The Future of Armored Warfare: Unleash the Self-Replicating Power of the Leopard Evo.",
]

const delayTyping_char = 50;
const delayErasing_text = 20;
const delayTyping_text = 2000;

let toTypeIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < toType[toTypeIndex].length) {
    typedSpan.textContent += toType[toTypeIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, delayTyping_char);
  }
  else setTimeout(eraseText, delayTyping_text);

}

function eraseText() {
  if (charIndex > 0) {
    typedSpan.textContent = toType[toTypeIndex].substring(0, charIndex-1);
    charIndex = charIndex-1;
    setTimeout(eraseText, delayErasing_text);
  }
  else {
    toTypeIndex++;

    if (toTypeIndex >= toType.length) toTypeIndex = 0;
    setTimeout(typeText, delayTyping_text);
  }
}

window.onload = function() {
  if (!typedSpan) return;
  if (toType[toTypeIndex].length) setTimeout(typeText, delayTyping_text);
}
