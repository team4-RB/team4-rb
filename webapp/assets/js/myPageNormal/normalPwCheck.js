const pwChecktext = document.getElementById("pwaccord");
const pwCheck = document.querySelector('checkBtn');
const inputPw = document.getElementById("pw_input");

let correct = "12345678";

function chPw(){
  if(inputPw.value == correct){
    window.location.href="./normalModify.html";
  }else{
    pwChecktext.style.display = 'block';
  }
}