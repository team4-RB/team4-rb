window.addEventListener('DOMContentLoaded', () => {
  fetch('/team04-RB_frontend/webapp/app/admin/sidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('sidebar').innerHTML = data;
    });
});
