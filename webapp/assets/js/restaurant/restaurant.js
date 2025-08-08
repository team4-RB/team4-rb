const reButtons = document.getElementsByClassName("region_button");
const reMarks = document.getElementsByClassName("region_mark");

var regionNum = 0;
var arr = [
  ['방배 1동','방배 2동','방배 3동','방배 4동','방배 본동'],
  ['반포 1동','반포 2동','반포 3동','반포 4동','반포 본동'],
  ['서초 1동','서초 2동','서초 3동','서초 4동'],
  ['양재 1동','양재 2동'],
  ['내곡동'],
  ['잠원동']
];

function reClicked(num){
  console.log("숫자는 : " + num);
  console.log(arr[num], typeof arr[num]);
  
  

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


window.addEventListener('DOMContentLoaded', () => {
  // 헤더 불러오기
  fetch('/team04-RB_frontend/webapp/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('h').innerHTML = data;
    });
});
