//페이지 제목 가져오기
const pageTitle = document.getElementById("page_title");

//식당 이미지 가져오기
const pageImage = document.getElementById("restaurant_img");

//식당 이름 가져오기
const shortName = document.getElementById("short_name");

//분류
const shortCategory = document.getElementById("short_category");

//전화번호
const shortCall = document.getElementById("short_call");

//장애인 화장실 유무
const shortRestroom = document.getElementById("short_restroom");

//장애인 경사로 유무
const shortRamp = document.getElementById("short_ramp");

//설명
const introduction = document.getElementById("introduction");


var restaurants = [
  ['비엔나커피하우스', '서울특별시 서초구 방배로 126', '평일 08:30 - 23:00 | 주말 11:00 - 23:00', '02-585-1683'],
  ['아트메이저', '서울특별시 서초구 서초대로 114', '월~금 : 08:30 ~ 21:50 토,일 : 09:00 ~ 21:50', '02-521-6239'],
  ['스타벅스', '서울특별시 서초구 방배로 84 (방배동,유성빌딩 지상1층)', '매장 07:00 - 21:00 딜리버스 10:00 - 20:30~18시', '-']
];



const params = new URLSearchParams(window.location.search);

// 파라미터 읽기
const restaurantNum = params.get("restaurant"); 

function editImage(){
  pageImage.src = `./../../assets/img/restaurant/re` + restaurantNum + `.jpg`;
}

function editTexts(){
  pageTitle.innerHTML = restaurants[restaurantNum][0];
  shortName.innerHTML = restaurants[restaurantNum][0];
  shortCategory.innerHTML = "· 한식(js로 변경)";
  shortCall.innerHTML = "· 전화번호 : " + restaurants[restaurantNum][3];
  shortRestroom.innerHTML = "· 장애인 화장실 여부 : O(js로 변경)";
  shortRamp.innerHTML = "· 경사로 유무 : O(js로 변경)";
  introduction.innerHTML = "(js로 변경)서초 방배 1동 자담치킨입니다. 저희 자담치킨은 동물복지웰빙 치킨과 자담프리미엄 전용유로 튀긴 건강한 치킨 입니다. 세스코에 가입한 식당으로 보다 더 깨끗한 위생관리를 하고 있습니다. 다같이 코로나19를 이겨냈으면 좋겠습니다";
}

editImage();
editTexts();
