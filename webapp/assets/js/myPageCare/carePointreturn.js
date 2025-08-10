const modal = document.getElementById("refundModal");
const btn = document.getElementById("btn_return");
const close = document.getElementById("refundConfirm");

btn.onclick = function(){
  modal.style.display="block";
  modal.style.display="flex";
}

close.onclick = function() {
  modal.style.display="none";
}