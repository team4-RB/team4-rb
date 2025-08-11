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
