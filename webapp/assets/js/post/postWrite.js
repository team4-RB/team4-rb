const modify = document.querySelector(".button_write");
const check = document.getElementById("writecheck");
const cancle = document.getElementById("writecancel");
const reportcheck = document.getElementById("reportcheck");


const writecheckmodalmodal = document.querySelector('.writecheckmodal');
const writemodal = document.querySelector('.writemodal');


modify.addEventListener('click', function (e) {
  e.preventDefault();
  writecheckmodalmodal.style.display = 'block';
});
cancle.addEventListener('click', function () {
  writecheckmodalmodal.style.display = 'none';
});
check.addEventListener('click', function () {
  writecheckmodalmodal.style.display = 'none';
  writemodal.style.display = 'block';
});


