document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.pw_check form');
  const pwInput = form.querySelector('input[type="password"]');
  const errorDiv = form.querySelector('div');
  const btn = form.querySelector('button');

  const CORRECT_PW = '12345678'; 
  const NEXT_PAGE = "./../../app/myPageCare/careProfile.html";

  errorDiv.style.display = 'none';

  btn.addEventListener('click', (e) => {
    e.preventDefault(); 

    if (pwInput.value.trim() === CORRECT_PW) {
      errorDiv.style.display = 'none';
      window.location.href = NEXT_PAGE;
    } else {
      errorDiv.textContent = '일치하지 않는 비밀번호 입니다';
      errorDiv.style.display = 'block';
      pwInput.focus();
      pwInput.select();
    }
  });
});
