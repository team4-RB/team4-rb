const mapImg = document.querySelector(".map_img");
const sidebar = document.querySelector(".sidebar");
const modalBox = document.querySelector(".modalbox");
const closeBtn = document.querySelector(".closebtn");
const wishBtn = document.querySelector(".wishbtn");
const modalClosebtn = document.querySelector(".modal_closebtn");

//이미지 클릭 시 사이드바 띄우기
mapImg.addEventListener("click", function () {
  sidebar.style.display = 'flex';
})

//찜 버튼 클릭 시 모달창 띄우기
wishBtn.addEventListener("click", function () {
  modalBox.style.display = 'flex';
})

//사이드바 닫기 클릭 시 사이드바 none
closeBtn.addEventListener("click", function () {
  sidebar.style.display = 'none';
})

//모달창 닫기 클릭 시 로그인페이지 이동(지금은 더미페이지 이동)
modalClosebtn.addEventListener("click", function () {
  modalBox.style.display = 'none';
  location.href = './../../app/login/login.html';
})