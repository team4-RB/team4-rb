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

function checkId() {
  event.preventDefault();
  const input = document.getElementById("get_id");
  const checkIdBox = document.querySelector(".check_id");
  const correctId = document.querySelector(".correct_id");
  const errorID = document.querySelector(".error_id");
  const val = input.value.trim();
  if (val === "test") {
    checkIdBox.style.display = "block";
    correctId.style.display = "block";
    errorID.style.display = "none";
  } else {
    checkIdBox.style.display = "block";
    correctId.style.display = "none";
    errorID.style.display = "block";
  }
}

function nextPg() {
  const input2 = document.getElementById("get_id");
  const checkedRadio = document.querySelector('input[name="type"]:checked');
  const nameInput = document.getElementById("name_input");
  const phoneInput = document.getElementById("phone_input");
  const input = document.getElementById("author_number");
  const val = input.value.trim();
  if (
    !input.value ||
    !nameInput.value ||
    !phoneInput.value ||
    !input2.value ||
    !/^\d{6}$/.test(val) ||
    !checkedRadio
  ) {
    alert("입력해주세요");
  } else {
    location.href = "./../../../webapp/app/login/findPasswordResult.html";
    console.log(input.value);
    console.log(nameInput.value);
    console.log(phoneInput.value);
  }
}
