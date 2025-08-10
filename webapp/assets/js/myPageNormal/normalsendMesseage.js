// 제목을 누르면 나오는 모달창
const text = document.getElementById("headline");

//받은 쪽지 읽기 모달창
const sendmodal = document.querySelector('.modal');
//쪽지 보내기 모달창
const reseivemodal = document.querySelector('.modal_reseive');
//쪽지 보냈습니다 모달창
const messeagemodal = document.querySelector('.modal_messeage');
//쪽지가 삭제되었습니다 모달창
const deletemodal = document.querySelector('.modal_delete');

//답장 버튼
const sendbutton = document.getElementById("sendBtn");
//삭제 버튼
const deletebutton = document.getElementById("deleteBtn");
const deleteBtn = document.getElementById("delete");
//보내기 버튼
const reseivebutton = document.getElementById("reseiveBtn");
//취소 버튼
const canclebutton = document.getElementById("cancleBtn");
//확인 버튼
const messeagecheckbutton = document.getElementById("messeagecheckBtn");
const deletecheckbutton = document.getElementById("deletecheckBtn");

//X 버튼
const sendclose = document.getElementById("sendxbutton");
const reseiveclose = document.getElementById("reseivexbutton");


text.addEventListener('click', function () {
  sendmodal.style.display = 'block';
});

deletebutton.addEventListener('click', function () {
  sendmodal.style.display = 'none';
  deletemodal.style.display = 'block';
});

sendbutton.addEventListener('click', function () {
  sendmodal.style.display = 'none';
  reseivemodal.style.display = 'block';
});

reseivebutton.addEventListener('click', function () {
  reseivemodal.style.display = 'none';
  messeagemodal.style.display = 'block';
});

messeagecheckbutton.addEventListener('click', function () {
  messeagemodal.style.display = 'none';
});

deletecheckbutton.addEventListener('click', function () {
  deletemodal.style.display = 'none';
});

canclebutton.addEventListener('click', function () {
  reseivemodal.style.display = 'none';
});

sendclose.addEventListener('click', function(){
  sendmodal.style.display = 'none';
});

reseiveclose.addEventListener('click', function () {
  reseivemodal.style.display = 'none';
});

deleteBtn.addEventListener('click', function () {
  deletemodal.style.display = 'block';
});
