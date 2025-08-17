const slidesWrap = document.querySelector(".slides_wrap");
const slides = document.querySelector(".slides");
let cards = Array.from(slides.querySelectorAll(".cardlist"));

let currentIndex = 1; // 복제 후 첫 카드 기준
let cardWidth = cards[0].offsetWidth + 20; // margin 포함
let wrapWidth = slidesWrap.offsetWidth;
let currentTranslate = 0;

// 무한 슬라이드용 카드 복제
function cloneSlides() {
  const first = cards[0].cloneNode(true);
  const last = cards[cards.length - 1].cloneNode(true);
  slides.appendChild(first);
  slides.insertBefore(last, cards[0]);
  cards = Array.from(slides.querySelectorAll(".cardlist"));
}
cloneSlides();

// 가운데 카드 강조
function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });
}

function setPositionByIndex() {
  const centerOffset = (wrapWidth / 2) - (cardWidth / 2);
  const scaleExtra = cards[currentIndex].offsetWidth * 0.2 / 2; // 가운데 카드 확대 보정
  currentTranslate = currentIndex * -cardWidth + centerOffset - scaleExtra;

  // wrap 밖으로 나가지 않게 제한
  const maxTranslate = 0;
  const minTranslate = wrapWidth - slides.scrollWidth;
  if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;
  if (currentTranslate < minTranslate) currentTranslate = minTranslate;

  slides.style.transform = `translateX(${currentTranslate}px)`;
  updateActiveCard();
}

// 초기 위치
setPositionByIndex(false);

// 무한 루프 처리
slides.addEventListener("transitionend", () => {
  if (currentIndex === 0) currentIndex = cards.length - 2;
  if (currentIndex === cards.length - 1) currentIndex = 1;
  setPositionByIndex(false);
});

// 자동 슬라이드
let autoSlide = setInterval(() => {
  currentIndex++;
  setPositionByIndex();
}, 3000);

// 드래그 이벤트
let isDragging = false;
let startX = 0;
let prevTranslate = currentTranslate;

slides.addEventListener("mousedown", dragStart);
slides.addEventListener("mouseup", dragEnd);
slides.addEventListener("mouseleave", dragEnd);
slides.addEventListener("mousemove", drag);
slides.addEventListener("touchstart", dragStart);
slides.addEventListener("touchend", dragEnd);
slides.addEventListener("touchmove", drag);

function dragStart(e) {
  isDragging = true;
  startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  clearInterval(autoSlide); // 드래그 중 자동 슬라이드 중지
  slides.style.transition = "none";
  cards.forEach(card => card.classList.remove("active"));
}

function dragEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff < -50) currentIndex++;
  if (diff > 50) currentIndex--;

  setPositionByIndex();
  autoSlide = setInterval(() => {
    currentIndex++;
    setPositionByIndex();
  }, 3000);
}

function drag(e) {
  if (!isDragging) return;
  const moveX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  const diff = moveX - startX;
  slides.style.transform = `translateX(${prevTranslate + diff}px)`;
}
