//seleccionar elementos pelo seu id
// let myHistoryTag = document.getElementById('History');

// myHistoryTag.innerText = "Don't like History"

//pp9
// let image = document.getElementById('unicorn');
// console.log(image)

// let heading = document.getElementById('mainheading');
// console.log(heading)

//seleccionar por tag name
// let myPs = document.getElementsByTagName('p');
// console.log(myPs)

// let myFirstPar = document.querySelectorAll('p, h1');
// console.log(myFirstPar)

//pp12
// let doneTodos = document.getElementsByClassName('done');
// console.log(doneTodos)

// let checkbox = document.querySelector("input[type='checkbox']")
// console.log(checkbox)

//pp15
function changeTaste() {
  let mySpan = document.querySelector("span");

  //se o texto for yack, coloca yammi, se não coloca yack
  if (mySpan.innerText == "Yack") {
    mySpan.innerText = "Yammi";
  } else {
    mySpan.innerText = "Yack";
  }
}

let myBanner = document.getElementById("banner");

//exemplo 1 de aceder ao elemento
// console.log(myBanner.src);
// myBanner.src = "https://upload.wikimedia.org/wikipedia/commons/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"

//exemplo 2 de aceder ao elemento
let myPath =  'https://upload.wikimedia.org/wikipedia/commons/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg';

console.log(myBanner.getAttribute('src'));
myBanner.setAttribute('src',myPath)
