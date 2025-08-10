document.addEventListener('DOMContentLoaded', function () {
  const saveBtn = document.getElementById('saveBtn');
  const modal   = document.getElementById('editModal');
  const okBtn   = document.getElementById('check');

  function openModal(){
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  saveBtn && saveBtn.addEventListener('click', function(e){
    e.preventDefault();
    openModal();
  });

  okBtn && okBtn.addEventListener('click', function(){
    closeModal();
  });

  modal && modal.addEventListener('click', function(e){
    if (e.target === modal) closeModal();
  });
});
