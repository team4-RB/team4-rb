const pointcharge = document.querySelector('.modal');

const canclebutton = document.getElementById("deleteBtn");
const chargebutton = document.getElementById("chargeBtn");

chargebutton.addEventListener('click', function () {
  pointcharge.style.display = 'block';
});
canclebutton.addEventListener('click', function () {
  pointcharge.style.display = 'none';
});