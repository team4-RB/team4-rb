//페이지 제목 가져오기
const pageTitle = document.getElementById("page_title");
//식당 이미지 가져오기
const pageImage = document.getElementById("restaurant_img");
//식당 이름 가져오기
const shortName = document.getElementById("short_name");
//식당 지점명 가져오기
const shortBranch = document.getElementById("short_branch");
// 상권업종중분류 가져오기
const shortCategory = document.getElementById("short_category");
// 도로명 주소 가져오기
const shortAddress = document.getElementById("short_address");
// 전화번호 가져오기
const shortCall = document.getElementById("short_call");
// 영업 시간 가져오기
const shortours = document.getElementById("short_hours");
// 테이크아웃 가져오기
const shortTakeout = document.getElementById("short_takeout");
// 일층 가져오기
const shortFirstfloor = document.getElementById("short_firstfloor");
// 경사로 가져오기
const shortRamp = document.getElementById("short_ramp");
// 입구턱 가져오기
const shortEntrancecurb = document.getElementById("short_entrance_curb");
// 입구문턱 가져오기
const shortEntrancestep = document.getElementById("short_entrance_step");
// 화장실턱 가져오기
const shortRestroomcurb = document.getElementById("short_restroom_curb");
// 화장실문턱 가져오기
const shortRestroomstep = document.getElementById("short_restroom_step");
// 장애인화장실 가져오기
const shortRestroom = document.getElementById("short_restroom");
// 엘리베이터 가져오기
const shortElevator = document.getElementById("short_elevator");
// 주차장 가져오기
const shortParking = document.getElementById("short_parking");
// 장애인주차장 가져오기
const shortDisabledparking = document.getElementById("short_disabled_parking");
// 찜하기(별) 이미지
const starImg = document.getElementById("star_img");


//설명
const introduction = document.getElementById("introduction");


const isLogin = false;


// 음식점 더미데이터
var restaurants = [
[`Cafedecen`, ``, `카페`, `서울특별시 서초구 반포대로 13 (서초동)`, `02-521-3512`, ``, `Y`, `N`, `N`, `Y`, `N`, `N`, `N`, `N`, `N`, `N`, `N`],
[`던킨도너츠`, `강남본점`, `제과제빵`, `서울특별시 서초구 강남대로 373 (서초동)`, `02-3475-1031`, `평일 07:00 - 22:00 | 주말 08:00 - 22:00 | 운영시간 다를 수 있어 유선으로 문의바랍니`, `Y`, `N`, `N`, `Y`, `N`, `N`, `N`, `N`, `N`, `N`, `N`],
[`라이트업커피`, `3호점`, `카페`, `서울특별시 서초구 강남대로 321 (서초동)`, ``, ``, `Y`, `N`, `N`, `Y`, `N`, `N`, `N`, `N`, `N`, `N`, `N`]
];


// 이전 페이지에서 클릭한 음식점에 대한 파라미터를 가져오기
const params = new URLSearchParams(window.location.search);

// 파라미터 읽기
let restaurantNum = 0; 
let leNum = 0;
let adNum = 0;

if(params.has('restaurant')){
  restaurantNum = params.get("restaurant"); 
  leNum = params.get("leNum");
  adNum = params.get("adNum");
}

console.log("leNum = "+ leNum);
console.log("adNum = "+ adNum);


//이미지 변경 함수
function editImage(){
  pageImage.src = `./../../assets/img/restaurant/re` + restaurantNum + `.jpg`;
}

//소개글 변경 함수
function editTexts(){
  pageTitle.innerHTML = restaurants[restaurantNum][0];
  shortName.innerHTML = restaurants[restaurantNum][0];
  shortBranch.innerHTML = restaurants[restaurantNum][1];

shortCategory.innerHTML = `· 상권업종중분류: ` + restaurants[restaurantNum][2];
shortAddress.innerHTML = `· 도로명 주소: ` + restaurants[restaurantNum][3];
shortCall.innerHTML = `· 전화번호: ` + restaurants[restaurantNum][4];
shortours.innerHTML = `· 영업 시간: ` + restaurants[restaurantNum][5];
shortFirstfloor.innerHTML = `· 일층: ` + restaurants[restaurantNum][6];
shortRamp.innerHTML = `· 경사로: ` + restaurants[restaurantNum][7];
shortEntrancecurb.innerHTML = `· 입구턱: ` + restaurants[restaurantNum][8];
shortEntrancestep.innerHTML = `· 입구문턱: ` + restaurants[restaurantNum][9];
shortRestroomcurb.innerHTML = `· 화장실턱: ` + restaurants[restaurantNum][10];
shortRestroomstep.innerHTML = `· 화장실문턱: ` + restaurants[restaurantNum][11];
shortRestroom.innerHTML = `· 장애인화장실: ` + restaurants[restaurantNum][12];
shortElevator.innerHTML = `· 엘리베이터: ` + restaurants[restaurantNum][13];
shortParking.innerHTML = `· 주차장: ` + restaurants[restaurantNum][14];
shortDisabledparking.innerHTML = `· 장애인주차장: ` + restaurants[restaurantNum][15];
shortTakeout.innerHTML = `· 테이크아웃: ` + restaurants[restaurantNum][16];


  introduction.innerHTML = "서초 방배 1동 자담치킨입니다. 저희 자담치킨은 동물복지웰빙 치킨과 자담프리미엄 전용유로 튀긴 건강한 치킨 입니다. 세스코에 가입한 식당으로 보다 더 깨끗한 위생관리를 하고 있습니다. 다같이 코로나19를 이겨냈으면 좋겠습니다";
}

function switchStar(){
  console.log("starImg.style.right : " + starImg.style.right);
  if(isLogin){
    if(starImg.style.right == "0%"){
      starImg.style.right= "100%";
    }else{
    starImg.style.right= "0%";
    }
  }else{
    restaurantModalLoginShow();
  }
}

function goToList(){
  location.href=`./restaurant.html?leNum=`+leNum+`&adNum=`+adNum;
}

// 이미지 변경
editImage();
// 소개글 변경
editTexts();

// 찜하기 이미지 초기화(right 속성값을 넣어주기 위함)
starImg.style.right= "0%";
