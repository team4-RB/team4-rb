document.addEventListener('DOMContentLoaded', () => {
  const dayButtons = document.querySelectorAll('.possible_date button:not(#check)');
  const checkButton = document.getElementById('check');

  dayButtons.forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('selected');
    });
  });

  checkButton.addEventListener('click', () => {
    const selectedDays = [];
    dayButtons.forEach(button => {
      if (button.classList.contains('selected')) {
        selectedDays.push(button.textContent);
      }
    });

    console.log("선택된 요일:", selectedDays);
  });
});
