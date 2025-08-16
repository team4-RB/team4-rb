// 슬라이드 박스 가져오기
const slideBox = document.querySelector(".slide-box");
// 슬라이드 이미지들 가져오기
const slideImgs = document.querySelectorAll(".slide-img");
// 슬라이드 박스를 담은 배너 가져오기
const slidesWrap = document.querySelector(".news_banner");

// 슬라이드 넓이
const slideWidth = 1200;
// 이미지 수
const slideCnt = slideImgs.length;
// 현재 슬라이드 인덱스
let currentIdx = 0;
let slideInterval = null;

// 슬라이드 박스를 현재 인덱스 숫자에 맞추어 이동
function applyPosByIdx(noTransition = false) {
  slideBox.style.transition = noTransition ? "none" : slideBox.style.transition;
  slideBox.style.left = `-${currentIdx * slideWidth}px`;
}

//다음 이미지로 넘김
function nextMove() {
  // 맨 끝에 도달하면 처음으로 돌아가도록 인덱스를 수정
  currentIdx = (currentIdx + 1) % slideCnt;
  slideBox.style.transition = "0.5s ease";
  applyPosByIdx();
}
// 이전 이미지로 넘김
function prevMove() {
  // 맨 처음인 상태에서 실행되면 맨 끝을 가리키는 인덱스로 수정
  currentIdx = (currentIdx - 1 + slideCnt) % slideCnt;
  slideBox.style.transition = "0.5s ease";
  applyPosByIdx();
}

// 다음 이미지로 넘어가는 함수를 반복하는 타이머를 설정
// (자동으로 이미지가 넘어가도록 하는 함수)
function startSlide() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(nextMove, 3000);
}
//타이머 없애기(동작 중지하기)
function stopSlide() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = null;
}

// 호버 시 멈춤/재시작
slidesWrap.addEventListener("mouseover", stopSlide);
slidesWrap.addEventListener("mouseout", startSlide);

// 드래깅 여부
let isDragging = false;
// 드래그 시작 위치
let startX = 0;
// 드래그로 이동한 정도
let deltaX = 0;
// 드래그 시작 시점의 슬라이드 박스 위치
let startLeftPx = 0;
// 이미지 넘김 판정
const dragThreshold = Math.max(60, slideWidth * 0.15);

// 배너를 마우스로 클릭했을 때 실행
slidesWrap.addEventListener("mousedown", (e) => {
  // 왼쪽 버튼만
  if (e.button !== 0) return;
  // 자동 넘기기 중지
  stopSlide();
  // 드래그 플래그 true
  isDragging = true;
  // 드래그 시작 위치 가져오기
  startX = e.clientX;
  // 이동량 초기화 해두기
  deltaX = 0;
  // 이동 시간을 즉시로 설정
  slideBox.style.transition = "none";
  // 드래그 시작 시점의 슬라이드 박스 위치 가져오기
  startLeftPx = -currentIdx * slideWidth;
  // 정확한 계산을 위해 슬라이드 박스의 위치를 숫자로 고정
  slideBox.style.left = `${startLeftPx}px`;

  // 드래그 중 선택 방지(텍스트 드래그 방지)
  document.body.style.userSelect = "none";
});

// 드래그 플래그가 true인 동안 마우스의 움직임이 실시간으로 반영됨
window.addEventListener("mousemove", (e) => {
  // 배너를 드래그하는 중이 아니라면 중지
  if (!isDragging) return;
  // 드래그를 시작한 위치와 현재 드래그 중인 마우스 커서의 위치를 비교
  deltaX = e.clientX - startX;
  // 마우스가 이동하는 만큼 슬라이드 박스의 위치를 변경함
  slideBox.style.left = `${startLeftPx + deltaX}px`;
});

// 드래그가 끝나면 실행되는 함수
function endDrag() {
  // 드래그 플래그가 false로 되어 있다면 드래그 중인 것이 아니었으므로
  // 바로 종료
  if (!isDragging) return;
  // 드래그 플래그가 true라면 false로 초기화하고 다음 내용들 실행
  isDragging = false;
  // 자동 슬라이드보다 조금 천천히 이동하도록 설정해둠
  slideBox.style.transition = "0.3s ease";
  // 드래그하는 동안 이동한 정도가 판정값보다 크면 이동시킴
  if (Math.abs(deltaX) > dragThreshold) {
    // 왼쪽으로 끌었다면 다음 이미지로 넘어감
    if (deltaX < 0) nextMove();
    // 오른쪽으로 끌었다면 이전 이미지로 넘어감
    else prevMove();            
  } else {
    // 드래그로 이동한 픽셀이 판정값보다 작으면
    // 원래 위치로 돌아감(현재 인덱스 그대로 위치 조정)
    applyPosByIdx();
  }
  // 드래그 중 선택 방지(텍스트 드래그 방지) 해제
  document.body.style.userSelect = "";
  // 자동 슬라이드 다시 시작
  startSlide();
}

// 클릭한 마우스를 다시 떼거나
// 마우스 커서가 뉴스 배너를 넘어가면 endDrag 함수 호출
window.addEventListener("mouseup", endDrag);
slidesWrap.addEventListener("mouseleave", endDrag);

// 초기화
applyPosByIdx(true);
// startSlide();

function show(){
  alert("클릭됨");
}