
const completebutton = document.querySelector('.btn_compelete');


const modal = document.querySelector('.modal');
const check = document.getElementById('check');




completebutton.addEventListener('click', function () {
  modal.style.display = 'block';
});
check.addEventListener('click', function () {
  modal.style.display = 'none';
});
