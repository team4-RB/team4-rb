const addBtn = document.querySelector(".add_btn"); 
const cancleBtn = document.querySelector(".cancle_btn");
const link = "./../../app/admin/notice.html";
function linkHref() {
  location.href=link;
}
addBtn.addEventListener('click', ()=> {
  alert("추가 완료")
  linkHref();
});

cancleBtn.addEventListener('click', () => {
  linkHref();
});