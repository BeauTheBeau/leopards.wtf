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
  const blur = 10 - (Math.min(window.scrollY / heroHeight, 1) * 10).toFixed(2) * 2;

  const heroForeground = document.getElementById("hero__foreground");
  heroForeground.style.opacity = opacity;
  heroForeground.style.filter = `blur(${blur}px)`;
  heroForeground.style.y = `${window.scrollY / 2}px`;
});

import('./typewriter.js').then(({default: typewriter}) => {
  typewriter(
    [
      "Revolutionize tank production with self-replicating technology.",
      "Dominating the Battlefield, Redefining Armored Warfare.",
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


/**
 * @name: Copy to Clipboard
 * @description: When the user clicks on a section's text, the text will be copied to the clipboard.
 *              The text will be formatted as a Discord message, with a link to the page and a mention.
 *              The text will be formatted as a quote block, with a vertical bar (>) at the beginning of each line.
 *              The text will be formatted as a code block, with three backticks (```) at the beginning and end of the text.
 * @type {Element}
 *
 */

const sectionText = document.getElementsByClassName("section__text");
for (let i = 0; i < sectionText.length; i++) {

  // set title to "Click to Copy"
  sectionText[i].title = "Click to Copy";

  sectionText[i].addEventListener('click', () => {
    const text = sectionText[i].innerText;
    const textToCopy = `Via https://leopards.wtf${window.location.pathname}, from <@729567972070391848>\n\n`
      + "> ```"  + `${text}`  + "```";

    try {
      navigator.share({
        title: 'Leopards.wtf snippet',
        text: textToCopy,
        url: `https://leopards.wtf${window.location.pathname}`,
      }).then(() => {
        console.log('Successful share');
      }).catch((error) => {
        console.log('Error sharing', error);
      });
    } catch (e) {
      navigator.clipboard.writeText(textToCopy).then(() => {
      }, (err) => {
        console.error('Async: Could not copy text: ', err);
      });
    }

  });
}

/**
 * @name: Graph to Image
 * @description: When the user clicks on a graph, the graph will be copied to the clipboard as an image.
 * @type {Element}
 */

// function saveElementAsImage(element) {
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');
//
//   // Set canvas dimensions to match the element
//   canvas.width = element.offsetWidth;
//   canvas.height = element.offsetHeight;
//
//   // Render the element and its children onto the canvas
//   context.drawImage(element, 0, 0);
//
//   // Convert the canvas content to a data URL
//   const dataURL = canvas.toDataURL();
//
//   // Create a temporary link element
//   const link = document.createElement('a');
//   link.href = dataURL;
//   link.download = 'element.png'; // Set the desired file name
//
//   // Simulate a click on the link to trigger the download
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }
//
//
// const graphs = document.getElementsByClassName("comparison__bar__chart");
// for (let i = 0; i < graphs.length; i++) {
//   graphs[i].title = "Click to Copy";
//   graphs[i].addEventListener('click', () => {
//     saveElementAsImage(graphs[i]);
//   });
// }




