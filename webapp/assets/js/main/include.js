window.addEventListener('DOMContentLoaded', () => {
  // 헤더 불러오기
  fetch('/team04-rb/webapp/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // 푸터 불러오기
  fetch('/team04-rb/webapp/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
