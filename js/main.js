$(document).ready(function () {
  $("img.f1").fadeIn(500);
});
$(document).ready(function () {
  $("img.f2").fadeIn(1500);
});
$(document).ready(function () {
  $("img.f3").fadeIn(1500);
});
var TopMenu, TopeMenuPosition;
TopMenu = document.getElementById("topmenu");
TopeMenuPosition = TopeMenu.offsetTop;

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7,1.4,2.1,2.7
    opacity: 1,
  });
});

// 생성자
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한 번에 보여지는 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 가운데 보이기
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
new Swiper(".awards .swiper-container", {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});
const nextBtn = document.querySelector(".next-btn");
const slide = document.querySelector(".slide");

// 다음 버튼 클릭
nextBtn.addEventListener("click", next);
function next(event) {
  console.log(event.target);
  slide.style.transform = "translateX(-800px)";
}
