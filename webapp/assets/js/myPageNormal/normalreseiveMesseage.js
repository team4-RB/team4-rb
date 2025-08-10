// 제목을 누르면 나오는 모달창
const text = document.getElementById("headline");

//받은 쪽지 읽기 모달창
const reseivemodal = document.querySelector('.modal');

//쪽지가 삭제되었습니다 모달창
const deletemodal = document.querySelector('.modal_delete');

//확인 버튼
const checkbutton = document.getElementById("deletecheckBtn");
//삭제 버튼
const deletebutton = document.getElementById("deleteBtn");
const deleteBtn = document.getElementById("delete");

//X 버튼
const sendclose = document.getElementById("sendxbutton");



text.addEventListener('click', function () {
  reseivemodal.style.display = 'block';
});

deletebutton.addEventListener('click', function () {
  reseivemodal.style.display = 'none';
  deletemodal.style.display = 'block';
});
checkbutton.addEventListener('click', function () {
  deletemodal.style.display = 'none';
});



sendclose.addEventListener('click', function () {
  reseivemodal.style.display = 'none';
});



deleteBtn.addEventListener('click', function () {
  deletemodal.style.display = 'block';
});
