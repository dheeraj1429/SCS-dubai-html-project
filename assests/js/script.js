"use strict";

const counterDomSection = document.querySelector(".counter-section");
const counterElm = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  function (entries, observe) {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        counterElm.forEach((el) => {
          const updateCounter = function () {
            const target = Number(el.getAttribute("data-target"));
            const speedValues = 200;
            const value = Number(el.textContent);
            const delay = target / speedValues;

            if (value < target) {
              el.innerHTML = Math.ceil(value + delay);
              setTimeout(updateCounter, 1);
            }
          };

          updateCounter();
        });
      }
    });
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-120px",
  }
);

observer.observe(counterDomSection);

window.addEventListener("DOMContentLoaded", () => {
  const mybtn = document.querySelectorAll(".mybtn");
  const closeBtn12 = document.querySelector("#cl");
  const myModal = document.querySelector(".myModal");

  mybtn.forEach(el => {
el.addEventListener("click", () => {
  myModal.style.display = "block";
});
  })


  closeBtn12.addEventListener("click", () => {
    myModal.style.display = "none";
  });
});