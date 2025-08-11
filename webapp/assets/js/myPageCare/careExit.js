document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.querySelector(".exit-button");
  const reasonSelect = document.querySelector(".exit-select");
  const errorText = document.getElementById("reasonError");

  function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add("open");
    el.setAttribute("aria-hidden", "false");
  }
  window.closeModal = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("open");
    el.setAttribute("aria-hidden", "true");
  };

  window.checkWithdrawal = function () {
    const hasReservation = false; 
    closeModal('modalConfirm');
    openModal(hasReservation ? 'modalFail' : 'modalSuccess');
  };

  nextBtn.addEventListener("click", () => {
    if (!reasonSelect.value) {
      errorText.style.display = "block"; 
      return;
    }
    errorText.style.display = "none";
    openModal('modalConfirm');
  });
});
