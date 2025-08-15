const postWrite = document.querySelector('.postWrite');
const modal = document.querySelector('.modal');
const postTitle = document.querySelector('.postTitle');

// let user = "login";
let user = "myPost";
// let user = "notLogin";


// function postWrite() {
//   if (user == "myPost" || "login") {
//     window.location.href = "./postWrite.html";
//   } else {
//     modal.style.display = 'block';
//   }
// }
// function postTitle() {
//   if (user == "myPost") {
//     window.location.href = "./postDetaillogin.html";
//   } else {
//     window.location.href = "./postDetailNotlogin.html";
//   }
// }

// postTitle.addEventListener('click', function () {
//   if(user == myPost){
//     window.location.href = "./postDetaillogin.html";
//   }else{
//     window.location.href = "./postDetailNotlogin.html";
//   }
// });
postTitle.addEventListener('click', function () {
  modal.style.display = 'block';
});



