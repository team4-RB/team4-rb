const mapImg = document.querySelector(".map_img");
const sidebar = document.querySelector(".sidebar");
const modalBox = document.querySelector(".modalbox");
const closeBtn = document.querySelector(".closebtn");
const wishBtn = document.querySelector("#wishbtn");
const modalClosebtn = document.querySelector(".modal_closebtn");
const modalboxComplet = document.querySelector(".modalbox_complet");
const modalClosebtnComplet = document.querySelector(".modal_closebtn_complet");

//로그인 true, 비로그인 false
let login = true;

//이미지 클릭 시 사이드바 띄우기
mapImg.addEventListener("click", function () {
  sidebar.style.display = 'flex';
})

//찜 버튼 클릭 시 모달창 띄우기
wishBtn.addEventListener("click", function () {
  //비로그인인 경우 비로그인 모달창
  if (login === false) {
    modalBox.style.display = 'flex';
  }else{//로그인인 경우
    //로그인 상태의 모달창
    modalboxComplet.style.display = 'flex';
    //active 상태이면
    if (wishBtn.classList.contains('active')) {
      wishBtn.classList.remove('active');
      wishBtn.querySelector("img").src = "./../../assets/img/map/star.png"
    }else{ //active 상태가 아니면
      wishBtn.classList.add('active');
      wishBtn.querySelector("img").src = "./../../assets/img/map/activestar.png"
    }
  }
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

//모달창 닫기 클릭 시 모달 닫기
modalClosebtnComplet.addEventListener("click", function(){
  modalboxComplet.style.display = 'none';
})