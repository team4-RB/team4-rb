//요소 선택
const slideBox = document.querySelector(".slide-box");
const slideImg = document.querySelectorAll(".slide-img");
const slidesWrap = document.querySelector('.news_banner');

//슬라이드 설정
const slideWidth = 1200;
let currentIdx = 0;
const slideCnt = slideImg.length;

//다음 슬라이드로 이동 함수
function nextMove(){
  currentIdx++;
  if(currentIdx >= slideCnt){
    currentIdx = 0;
  }
  slideBox.style.left = `-${currentIdx * slideWidth}px`;
  slideBox.style.transition = '0.5s ease';
}

//이전슬라이드로 이동 함수
function prevMove(){
  currentIdx--;
  if(currentIdx < 0){
    currentIdx = slideCnt -1;
  }
  slideBox.style.left = `-${currentIdx * slideWidth}px`;
  slideBox.style.transition = "0.5s ease";
}

//자동 슬라이드 시작 함수
function startSlide(){
  slideInterval = setInterval(() => {
    nextMove();
  }, 3000);
}

//자동 슬라이드 정지 함수
function stopSlide(){
  clearInterval(slideInterval);
}

//슬라이드에 마우스 올리면 멈추는 함수
slidesWrap.addEventListener("mouseover", stopSlide);

//슬라이드에서 마우스가 벗어나면 다시 시작하는 함수
slidesWrap.addEventListener("mouseout", startSlide);

startSlide();