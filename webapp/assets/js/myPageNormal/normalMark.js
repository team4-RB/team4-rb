const markList = document.getElementsByClassName("mark_list");
markList[0].innerHTML = "";



for (let i = 0; i < 8; i++) {
  const li = document.createElement("li");
  li.id = 'li_' + i;

  let str = ``;

  str += `<input class="checkbox_li" name="mark_check" type="checkbox" value = "`;
  str += `` + i;
  str += `"><div class="name"><div>이름` + i + `</div></div>`;
  str += `<a class="location" href="./../restaurant/restaurantDetail.html"><div>위치</div></a>`;
  str += `<div class="phone"><div>전화번호</div></div>`;

  li.innerHTML = str;

  markList[0].appendChild(li);

}

function delMarks() {
  const checkbox = document.querySelectorAll('input[name="mark_check"]');
  console.log(checkbox, typeof checkbox);
  let j = 0;
  for (i of checkbox) {
    if (i.checked) {
      const ll = document.getElementById("li_" + i.value);
      console.log(document.getElementById("li_" + i.value));
      ll.remove();
      console.log("i값 : " + i.value);
    }
    j++;
  }
  const cc = document.getElementById("checkbox_col");
  cc.checked = false;
}

function toggleMarksAll() {
  const cc = document.getElementById("checkbox_col");
  const marks = document.getElementsByName("mark_check");
  if (cc.checked) {
    let ggggg = 0;
    for (c of marks) {
      c.checked = true;
      console.log('트루라네~' + ggggg);
      ggggg++;
    }
  } else {
    for (c of marks) {
      c.checked = false;
      console.log('뻘스.');
    }
  }
}