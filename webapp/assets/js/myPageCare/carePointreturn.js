document.addEventListener('DOMContentLoaded', function () {
  // 모달 & 버튼
  var modal = document.getElementById('refundModal');
  var btn = document.getElementById('btn_return');
  var closeBtn = document.getElementById('refundConfirm');

  // 입력칸
  var input = document.getElementById('input_point');

  // 수수료 10%, 10 단위
  var charge = 0.10;
  var UNIT = 10;

  function onlyNum(s) {
    var str = String(s || '');
    var digits = str.replace(/[^0-9]/g, '');
    var n = parseInt(digits, 10);
    return isNaN(n) ? 0 : n;
  }
  function fmt(n) { return Number(n).toLocaleString('ko-KR'); }
  function toUnit(n) { return Math.floor(n / UNIT) * UNIT; }
  function getText(el) { return el ? (el.textContent || '') : ''; }

  // 보유 포인트 위치
  var tables = document.querySelectorAll('.point_table');
  var ownedTable = null;
  for (var i = 0; i < tables.length; i++) {
    var fixed = tables[i].querySelector('.point_fixed');
    var txt = getText(fixed).trim();
    if (txt.indexOf('보유 포인트') > -1) { ownedTable = tables[i]; break; }
  }
  var ownedRow = ownedTable ? ownedTable.querySelector('.point_row') : null;
  var ownedSpan = ownedRow ? ownedRow.querySelector('span') : null;
  var owned = onlyNum(getText(ownedSpan));

  // 신청 포인트 줄 만들기
  var label = document.querySelector('.point_fixed label[for="input_point"]');
  var applyTable = null;
  if (label) {
    var p = label;
    while (p && !(p.classList && p.classList.contains('point_table'))) p = p.parentElement;
    applyTable = p;
  }
  var applyRow = applyTable ? applyTable.querySelector('.point_row') : null;

  // 신청 옆에 예상 포인트 출력하기
  var hint = document.createElement('span');
  hint.style.marginLeft = '8px';
  hint.style.fontWeight = '600';
  hint.textContent = '예상 전환: 0 P';
  if (applyRow) applyRow.appendChild(hint);

  // 보유 옆에 잔여 포인트 출력하기
  var remain = document.createElement('span');
  remain.style.marginLeft = '8px';
  remain.style.fontWeight = '600';
  remain.textContent = '(잔여: ' + fmt(owned) + ' P)';
  if (ownedRow) ownedRow.appendChild(remain);

  // 표시 업데이트
  function showHint(n) {
    var u = toUnit(n);
    var afterFee = Math.floor(u * (1 - charge));
    hint.textContent = '예상 전환: ' + fmt(afterFee) + ' P';
  }
  function showRemain(n) {
    var u = toUnit(n);
    var left = Math.max(owned - u, 0);
    remain.textContent = '(잔여: ' + fmt(left) + ' P)';
  }

  // 초기 표시
  if (input) {
    var init = onlyNum(input.value);
    showHint(init);
    showRemain(init);
  }

  // 숫자만 입력(붙여넣기 핸들러 없음)
  if (input) {
    input.addEventListener('keydown', function (e) {
      var allow = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End', 'Enter'];
      if (e.ctrlKey || e.metaKey) return;
      if (allow.indexOf(e.key) > -1) return;
      if (/^[0-9]$/.test(e.key)) return;
      e.preventDefault();
    });

    var lastAlertAt = 0;
    function throttleAlert(msg) {
        alert(msg);
      }
    

    if (input) {
      // 문자는 입력되지 않게 입력하던 숫자는 그대로
      input.addEventListener('input', function () {
        var raw = String(input.value || '');
        var digitsOnly = raw.replace(/[^0-9]/g, '');
        if (raw !== digitsOnly) {
          input.value = digitsOnly;
          throttleAlert('숫자만 입력해 주십시오.');
        }
        var n = onlyNum(input.value);
        showHint(n);
        showRemain(n);
      });
    };

    // 환급 신청 클릭
    if (btn) {
      btn.addEventListener('click', function () {
        var raw = onlyNum(input ? input.value : '');

        // 보유 포인트 초과
        if (raw > owned) {
          alert('보유한 포인트보다 많은 포인트를 입력하셨습니다.');
          if (input) input.focus();
          return;
        }

        // 1의 자리 있으면 나오는 알럿
        if (raw % 10 !== 0) {
          alert('10의 단위로 입력해 주십시오.');
          if (input) input.focus();
          return;
        }

        // 0원 거부 알럿
        if (raw === 0) {
          alert('0원은 환급할 수 없습니다.');
          if (input) input.focus();
          return;
        }

        // 표시되는 값 계속 바꾸기
        input.value = fmt(raw);
        showHint(raw);
        showRemain(raw);

        if (modal) modal.style.display = 'flex';
      });
    }

    // 모달 닫기
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        if (modal) modal.style.display = 'none';
      });
    }
  }
});
