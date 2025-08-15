// news.js
const searchBar = document.querySelector(".search_btn");

// 검색 버튼 입력시 검색 결과 페이지 이동
searchBar.addEventListener("click", function () {
  location.href = './../../app/news/newsSearch.html'
})

const slides = document.querySelector(".slides");
const cards = Array.from(slides.querySelectorAll('.cardlist'));

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;
const cardWidth = cards[0].offsetWidth;

slides.addEventListener('mousedown', dragStart); // 마우스 누를시
slides.addEventListener('mouseup', dragEnd); // 마우스 눌렀다 땔 시
slides.addEventListener('mouseleave', dragEnd); // 마우스 벗어날 시
slides.addEventListener('mousemove', drag); // 마우스 이동 시

// 드래그 시작
function dragStart(e) {
  isDragging = true;
  startPosition = getPositionX(e);
  slides.classList.add('dragging');
}

// 드래그 끝
function dragEnd(){
  if(!isDragging) return;
  isDragging = false;
  slides.classList.remove('dragging');

  const movedBy = currentTranslate - prevTranslate;

  if(movedBy < -50 && currentIndex < cards.length - 1){
    currentIndex += 1;
  }

  if (movedBy > 50 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();
}

// 드래그 시
function drag(e) {
  if (!isDragging) return;
  const currentPosition = getPositionX(e);
  const diffPosition = currentPosition - startPosition;
  currentTranslate = prevTranslate + diffPosition;
  slides.style.transform = `translateX(${currentTranslate}px)`;
}

// X축 위치 가져오기
function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

// 카드 뉴스 위치 자동 조정
function setPositionByIndex(){
  currentTranslate = currentIndex * -cardWidth;
  prevTranslate = currentTranslate;
  slides.style.transform = `translateX(${currentTranslate}px)`;
}