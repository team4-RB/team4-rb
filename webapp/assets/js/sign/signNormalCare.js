function checkId() {
  event.preventDefault();
  const input = document.getElementById("get_id");
  const checkIdBox = document.querySelector(".id_err_box");
  const correctId = document.querySelector(".ok_id_msg");
  const errorID = document.querySelector(".err_id_msg");
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

const input1 = document.getElementById("pw_input");
const msg = document.getElementById("msg_box");

input1.addEventListener("input", () => {
  const val = input1.value;

  const pattern = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

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
email.addEventListener("input", () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(email.value)) {
    emailBoxError.style.display = "block";
  } else {
    emailBoxError.style.display = "none";
  }
});
