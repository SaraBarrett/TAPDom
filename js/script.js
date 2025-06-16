let myBtn = document.querySelector('#login');
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

// let myBanner = document.getElementById("banner");

//exemplo 1 de aceder ao elemento
// console.log(myBanner.src);
// myBanner.src = "https://upload.wikimedia.org/wikipedia/commons/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"

//exemplo 2 de aceder ao elemento
// let myPath =  'https://upload.wikimedia.org/wikipedia/commons/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg';

// console.log(myBanner.getAttribute('src'));
// myBanner.setAttribute('src',myPath)

function changeImg() {
  //seleccionar a imagem. depois de seleccionar, aceder ao atributo src da imagem
  let myImage = document.querySelector("img");
  console.log(myImage.src);

  if (myImage.src == "https://devsprouthosting.com/images/chicken.jpg") {
    myImage.src = "https://devsprouthosting.com/images/egg.jpg";
  } else {
    //manipular a src da imagem e reatribuir um novo caminh
    myImage.src = "https://devsprouthosting.com/images/chicken.jpg";
  }

  let myH4 = document.querySelector("h4");
  console.log(myH4);

  myH4.style.backgroundColor = "#fffc88";
}

function changeImgWSet() {
  //seleccionar a imagem. depois de seleccionar, aceder ao atributo src da imagem
  let myImage = document.querySelector("img");
  console.log(myImage.getAttribute("src"));

  if (
    myImage.getAttribute("src") ==
    "https://devsprouthosting.com/images/chicken.jpg"
  ) {
    myImage.setAttribute("src", "https://devsprouthosting.com/images/egg.jpg");
  } else {
    //manipular a src da imagem e reatribuir um novo caminh
    myImage.setAttribute(
      "src",
      "https://devsprouthosting.com/images/chicken.jpg"
    );
  }
}

function changeBox() {
  let myContainer = document.getElementById("container");
  console.log(myContainer);

  myContainer.style.textAlign = "center";

  let myImage = document.querySelector("img");
  myImage.style.width = "150px";
  myImage.style.borderRadius = "50%";
}

// let myLis = document.getElementsByClassName('toclevel-1');

// for(let element of myLis){
//   element.style.backgroundColor = 'red';
// }

// console.log(myLis)

//PP25
// let mySpans = document.querySelectorAll("span");
// console.log(mySpans);

// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// let index = 0;

// // mySpans[0].style.color=colors[0]
// // mySpans[1].style.color=colors[1]
// // mySpans[2].style.color=colors[2]

// for (let element of mySpans) {
//     element.style.color = colors[index];
//     index = index +1;
// }

// let myDiv = document.querySelector('.toctitle');
// //adicionar uma class
// // myDiv.classList.add('classChange')

// // remove a classe
// // myDiv.classList.remove('toctitle')

// //validar se tem uma classe (retorna verdadeiro ou falso - para usar p exemplo dentro de ifs)
// console.log(myDiv.classList.contains('toctitle'))

function changeHighlight() {
  let myLis = document.querySelectorAll("li");

  for (let element of myLis) {
    if (element.classList.contains("highlight")) {
      //remove
      element.classList.remove("highlight");
    } else {
      //add
      element.classList.add("highlight");
    }
    console.log(element);
  }
}

function addP() {
  //criar elemento
  const newP = document.createElement("p");
  newP.textContent = "Parabéns, estás quase a chegar ao fim de JS";

  const myATag = document.createElement("a");
  myATag.textContent = "clica aqui";
  myATag.href = "../exs/grocery.html";

  newP.appendChild(myATag);

  //dizer de quem ele é filho
  myBody = document.querySelector("body");
  myBody.appendChild(newP);
}

function addCumplimentName() {
  myH1 = document.querySelector("h1");

  //myH1.innerText = 'Sara';

  console.log(myH1.innerText.includes(" Sara"));

  if (!myH1.innerText.includes(" Sara")) {
    myH1.append(" Sara");
  }else{
    myH1.remove();
  }


}


function createBtn() {

  let myContainer = document.getElementById("container");
  let contador = 1;

    while (contador<101){
        let newBtn = document.createElement("button");
        newBtn.innerText = "Novo Btn" +contador;
        myContainer.appendChild(newBtn);
        contador = contador+1;
    }
    


}



myBtn.onclick = addCumplimentName;


//mais eficiente
myBtn.addEventListener('click', addCumplimentName);

