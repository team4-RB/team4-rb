document.addEventListener("DOMContentLoaded", function () {
  const confirmDeleteBtn = document.getElementById("confirmDelete");
  const cancelDeleteBtn = document.getElementById("cancelDelete");

  confirmDeleteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "./carePost.html";
  });

  cancelDeleteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.hash = "";
  });
});
