document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.querySelector('.div_add button');
  const matchingAddModal = document.getElementById('matching_add');
  const cancelModalButton = document.getElementById('cansel_modal');
  const months = document.querySelectorAll('.month');
  const element = document.getElementById('active');

  if (addButton) {
    addButton.addEventListener('click', function () {
      matchingAddModal.style.display = 'flex';
    });
  }



  months.forEach(month => {
    month.addEventListener('click', function (event) {
      for(i of months) {
        if (event.type === 'click'){
          month.id = "active";
        }
        else {
          months.removeAttribute('id');
        }
      }
    });
  });


  if (cancelModalButton) {
    cancelModalButton.addEventListener('click', function (e) {
      e.preventDefault();
      matchingAddModal.style.display = 'none';
    });
  }
  const successModalButton = document.getElementById('success_modal');
  const completeModal = document.getElementById('complete_modal');
  if (successModalButton) {
    successModalButton.addEventListener('click', function (e) {
      e.preventDefault();
      matchingAddModal.style.display = 'none';
      completeModal.style.display = 'flex';
    });
  }
  const confirmButton = document.getElementById('success_button');
  if (confirmButton) {
    confirmButton.addEventListener('click', function () {
      completeModal.style.display = 'none';
    });
  }
});
