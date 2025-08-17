// 하트 이미지를 감싼 div를 불러오기
const hearts = document.getElementsByClassName("heart_img");
// 윗줄 프로필 카드 영역(리스트)

const cardRow1 = document.getElementById("card_list_1");
// 아랫줄 프로필 카드 영역(리스트)
const cardRow2 = document.getElementById("card_list_2");

let isLogin = true;

// 화면에 프로필 카드 8개 추가 반복문
for (let i = 0; i < 8; i++) {
  // li 요소 생성
  const li = document.createElement("li");
  // care_card 클래스 추가
  li.className += "care_card";
  // 카드 생성 코드 문자열로 추가
  let str = "";
  // 이미지에 onclick으로 실행할 함수(하트 색 변경 함수) 추가하고
  str += `<div class="heart_img_box"><img draggable="false" onclick="switchHeart(`;
  // 매개변수로 i값 넣어주기
  str += i;
  // 하트 이미지 url 추가, 프로필 사진, 이름들을 담은 요소들을 추가
  str += `)" class="heart_img" src="./../../assets/img/careMember/heart_icon.png"></div><a href="./careMemberDetail.html" class="profile"><div class="profile_pic_box"><img class="profile_pic" src="./../../assets/img/careMember/profilePicCare.png"></div><div class="profile_name">`;
  // 이름
  str += `김괭이`;
  // 날짜 행 클래스 추가
  str += `</div><div class="day_row">`;
  // 요일
  str += `<div class="day">화</div>`;
  // 요일
  str += `<div class="day">화</div>`;
  //한 줄 소개 클래스 추가
  str += `</div><div class="profile_intro"><div class="short_intro">`;
  // 한 줄 소개
  str += `안녕하세요!! 김괭입니다.`;
  // 이력 및 정보 소개 란 클래스 추가
  str += `</div><div class="long_intro"><p>`;
  // 이력 소개
  str += `장애인 활동사 교육 이수 완료`;
  str += `</p><p>`;
  // 추가 소개
  str += `서울 거주`;
  str += `</p></div></div></a>`;
  // li 요소에 문자열 추가
  li.innerHTML = str;

  if (i < 4) {
    // 처음 네 번은 윗줄에 추가
    cardRow1.appendChild(li);
  } else {
    // 이후는 아랫줄에 추가

    cardRow2.appendChild(li);
  }
}
// 하트 반전 함수(매개변수 : 프로필 카드 추가 반복문에서 사용된 i 값)
function switchHeart(num) {
  if (isLogin) {
    // (확인용)i번째 하트요소 right값 출력
    console.log(hearts[num].style.right);
    // i번째 하트가 right:-100% 인 경우
    if (hearts[num].style.right == "-100%") {
      // right:0%로 변경
      hearts[num].style.right = "0%";
    } else {
      // 아니라면 -right:-100%로 변경
      hearts[num].style.right = "-100%";
    }
  } else {
    careMemberModalLoginShow();
  }
}
