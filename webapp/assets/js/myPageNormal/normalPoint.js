const pointcharge = document.querySelector('.modal');
const pointhistory = document.querySelector('.modal_history');

const canclebutton = document.getElementById("deleteBtn");
const chargebutton = document.getElementById("chargeBtn");
const chargehisbutton = document.getElementById("chargehis");


chargebutton.addEventListener('click', function () {
  pointcharge.style.display = 'block';
});
canclebutton.addEventListener('click', function () {
  pointcharge.style.display = 'none';
});
chargehisbutton.addEventListener('click', function () {
  pointhistory.style.display = 'block';
});
canclebutton.addEventListener('click', function () {
  pointhistory.style.display = 'none';
});
