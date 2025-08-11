const next = document.getElementById("next");
const check = document.getElementById("check");
const cancle = document.getElementById("cancle");

const checkmodal = document.querySelector('.checkmodal');
const modal = document.querySelector('.modal');

next.addEventListener('click', function(e) {
  e.preventDefault();
  checkmodal.style.display = 'block';
});
check.addEventListener('click', function () {
  checkmodal.style.display = 'none';
  modal.style.display = 'block'; 
});
cancle.addEventListener('click', function () {
  checkmodal.style.display = 'none';
});

function openquitmodal(){
  e.preventDefault();
  checkmodal.style.display = 'block';
}

function checkmodal(){
  e.preventDefault();
  checkmodal.style.display = 'none';
  modal.style.display='block';
}

function canclemodal() {
  e.preventDefault();
  checkmodal.style.display = 'none';
}

