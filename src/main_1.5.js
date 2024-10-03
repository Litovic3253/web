let link = document.querySelector("link");
function reloadWindow() {
  window.addEventListener("resize", function () {
    "use strict";
    window.location.reload();
  });
}
function updateWindow() {
  if (window.innerWidth < 768) {
    link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
    reloadWindow();
  } else {
    reloadWindow();
    link.href = "#";
  }
}

const swiperCustom = document.querySelectorAll(".swiper");
swiperCustom.forEach((item) => {
  let swiper = new Swiper(item, {
    slidesPerView: 1.3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },

      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      640: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
    },
  });
});

updateWindow();

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelectorAll(".collapse-expand__button");
  const content = document.querySelectorAll(".swipper");
  const fullHeight = content[0].scrollHeight;
  const hiddenHeight = 176;

  toggleButton.forEach((item, i) => {
    item.addEventListener("click", function () {
      if (
        content[i].style.maxHeight === `${hiddenHeight}px` ||
        content[i].style.maxHeight === ""
      ) {
        content[i].style.maxHeight = `${fullHeight}px`;
        item.textContent = "Скрыть";
      } else {
        content[i].style.maxHeight = `${hiddenHeight}px`;
        item.textContent = "Показать еще";
      }
      item.classList.toggle("active");
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.querySelector(".text-content__button");
//   const content = document.querySelector(".text-1");

//   toggleButton.onclick = (function () {
//     let expand = false;
//     let startValueBtn = toggleButton.textContent;

//     return function (e) {
//       e.preventDefault();
//       expand = !expand;
//       content.classList.toggle("text-1" + "--expand");
//       // toggleButton.classList.toggle(btn + "--reverse");

//       if (expand) {
//         toggleButton.textContent = "Свернуть";
//       } else {
//         toggleButton.textContent = startValueBtn;
//       }
//     };
//   })();
// });

// function clickToExpand(block, btn, indexBtn) {
//   indexBtn = !indexBtn ? 0 : +indexBtn;
//   let benElem = document.querySelectorAll('+' + btn) [indexBtn];
//   let blockElem = document.querySelector('+' + block);

//   console.log(ieirueiuri)

//   btnElem.onclick = function() {
//   let expand = false;
//   let startValueBtn = btnElem.textContent;

//   return function(e) {
//     e.preventDefault();
//     expand = !expand;
//     blockElem.classList.toggle(block + '--expand');
//     btnElem.classList.toggle(btn + '--reverse');

//     if (expand) {
//       btnElem.textContent = 'Свернуть';
//     } else {
//       benElem.textContent = startValueBtn;
//     }
//   }
//   }();
// }

// clickToExpand('text-1', 'text-content__link', 0);

let btn = document.querySelector(".btn");
let content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
  console.log(content.classList);

  if (content.classList.contains("hidden")) {
    btn.textContent = "Скрыть";
  } else {
    btn.textContent = "Читать далее";
  }

  content.classList.toggle("hidden");
}

let call = document.querySelectorAll(".button-call");
let mobileCallback = document.querySelector(".mobile-callback");
let callbackModalClose = document.querySelector(".callback-modal__close");
let overlay = document.querySelector(".overlay");
call.forEach((item) => {
  item.addEventListener("click", function () {
    mobileCallback.classList.add("show-modal-call");
    overlay.classList.add("open");
  });
});

callbackModalClose.addEventListener("click", function () {
  mobileCallback.classList.remove("show-modal-call");
  if (!mobileBurger.classList.contains("show-modal-call")) {
    overlay.classList.remove("open");
  }
});

let message = document.querySelectorAll(".button-message");
let mobileFeedback = document.querySelector(".mobile-feedback");
let feedbackModalClose = document.querySelector(".feedback-modal__close");

message.forEach((item) => {
  item.addEventListener("click", function () {
    mobileFeedback.classList.add("show-modal-call");
    overlay.classList.add("open");
  });
});

feedbackModalClose.addEventListener("click", function () {
  mobileFeedback.classList.remove("show-modal-call");
  if (!mobileBurger.classList.contains("show-modal-call")) {
    overlay.classList.remove("open");
  }
});

let burger = document.querySelector(".mobile-button-burger");
let mobileBurger = document.querySelector(".mobile-burger");
let burgerModalClose = document.querySelector(".burger-modal__close");

burger.addEventListener("click", function () {
  mobileBurger.classList.add("show-modal-call");
  overlay.classList.add("open");
});

burgerModalClose.addEventListener("click", function () {
  mobileBurger.classList.remove("show-modal-call");
  if (
    !mobileFeedback.classList.contains("show-modal-call") &&
    !mobileCallback.classList.contains("show-modal-call")
  ) {
    overlay.classList.remove("open");
  }
});
