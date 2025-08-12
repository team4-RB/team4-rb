const inputComment = document.getElementById("comment_text");
const inputButton = document.getElementById("comment_button");
const commentList = document.getElementsByClassName("comment_list");

let count = 0;

function writeComment(){
  let commentText = inputComment.value.trim();
  console.log("commentText : " + commentText);
  if(commentText == ""){
    alert("입력된 내용이 없습니다.");
  }else{

    const li = document.createElement("li");
    li.className += 'comment';

    let today = new Date();

    let str = '<div><div class="comment_number">';
    str += count+1;
    str += `</div><div class="comment_author">`;
    str += `아무개`;
    str += `</div><div class="comment_context">`;
    str += commentText;
    str += `</div><div class="comment_date">`;
    str += today.getFullYear();
    str += `-`;
    str += today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth();
    str += `-`;
    str += today.getDate();
    str += `</div></div>`;

    li.innerHTML = str;

    commentList[0].appendChild(li);

    count++;
    inputComment.value = "";
  }
    // commentList[0].innerHTML = "";
}