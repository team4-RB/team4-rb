

// function openQuitModal(){
//   checkBox.style.display = 'block';
// }

// function cancelQuit() {
//   checkBox.style.display = 'none';
// }
// function checkmodal() {
//   checkBox.style.display = 'none';
//   doneBox.style.display = 'block';
// }



// const nextBtn   = document.getElementById("next");
// const checkBox  = document.getElementById("checkModal");
// const doneBox   = document.getElementById("doneModal");

window.openQuitModal = function () {
  document.getElementById('checkModal').style.display = 'block';
};
window.cancelQuit = function () {
  document.getElementById('checkModal').style.display = 'none';
};
window.showDoneModal = function () {
  document.getElementById('checkModal').style.display = 'none';
  document.getElementById('doneModal').style.display = 'block';
};