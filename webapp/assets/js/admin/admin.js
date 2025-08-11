window.addEventListener("DOMContentLoaded", () => {
  fetch("../../app/admin/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;
    });
});
