// const myButton = document.getElementById("myButton");
// const myDiv = document.getElementById("myDiv");

// myButton.addEventListener("click", function(){
//   if(myDiv.style.display === "none"){
//     myDiv.style.display = "block";
//   }else{
//     myDiv.style.display = "none";
//   }
// });


const reButtons = document.getElementsByClassName("region_button");
const reMarks = document.getElementsByClassName("region_mark");

// for(item of reButtons){
//   item.addEventListener("click", function(){
//     for(i of reMarks){
//       i.style.display="none";  
//     }
//   });
// }

for(item of reButtons){
  item.addEventListener("click", function(){
    console.log(reButtons.index(item));
    for(i of reMarks){
      i.style.display="none";  
    }
  });
}

for(item of reButtons){
  console.log(reButtons.index(item));
}