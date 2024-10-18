let form = document.querySelector("form");
let myInput = document.querySelector("#my-learning");
let myUl = document.querySelector("ul");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let myLi = document.createElement("li");
  myLi.innerText = myInput.value;

  myUl.appendChild(myLi);

  form.reset();
});
