const complete = document.getElementById("complete");
const cancel = document.getElementById("cancel");
const completecheck = document.getElementById("completeBtn");
const cancelcheck = document.getElementById("cancelBtn");

const completemodal = document.querySelector(".completemodal");
const cancelmodal = document.querySelector(".cancelmodal");

complete.addEventListener('click', function (e) {
  e.preventDefault();
  completemodal.style.display = 'block';
});
cancel.addEventListener('click', function (e) {
  e.preventDefault();
  cancelmodal.style.display = 'block';
});
completecheck.addEventListener('click', function (e) {
  e.preventDefault();
  completemodal.style.display = 'none';
});
cancelcheck.addEventListener('click', function (e) {
  e.preventDefault();
  cancelmodal.style.display = 'none';
});
