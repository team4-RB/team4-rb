document.addEventListener('DOMContentLoaded', function () {
  const deleteButton = document.getElementById('deleteButton');
  const deleteModal = document.getElementById('deleteModal'); 
  const cancelDeleteButton = document.getElementById('cancelDelete'); 
  const confirmDeleteButton = document.getElementById('confirmDelete'); 
  
  
  const postId = "12345"; 

  
  if (deleteButton) {
    deleteButton.addEventListener('click', function () {
      deleteModal.classList.add('open');  
    });
  }

  if (cancelDeleteButton) {
    cancelDeleteButton.addEventListener('click', function () {
      deleteModal.classList.remove('open');  
    });
  }

  if (confirmDeleteButton) {
    confirmDeleteButton.addEventListener('click', function () {
      console.log('게시글 삭제 요청 ID:', postId);


      const postElement = document.getElementById('post_' + postId); 
      if (postElement) {
        postElement.remove(); 
      }


      deleteModal.classList.remove('open');  


      alert('게시글이 삭제되었습니다.');
    });
  }
});
