const pwChecktext = document.getElementById("pwaccord");
const pwCheck = document.querySelector('checkBtn');
const inputPw = document.getElementById("pw_input");

let correct = "123456";

function chPw(){
  if(inputPw.value == correct){
    window.location.href="./normalModify.html";
  }else{
    alert("틀림");
  }
}