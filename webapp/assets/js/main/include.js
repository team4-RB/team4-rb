window.addEventListener("DOMContentLoaded", () => {
  let isLogin = false;

  if (isLogin) {
    // 헤더 불러오기(로그인)
    fetch("./../../header_login.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("header").innerHTML = data;
      });
  } else {
    // 헤더 불러오기(비로그인)
    fetch("./../../header.html") //임시
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("header").innerHTML = data;
      });
  }
  // 푸터 불러오기
  fetch("./../../footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
