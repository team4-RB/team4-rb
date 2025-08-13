const modal = document.querySelector('.modal');

let login = true;
// let login = false;

function loginCheck(){
  if(login == true){
    window.location.href="./postWrite.html";
  }else{
    modal.style.display='block';
  }
}