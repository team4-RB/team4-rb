const reButtons = document.getElementsByClassName("region_button");
const reMarks = document.getElementsByClassName("region_mark");
const reSmall = document.getElementsByClassName("region_small");
const reSmallList = document.getElementById("region_small_list");
const reCards = document.getElementsByClassName("restaurant_card");

var regionNum = 0;
var arr = [
  ['방배 1동','방배 2동','방배 3동','방배 4동','방배 본동'],
  ['반포 1동','반포 2동','반포 3동','반포 4동','반포 본동'],
  ['서초 1동','서초 2동','서초 3동','서초 4동'],
  ['양재 1동','양재 2동'],
  ['내곡동'],
  ['잠원동']
];

var restaurants = [
  ['춘리', '방배동', '9시~11시', '010-1234-5678'],
  ['오삼불고기', '역삼동', '8시~1시', '010-1234-5678'],
  ['토스트', '강남', '9시~18시', '010-1234-5678']
];







function showCards(num, value){
  console.log("num은 "+ num + ", value는 " + value);
  for(let i = 0 ;i < 4;i++){
    if(i < restaurants.length){
      let str = "";
      str += `<div class="restaurant_name">` + restaurants[i][0];
      str += `</div><div class="restaurant_introduce"><div class="restaurant_info"><div>` + restaurants[i][1];
      str += `</div><div>` + restaurants[i][2];
      str += `</div><div>` + restaurants[i][3];
      str += `</div></div><div class="restaurant_mark"><div>` + "별";
      str += `</div><div>` + "찜하기";
      str += `</div></div></div></div>`;
      reCards[i].innerHTML = str;
      reCards[i].style.opacity = 1;
    }else{
      reCards[i].innerHTML = "";
      reCards[i].style.opacity = 0;
    }
    
  }
}

function reClicked(num){
  // 입력한 숫자
  console.log("숫자는 : " + num);

  // 판 보이기
  reSmall[0].style.display = "block";

  // 해당 행의 문자열 배열 출력
  console.log(arr[num], typeof arr[num]);

  // 리스트 초기화
  reSmallList.innerHTML = "";

  // 동네별 버튼 생성
  let d = 0;
  for(ar of arr[num]){
    console.log(ar, typeof ar);

    // let str = "";
    // str += `<li>`;
    // str += ar;
    // str += `</li>`;

    const li = document.createElement("li");
    li.innerText = ar;
    li.value = d;
    li.onclick = function(){
      showCards(num, li.value);
    };

    reSmallList.appendChild(li);
    d++;
  }
  




  var j = 0;
  for(i of reMarks){
    if(j==num){
      i.style.display="block";
    }else{
      i.style.display="none";
    }
    j++;
  }

  



}