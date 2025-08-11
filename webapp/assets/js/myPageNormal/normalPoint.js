const pointcharge = document.querySelector('.modal');
const pointhistory = document.querySelector('.modal_history');

const canclebutton = document.getElementById("deleteBtn");
const cancleebutton = document.getElementById("deletebutton");
const chargebutton = document.getElementById("chargeBtn");
const chargehisbutton = document.getElementById("chargehis");


chargebutton.addEventListener('click', function(e) {
  e.preventDefault();
  pointcharge.style.display = 'block';
});
chargehisbutton.addEventListener('click', function(e) {
  e.preventDefault();
  pointhistory.style.display = 'block';
});
canclebutton.addEventListener('click', function() {
  pointcharge.style.display = 'none';
});
cancleebutton.addEventListener('click', function () {
  pointhistory.style.display = 'none';
});

function openpointcharge(){
  pointcharge.style.display = 'none';
}
function openpointhis(){
  pointhistory.style.display = 'none';
}