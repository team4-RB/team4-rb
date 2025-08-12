const input = document.getElementById("get_id_input");
const checkIdBox = document.querySelector(".id_err_box");
const correctId = document.querySelector(".ok_id_msg");
const errorID = document.querySelector(".err_id_msg");
// const val = input.value.trim();
function checkId() {
  // event.preventDefault();
  console.log(input.value);
  if (input.value === "test") {
    checkIdBox.style.display = "block";
    correctId.style.display = "block";
    errorID.style.display = "none";
  } else {
    checkIdBox.style.display = "block";
    correctId.style.display = "none";
    errorID.style.display = "block";
  }
}

const input1 = document.getElementById("pw_input");
const msg = document.getElementById("msg_box");

input1.addEventListener("input", () => {
  const val = input1.value;
  console.log(val)
  const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  if (pattern.test(val)) {
    msg.style.display = "none";
  } else {
    msg.style.display = "block";
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
  } else {
    msg2.style.display = "block";
    cp.style.display = "none";
    ep.style.display = "block";
  }
});

const email = document.getElementById("email");
const errEmail = document.querySelector(".error_email_msg");
const emailBoxError = document.getElementById("msg_box_email");
const correctEmail = document.querySelector(".correct_email");
email.addEventListener("input", () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(email.value)) {
    emailBoxError.style.display = "block";
    errEmail.style.display="none";
    correctEmail.style.display="block"

  } else {
    emailBoxError.style.display = "block";
    errEmail.style.display="block";
    correctEmail.style.display="none"
  }
});


function sendMsg() {
  event.preventDefault();
  console.log('dd')
  const alertBox = document.querySelector(".alert");
  const phoneBox = document.querySelector(".sign_phone");
  const timer = document.querySelector(".timer");
  phoneBox.style.width = "120%";
  alertBox.textContent = "인증번호가 발송되었습니다.";
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
    phoneBox.style.width = "100%";
  }, 6000);

  let time = 60;
  const intervalId = setInterval(() => {
    timer.innerHTML = `<p>${time}</p>`;
    time--;

    if (time < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function checkMsg() {
  event.preventDefault();
  const input = document.getElementById("author_number");
  const errorBoxMsg = document.querySelector(".error_box_msg");
  const errorMsg = document.querySelector(".error_msg");
  const okMsg = document.querySelector(".okay_msg");
  const val = input.value.trim();
  if (/^\d{6}$/.test(val)) {
    errorBoxMsg.style.display = "block";
    okMsg.style.display = "block";
    errorMsg.style.display = "none";
  } else {
    errorBoxMsg.style.display = "block";
    okMsg.style.display = "none";
    errorMsg.style.display = "block";
  }
}

const normalRadio = document.querySelector('#normal');
const careRadio = document.querySelector('#id');
const sectionNormal = document.querySelector(".section_normal")
const sectionCare = document.querySelector(".section_care")

function checkNormal() {
  sectionCare.style.display="none";
  sectionNormal.style.display="block";
}

function checkCare() {
  sectionCare.style.display="block";
  sectionNormal.style.display="none";
}

const nameInput= document.querySelector("#name")
const phone= document.querySelector("#phone")
const authorNum= document.querySelector("#author_number")
const address= document.querySelector(".address")
const detailAddress= document.querySelector(".detail_address")
const link= './../../app/sign/signSucces.html';

function hrefLink() {
  location.href = link;
}

function nextPg() {
  event.preventDefault();
  if(!input.value&&!input1&&!input2&&!email&&!nameInput&&!phone&&!authorNum&&!address&&!detailAddress) {
    alert('값을 넣어주세요')
  }else {
    alert('다음 페이지로 이동')
    hrefLink()
  }
}