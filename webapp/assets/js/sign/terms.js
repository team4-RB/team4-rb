NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.filter = Array.prototype.filter;


const all = document.querySelector("#all");
const terms = document.querySelectorAll(".check");

console.log(all);
console.log(terms);

all.addEventListener('click', () => {
  terms.forEach((term) => {
    term.checked = all.checked;
  })
})

terms.forEach((v) => {
  term.addEventListener('click' , () => {
    all.checked = terms.map((term) => term.checked).filter((checked) =>checked).length === terms.length;
  })
})