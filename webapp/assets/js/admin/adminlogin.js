const id = document.getElementById("id");
const pw = document.getElementById("pw");

link = "./../../app/admin/userManager.html";

function loginSuccess() {
  if (id.value === "admin" && pw.value === "admin") {
    location.href = link;
    alert("로그인 완료, 관리자 페이지 이동");
  } else {
    alert("로그인 실패!!");
  }
}
