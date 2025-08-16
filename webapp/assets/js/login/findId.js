function sendMsg() {
  event.preventDefault();
  const alertBox = document.querySelector(".alert");
  const phoneBox = document.querySelector(".box_phone");
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

// valTF= /^\d{6}$/.test(val);
const regex = /^\d{6}$/;

// console.log(regex.test(val))

function checkMsg() {
  // event.preventDefault();
  const input = document.getElementById("author_number");
  const errorBoxMsg = document.querySelector(".error_box_msg");
  const errorMsg = document.querySelector(".error_msg");
  const okMsg = document.querySelector(".okay_msg");
  const val = input.value.trim();
  const isAuthor = /^\d{6}$/.test(val);
  if (isAuthor) {
    errorBoxMsg.style.display = "block";
    okMsg.style.display = "block";
    errorMsg.style.display = "none";
  } else {
    errorBoxMsg.style.display = "block";
    okMsg.style.display = "none";
    errorMsg.style.display = "block";
  }
}
// console.log(valTF)
// &&valTF
function nextPg() {
  const nameInput = document.getElementById("name_input");
  const phoneInput = document.getElementById("phone_input");
  const input = document.getElementById("author_number");
  const val = input.value.trim();
  const isAuthor = /^\d{6}$/.test(val);
  if (
    !input.value ||
    !nameInput.value ||
    !phoneInput.value ||
    !/^\d{6}$/.test(val)
  ) {
    alert("입력해주세요");
  } else {
    location.href = "./../../../webapp/app/login/findIdResult.html";
  }
}
