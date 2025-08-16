const input1 = document.getElementById("pw_input");
const msg = document.getElementById("msg_box");

let isPw = false;
let checkPw = false;

input1.addEventListener("input", () => {
  const val = input1.value;

  const pattern = /^[a-zA-Z]+[0-9]+[!@#$%^&*?_]+.{0,7}$/;

  if (pattern.test(val)) {
    msg.style.display = "none";
    isPw = true;
  } else {
    msg.style.display = "block";
    isPw = false;
  }
});

const input2 = document.getElementById("pw_check_input");
const msg2 = document.getElementById("msg_box2");
const cp = document.querySelector(".correct_pw");
const ep = document.querySelector(".error_pw_check_msg");
input2.addEventListener("input", () => {
  const val2 = input2.value;
  if (input1.value === val2) {
    msg2.style.display = "block";
    ep.style.display = "none";
    checkPw = true;
  } else {
    msg2.style.display = "block";
    cp.style.display = "none";
    ep.style.display = "block";
    checkPw = false;
  }
});

function nextPg() {
  if (!input1.value || !input2.value || !isPw || !checkPw) {
    alert("값 입력");
  } else {
    location.href = "./../../../webapp/app/login/findPasswordResult.html";
  }
}
