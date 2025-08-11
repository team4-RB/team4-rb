window.addEventListener("DOMContentLoaded", () => {
  fetch("../../app/admin/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;
    });
});

const id = document.getElementById("id");
const pw = document.getElementById("pw");

function loginSuccess() {
  if (id.value === "admin" && pw.value === "admin") {
    location.href = link;
    alert("로그인 완료, 관리자 페이지 이동");
  } else {
    alert("로그인 실패!!");
  }
}
