// let myBannerSelector = document.getElementById('banner');

// console.log(myBannerSelector);

// let mySelectedImage = document.getElementById('unicorn');

// let mySelectedHeading = document.getElementById('mainheading');

// console.log(mySelectedImage);
// console.log(mySelectedHeading);

// let allImages = document.querySelectorAll('img');
// console.log(allImages);

// let doneTodos = document.querySelectorAll('.done');
// let myCheckbox = document.querySelector("input[type='checkbox']")

// console.log(myCheckbox);

// let myText = document.getElementById('History');
// let mySpan = document.getElementById('my-welcome-name');
//let myPickles =document.querySelector('span');

// console.log(myPhoto)
// if(myBannerSelector){
//     //console.log(myBannerSelector.getAttribute('src'));
//     console.log(myBannerSelector.src);
//     myBannerSelector.src = '../images/assesement.jpeg';
// }

// if(myPickles){
//     myPickles.innerText = 'yack';
// }

// if(myText){
//     myText.innerHTML = '<b>História da Carochinha</b>';
//     console.log(myText.getAttribute('id'))
//     myText.id = 'testesMudarAtributos';
// }

// let login = false;
// let myName = null;
// let userPhoto = null;

// let mySpan = document.getElementById('my-welcome-name');
// let myPhoto = document.getElementById('my-photo');

// myName = prompt('qual é o teu nome?');

// if(myName){
//     login == true;
//     userPhoto = '../images/assesement.jpeg';

//     mySpan.innerText = myName;

//     if(userPhoto){
//         myPhoto.src = userPhoto;
//     }

// }

//selecciona o elemento
// let myEggOrChickenImg = document.querySelector('img');

// function myEggOrChicken(){
//     if(myEggOrChickenImg.src == 'https://devsprouthosting.com/images/chicken.jpg'){
//         myEggOrChickenImg.src = 'https://devsprouthosting.com/images/egg.jpg';
//     }else{
//         //muda o atributo src do elemento seleccionado
//         myEggOrChickenImg.src = 'https://devsprouthosting.com/images/chicken.jpg';

//     }

// }

//seleccionar o olá do index.html
// let myBold = document.querySelector('b');
// myBold.style.color = '#132fba';

// function changeStyle(){
//     let myContainer = document.querySelector('#container');
//     let myImg = document.querySelector('img');

//     myContainer.style.textAlign = 'center';
//     myImg.style.width = '150px';
//     myImg.style.borderRadius = '50%';
// }

function changeHighlight() {
  let lis = document.querySelectorAll("li");

  for (li of lis) {
    if (li.classList.contains("highlight")) {
      li.classList.remove("highlight");
    } else {
      li.classList.add("highlight");
    }
  }
}

// let myImage = document.querySelector("#my-photo");
// console.log(myImage.parentElement);
// myImage.parentElement.style.backgroundColor = "blue";

// let myDiv = document.querySelector("#toc");
// console.log(myDiv.children);

// let brother = document.querySelector("#my-welcome-name");
// brother.previousSibling.style.color = "violet";

// let myImage = document.createElement("img");
// console.log(myImage);
// myImage.src = "../images/nophoto.jpg";
// myImage.classList.add("myPhotoImg");

// let myDiv = document.querySelector("#space-for-image");
// myDiv.appendChild(myImage);
// let myHello = document.querySelector('#myHello');
// myHello.append('Pessoa');

// for (i = 1; i <= 100; i++) {
//   let myBtn = document.createElement("button");
//   myBtn.innerText = "botão nr " + i;
//   if (i == 46) {
//     myBtn.style.backgroundColor = "red";
//   }

//   let myDiv = document.querySelector("#container");
//   myDiv.appendChild(myBtn);
// }

// let myLi = document.querySelectorAll('.toclevel-1');
// console.log(myLi)
// for(item of myLi){

//     item.remove();
// }

// function dangerLevel() {
//   if (myBtn.classList.contains("btn-danger")) {
//     myBtn.classList.remove("btn-danger"); //remove classe do elemento
//     myBtn.classList.add("btn-warning"); // adiciona classe ao elemento
//   } else {
//     myBtn.classList.remove("btn-warning");
//     myBtn.classList.add("btn-danger");
//   }
// }

// function hello() {
//   alert("sou js e sou awesome!");
// }

// myBtnDanger.addEventListener("mouseover", dangerLevel);
// myBtnDanger.addEventListener("click", hello);
// let myBtnDanger = document.querySelector("#myBtn");
// let myBtnInfo = document.querySelector(".btn-info");

// function changeColor() {
//   this.style.backgroundColor = "red";
// }

// myBtnDanger.addEventListener("click", changeColor);

// myP.addEventListener("click", changeColor);

// myBtnInfo.addEventListener("click", changeColor);
let myP = document.querySelector("p");

myP.addEventListener("click", function (event) {
  alert("cucu");
  console.log(event);
});

window.addEventListener("scroll", function (event) {
  console.log(event);
});
