const STORAGE_KEY = 'careModifyForm.v1';

document.addEventListener('DOMContentLoaded', function () {

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const values = JSON.parse(saved);
    const inputs = document.querySelectorAll('.caremodify input, .caremodify select, .caremodify textarea');
    inputs.forEach((input, index) => {
      if (values[index] !== undefined) {
        input.value = values[index];
      }
    });
  }
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('click', function (e) {
      if (e.target.tagName === 'BUTTON') {
        e.preventDefault();

        const inputs = document.querySelectorAll('.caremodify input, .caremodify select, .caremodify textarea');
        const currentValues = Array.from(inputs).map(input => input.value);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentValues));

        document.getElementById('saveSuccessModal').style.display = 'block';
      }
    });
  }
  const confirmBtn = document.getElementById('saveConfirmBtn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', function () {
      document.getElementById('saveSuccessModal').style.display = 'none';
    });
  }
});
