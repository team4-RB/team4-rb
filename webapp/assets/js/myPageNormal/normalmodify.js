const openmail = document.querySelector('.modal_mail');
const openaddress = document.querySelector('.modal_address');
const openphone = document.querySelector('.modal_phone');
const openemail = document.querySelector('.modal_email');
const openpw = document.querySelector('.modal_pw');

const addressmodal = document.getElementById("addressbutton");
const mailmodal = document.getElementById("mailbutton");
const phonemodal = document.getElementById("phonebutton");
const emailmodal = document.getElementById("emailbutton");
const pwmodal = document.getElementById("pwbutton");

const modalclose = document.getElementById("saveConfirmBtn");

addressmodal.addEventListener('click', function(e) {
  e.preventDefault();
  openaddress.style.display = 'block';
});
mailmodal.addEventListener('click', function(e) {
  e.preventDefault();
  openmail.style.display = 'block';
});
phonemodal.addEventListener('click', function(e) {
  e.preventDefault();
  openphone.style.display = 'block';
});
emailmodal.addEventListener('click', function(e) {
  e.preventDefault();
  openemail.style.display = 'block';
});
pwmodal.addEventListener('click', function(e) {
  e.preventDefault();
  openpw.style.display = 'block';
});

function openmailModalClose(){
  openmail.style.display = 'none';
}
function openaddressModalClose(){
  openaddress.style.display = 'none';
}
function openphoneModalClose(){
  openphone.style.display = 'none';
}
function openpwModalClose(){
  openpw.style.display = 'none';
}
function openemailModalClose(){
  openemail.style.display = 'none';
}
