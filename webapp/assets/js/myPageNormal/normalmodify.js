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

addressmodal.addEventListener('click', function () {
  openaddress.style.display = 'block';
});
mailmodal.addEventListener('click', function () {
  openmail.style.display = 'block';
});
phonemodal.addEventListener('click', function () {
  openphone.style.display = 'block';
});
emailmodal.addEventListener('click', function () {
  openmail.style.display = 'block';
});
pwmodal.addEventListener('click', function () {
  openpw.style.display = 'block';
});

modalclose.addEventListener('click', function () {
  modal.style.display = 'none';
});