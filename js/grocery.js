let myForm = document.querySelector("form");
let myInput = document.querySelector("input");
let myUL = document.querySelector("ul");
let myQt = document.querySelector("#qt")

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let myLi = document.createElement("li");
  myLi.innerText =myQt.value +'-'+myInput.value;

  myUL.appendChild(myLi);

  myForm.reset();
});
