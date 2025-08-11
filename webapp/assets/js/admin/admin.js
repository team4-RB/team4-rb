window.addEventListener('DOMContentLoaded', () => {
  fetch('/team04-RB_frontend/webapp/app/admin/sidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('sidebar').innerHTML = data;
    });
});

const id=document.getElementById("id");
const pw=document.getElementById("pw");

const link = "./../../app/admin/userManager.html";
function linkHref() {
  location.href=link;
}

function cancle() {
  linkHref();
}
function loginSuccess(){
  if(id.value==='admin' && pw.value==='admin') {
    alert("로그인 완료, 관리자 페이지 이동");
    location.href=link;
  } else {
    alert("로그인 실패!!")
  }
};