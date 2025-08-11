const notmodal = document.querySelector('.notmodal');
const buttonwrite = document.getElementById("button_write");
const check = document.getElementById("check");
const cancle = document.getElementById("cancle");


buttonwrite.addEventListener('click', function () {
  notmodal.style.display = 'block';
});
check.addEventListener('click', function () {
  notmodal.style.display = 'none';
});
cancle.addEventListener('click', function () {
  notmodal.style.display = 'none';
});
