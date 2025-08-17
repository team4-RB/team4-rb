// 후기 입력 창
const inputComment = document.getElementById("comment_text");
// 작성 버튼
const inputButton = document.getElementById("comment_button");
// 후기 리스트
const commentList = document.getElementsByClassName("comment_list");
// 하트 이미지
const heartImg = document.getElementById("heart_img");

// 로그인 토글
let isLogin=false;

// 작성된 후기 수
let count = 0;

// 입력창에 작성된 후기 내용을 가져와 후기 리스트에 추가하는 함수
function writeComment(){

  if(isLogin){
    // 입력된 내용 가져오기
    let commentText = inputComment.value.trim();
    // (확인용) 콘솔로 출력
    console.log("commentText : " + commentText);
    // 작성된 내용이 없는 경우 알림
    if(commentText == ""){
      alert("입력된 내용이 없습니다.");
    }else{
      // li 요소 생성
      const li = document.createElement("li");
      // comment 클래스 추가(서식을 주기 위해 추가)
      li.className += 'comment';
      li.id = 'comment_' + count;
      // 오늘 날짜 가져오기
      let today = new Date();
      // str 변수에 html 코드 추가
      let str = '<div class="comment_div"><div class="comment_number">';
      // 후기 번호 추가(count + 1)
      str += count+1;
      // 작성자 이름 추가
      str += `</div><div class="comment_author">`;
      str += `아무개`;
      // 입력된 내용 추가
      str += `</div><input id="input_`+ count +`" class="comment_context_input" value="`;
      str += commentText;
      // 오늘 날짜에서 년, 월, 일 가져오기
      str += `"><div class="comment_del"><button onclick="comment_delete(` + count + `)" type="button">삭제</button></div><div class="comment_edit"><button onclick="comment_edit(` + count + `)" type="button">수정</button></div><div class="comment_date">`;
      // 년도
      str += today.getFullYear();
      str += `-`;
      // 월
      // 1 ~ 9 월은 앞에 0을 붙여서 추가
      str += today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth();
      str += `-`;
      // 일
      str += today.getDate();
      str += `</div></div>`;

      // li 요소에 위에서 작성된 html 코드 추가
      li.innerHTML = str;
      // 후기 리스트에 li 요소를 자식 요소로 추가
      commentList[0].appendChild(li);
      // count 증감
      count++;
      // 입력창 초기화
      inputComment.value = "";
    }
  }else{
    careMemberModalLoginShow();
  }

    // 후기 리스트 초기화
    // commentList[0].innerHTML = "";
}

function comment_delete(num){
  const targetComment = document.getElementById('comment_'+num);
  const targetInput = document.getElementById('input_'+num);
  alert("삭제됨 - " + targetInput.value);
  targetComment.remove();
}
function comment_edit(num){
  const targetInput = document.getElementById('input_'+num);
  alert("수정됨 - " + targetInput.value);
}

function sendLetterButtonClick(){
  if(isLogin){
    confirmShowup();
  }else{
    careMemberModalLoginShow();
  }
}

function switchHeart(){
  if(isLogin){
    if(heartImg.style.right == "0%"){
      heartImg.style.right = "-100%";
    }else{
      heartImg.style.right = "0%";
    }
  }else{
    careMemberModalLoginShow();
  }
}

// 하트이미지 초기화 (right 값을 넣어주기 위함)
heartImg.style.right = "0%";