// 페이지 열리면 시작
document.addEventListener('DOMContentLoaded', function () {
  // 입력칸 모으기
  var fields = Array.from(document.querySelectorAll('.caremodify input, .caremodify select, .caremodify textarea'));
  // 모달 먼저 선언
  var saveModal = document.getElementById('saveSuccessModal');
  var findModal = document.getElementById('findModal');

  // 값 저장한거 가져오기
  var saved = localStorage.getItem('careModifyForm');
  if (saved && saved[0] === '[') {
    var values = JSON.parse(saved);
    fields.forEach(function (input, i) {
      if (values[i] !== undefined) input.value = values[i];
    });
  }

  // 폼안에 있는거 버튼 클릭처리
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('click', function (e) {
      if (e.target.tagName !== 'BUTTON') return;
      e.preventDefault();

      // 우편번호 찾기 버튼 클릭시 우편번호 모달 출력
      if (e.target.textContent.indexOf('우편번호 찾기') !== -1) {
        findModal.style.display = 'flex';
        return;
      }

      // 다른 버튼들은 정보수정 모달
      var currentValues = fields.map(function (input) { return input.value; });
      localStorage.setItem('careModifyForm', JSON.stringify(currentValues));
      saveModal.style.display = 'flex';
    });
  }

  // 저장된 것 닫기
  var saveOkBtn = document.getElementById('saveConfirmBtn');
  if (saveOkBtn) {
    saveOkBtn.addEventListener('click', function () {
      saveModal.style.display = 'none';
    });
  }

  // 우편모달 닫기
  var findOkBtn = document.querySelector('#findModal button');
  if (findOkBtn) {
    findOkBtn.addEventListener('click', function () {
      findModal.style.display = 'none';
    });
  }
});
