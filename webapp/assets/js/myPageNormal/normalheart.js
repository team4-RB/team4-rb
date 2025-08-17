const hearts = document.getElementsByClassName("heart_img");
const cardRow1 = document.getElementById("card_list_1");
const cardRow2 = document.getElementById("card_list_2");

let cnt = 0;

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.className += "care_card";

  let str = "";
  str += `<div class="heart_img_box"><img onclick="switchHeart(`;
  str += i;
  str += `)" class="heart_img" src="./../../assets/img/careMember/heart_icon.png"></div><a href="./../careMember/careMemberDetail.html" class="profile"><div class="profile_pic_box"><img class="profile_pic" src="./../../assets/img/careMember/profilePicCare.png"></div><div class="profile_name">`;
  str += `김괭이`;
  str += `</div><div class="day_row">`;
  str += `<div class="day">화</div>`;
  str += `<div class="day">화</div>`;
  str += `</div><div class="profile_intro"><div class="short_intro">`;
  str += `안녕하세요!! 김괭입니다.`;
  str += `</div><div class="long_intro"><p>`;
  str += `장애인 활동사 교육 이수 완료`;
  str += `</p><p>`;
  str += `서울 거주`;
  str += `</p></div></div></a>`;

  li.innerHTML = str;

  if (i < 3) {
    cardRow1.appendChild(li);
  }
  // switchHeart(i);
}

function switchHeart(num) {
  console.log(hearts[num].style.left);
  if (hearts[num].style.left == "0%") {
    hearts[num].style.left = "-100%";
  } else {
    hearts[num].style.left = "0%";
  }
  // cardRow1.removeChild(li);
}
