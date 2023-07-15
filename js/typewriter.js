/**
 * @name: typewriter.js
 * @description: This function will type out an array of characters to a target element.
 * @param {array} toType
 * @param {HTMLElement} targetElement
 * @param {number} speed
 */

export default function typewriter(toType, targetElement, speed) {
  if (!targetElement) console.error("Target element not found");
  if (!Array.isArray(toType) || typeof speed !== 'number') return console.error("Invalid argument types");


  let index = 0;
  let text = '';
  let isDeleting = false;

  function type() {
    const currentText = toType[index];

    if (isDeleting) text = currentText.substring(0, text.length - 1);
    else text = currentText.substring(0, text.length + 1);

    targetElement.innerHTML = text;
    let typingSpeed = speed;

    if (isDeleting) typingSpeed /= 2;


    if (!isDeleting && text === currentText) {
      typingSpeed = currentText.length > 10 ? 2000 : 1000;
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      index++;
      if (index === toType.length) index = 0;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, speed);
}

