const reButtons = document.getElementsByClassName("region_button");
const reMarks = document.getElementsByClassName("region_mark");



function reClicked(num){
  console.log("숫자는 : " + num);
  var j = 0;
  for(i of reMarks){
    if(j==num){
      i.style.display="block";
    }else{
      i.style.display="none";
    }
    j++;
  }
}