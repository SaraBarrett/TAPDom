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



let login = false;
let myName = null;
let userPhoto = null;

let mySpan = document.getElementById('my-welcome-name');
let myPhoto = document.getElementById('my-photo');

myName = prompt('qual é o teu nome?');

if(myName){
    login == true;
    userPhoto = '../images/assesement.jpeg';


    mySpan.innerText = myName;

    if(userPhoto){
        myPhoto.src = userPhoto;
    }

}





