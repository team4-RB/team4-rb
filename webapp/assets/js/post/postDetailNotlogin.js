
const del = document.querySelector('.button_del');
const check = document.getElementById("check");
const notcheck = document.getElementById("notcheck");
const cancle = document.getElementById("cancle");
const checkmodal = document.querySelector('.checkmodal');
const notmodal = document.querySelector('.notmodal');

del.addEventListener('click', function () {
  checkmodal.style.display = 'block';
});
notcheck.addEventListener('click', function () {
  notmodal.style.display = 'none';
});

cancle.addEventListener('click', function () {
  checkmodal.style.display = 'none';
});
check.addEventListener('click', function () {
  checkmodal.style.display = 'none';
});