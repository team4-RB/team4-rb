
const cancle = document.getElementById("cancle");
const deletebutton = document.querySelector('.button_delete');

const checkmodal = document.querySelector('.checkmodal');

deletebutton.addEventListener('click', function (e) {
  e.preventDefault();
  checkmodal.style.display = 'block';
});
cancle.addEventListener('click', function () {
  checkmodal.style.display = 'none';
});