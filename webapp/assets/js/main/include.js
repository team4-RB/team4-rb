window.addEventListener('DOMContentLoaded', () => {

  let isLogin = false;

  if(isLogin){
    // 헤더 불러오기(로그인)
  fetch('/team04-RB_frontend/webapp/header_login.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });
  }else{
    // 헤더 불러오기(비로그인)
  fetch('/team04-RB_frontend/webapp/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });
  }
  // 푸터 불러오기
  fetch('/team04-RB_frontend/webapp/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
