// 지역 버튼 가져오기
const reButtons = document.getElementsByClassName("region_button");
// 지역 선택 화살표 가져오기
const reMarks = document.getElementsByClassName("region_mark");
// 동 버튼 박스 가져오기
const reSmall = document.getElementsByClassName("region_small");
// 동 버튼 목록 가져오기
const reSmallList = document.getElementById("region_small_list");
// 음식점 카드들 가져오기
const reCards = document.getElementsByClassName("restaurant_card");
// 음식점 찜하기(별)이미지들 가져오기
const reStars = document.getElementsByClassName("star_img");

//로그인 여부
let isLogin = true;

// 동 목록
var arr = [
  ["방배 1동", "방배 2동", "방배 3동", "방배 4동", "방배 본동"],
  ["반포 1동", "반포 2동", "반포 3동", "반포 4동", "반포 본동"],
  ["서초 1동", "서초 2동", "서초 3동", "서초 4동"],
  ["양재 1동", "양재 2동"],
  ["내곡동"],
  ["잠원동"],
];

// 음식점 더미데이터
var restaurants = [
  [
    "비엔나커피하우스",
    "서울특별시 서초구 방배로 126",
    "평일 08:30 - 23:00 | 주말 11:00 - 23:00",
    "02-585-1683",
  ],
  [
    "아트메이저",
    "서울특별시 서초구 서초대로 114",
    "월~금 : 08:30 ~ 21:50 토,일 : 09:00 ~ 21:50",
    "02-521-6239",
  ],
  [
    "스타벅스",
    "서울특별시 서초구 방배로 84 (방배동,유성빌딩 지상1층)",
    "매장 07:00 - 21:00 딜리버스 10:00 - 20:30~18시",
    "-",
  ],
];

// 음식점 카드 표출 함수(매개변수 : 지역, 동 인덱스)
function showCards(num, value) {
  // (확인용)지역, 동 인덱스
  console.log("num은 " + num + ", value는 " + value);
  // 동 버튼 불러오기
  const villages = document.getElementsByClassName("village");
  // 모든 동 버튼 스타일 지정(하얀 바탕에 검은 글씨)
  for (v of villages) {
    v.style.backgroundColor = "white";
    v.style.color = "black";
  }
  // 선택된 동의 버튼만 스타일 지정(남색 배경에 하얀 글씨)
  villages[value].style.backgroundColor = "#1D3266";
  villages[value].style.color = "white";
  // 음식점 카드 네 번 생성
  for (let i = 0; i < 4; i++) {
    // 현재 레스토랑 수 만큼 카드 생성
    if (i < restaurants.length) {
      let c = ` ` + (num + 1) + ` ` + (value + 1) + ` ` + (i + 1);

      let str = "";
      str +=
        `<a href="./../restaurant/restaurantDetail.html?restaurant=` +
        i +
        `"><div class="restaurant_name">` +
        restaurants[i][0];
      str += c; // 좌표 확인용
      str +=
        `</div></a><div class="restaurant_introduce"><div class="restaurant_info"><div>` +
        `⌂ ` +
        restaurants[i][1];
      str += `</div><div>` + `⌂ ` + restaurants[i][2];
      str += `</div><div>` + `⌂ ` + restaurants[i][3];
      str +=
        `</div></div><div class="restaurant_mark"><div onclick="togleStar(` +
        i +
        `)" class="star_img_box"><img class="star_img" src="./../../assets/img/restaurant/star.png">`;
      str += `</div><div>` + "찜하기";
      str += `</div></div></div></div>`;
      reCards[i].innerHTML = str;
      reCards[i].style.opacity = 1;
    } else {
      // 레스토랑 수가 4 미만이면 나머지 카드는 보이지 않게 한다.
      reCards[i].innerHTML = "";
      reCards[i].style.opacity = 0;
    }
  }
}

//지역 버튼 클릭 시 실행
function reClicked(num) {
  // (확인용)입력한 숫자
  console.log("숫자는 : " + num);

  //버튼 색 초기화
  for (button of reButtons) {
    button.style.backgroundColor = "white";
    button.style.color = "black";
  }

  //누른 버튼 스타일 수정
  reButtons[num].style.backgroundColor = "#1D3266";
  reButtons[num].style.color = "white";

  // 판 보이기
  reSmall[0].style.display = "block";

  // 해당 행의 문자열 배열 출력
  console.log(arr[num], typeof arr[num]);

  // 리스트 초기화
  reSmallList.innerHTML = "";

  // 행정동별 버튼 생성
  let d = 0;
  for (ar of arr[num]) {
    console.log(ar, typeof ar);

    // let str = "";
    // str += `<li>`;
    // str += ar;
    // str += `</li>`;

    const li = document.createElement("li");
    li.innerText = ar;
    li.value = d;
    li.className += "village";
    li.onclick = function () {
      showCards(num, li.value);
    };

    reSmallList.appendChild(li);
    d++;
  }
  // 화살표 표시
  var j = 0;
  for (i of reMarks) {
    if (j == num) {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
    j++;
  }
}

function togleStar(num) {
  console.log("별! " + num);
  if (isLogin) {
    if (reStars[num].style.left == "-100%") {
      reStars[num].style.left = "0";
    } else {
      reStars[num].style.left = "-100%";
    }
  } else {
    restaurantModalLoginShow();
  }
}

// 처음 페이지에 들어오면 0번째 법정동 버튼을 클릭함
reClicked(0);
// 0번째 법정동의 0번째 행정동 버튼을 클릭함
showCards(0, 0);
