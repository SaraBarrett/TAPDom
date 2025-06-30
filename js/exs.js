let btnHello = document.querySelector('#hello');
let btnGd = document.getElementById('goodbye');
//let myForm = document.querySelector('form');
let myUl = document.querySelector('#listaDeAnimais')
let grocery = document.querySelector('#myForm');

function hello(){
    alert('hello');
}

function goodbye(){
       alert('goodbye');
}

if(btnHello){
    btnHello.addEventListener('mouseover', hello);
}

if(btnGd){
    btnGd.addEventListener('mouseout', goodbye);
    btnGd.addEventListener('click', function(event){
    console.log(event)
    alert('clicaste aqui!')
})
}



// window.addEventListener('keydown', function(event){

//     if(event.code == 'KeyD'){
//             this.alert('clicaste na tecla D')
//     }

// })

// if(myForm){
//     myForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     let myAnimal = document.querySelector('#animal').value;
//     let myActivity = document.querySelector('#activity').value;

//     let myLi = document.createElement('li');
//     myLi.innerText = myAnimal + ': '+myActivity;

//     myUl.appendChild(myLi)


//     console.log('aqui vou fazer validações antes de enviar para o servidor')

//     myForm.reset();
// })

// }


// grocery.addEventListener('submit', function(e){
//     e.preventDefault();

//     let myPrd = document.querySelector('input').value;
//     let myQt = document.querySelector('#qt').value;
//     let myUl = document.querySelector('ul');

//     let myItem = document.createElement('li');
//     myItem.innerText = myPrd +'-'+myQt;

//     myUl.appendChild(myItem);

//     grocery.reset();

// })


const getFacts = async() => {
    //caminho do postman
    const res = await fetch('https://catfact.ninja/facts');
    const data = await res.json();

    return data;
} 

const getData = async() => {
    let result = await getFacts();
    console.log(result)
}

getData()
