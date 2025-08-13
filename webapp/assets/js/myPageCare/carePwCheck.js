// 페이지 열리면 실행
document.addEventListener('DOMContentLoaded', () => {
  // 변수 출력
  const form = document.querySelector('.pw_check form');
  const pwInput = form.querySelector('input[type="password"]');
  const errorDiv = form.querySelector('div');
  const btn = form.querySelector('button');

  // 맞는 비번이랑 이동할 페이지
  const CORRECT_PW = '12345678';
  const NEXT_PAGE = "./../../app/myPageCare/careProfile.html";

  // 에러 문구는 처음에 숨기기
  errorDiv.style.display = 'none';

  // 버튼 누르면 체크 시작
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // 비번이 맞으면 에러 숨기고 다음 페이지로
    if (pwInput.value.trim() === CORRECT_PW) {
      errorDiv.style.display = 'none';
      window.location.href = NEXT_PAGE;
    } else {
      // 틀리면 에러 보여주고 입력칸에 커서 주기
      errorDiv.textContent = '일치하지 않는 비밀번호 입니다';
      errorDiv.style.display = 'block';
      pwInput.focus();
      pwInput.select();
    }
  });
});
