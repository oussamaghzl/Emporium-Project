let myBody = document.querySelector('body')

// Mode Sombre et mode clair

let modeJour = document.querySelector('.modeClair')
let modeNuit = document.querySelector('.modeSombre')

modeJour.addEventListener('click',()=>{
    myBody.style = 'background-color: white'
})

modeNuit.addEventListener('click',()=>{
    myBody.style = 'background-color: black; color: white'
})

let myImage =document.querySelectorAll('.col-3 > img')
console.log(myImage);
// Bouton connexion

let myConnect = document.querySelector('#connection')
let modalConnection = document.querySelector('#myPopUpConnection')
let modalInscription = document.querySelector('#myPopUpInscription')
let fermer = document.querySelector('.close')
let fermerBis = document.querySelectorAll('.close')[1]

let myButtonConnection = document.querySelectorAll('.bg-info')[0]
let myButtonInscription = document.querySelectorAll('.bg-info')[1]

let myButtonConnectionBis = document.querySelectorAll('.bg-info')[2]
let myButtonInscriptionBis = document.querySelectorAll('.bg-info')[3]

myConnect.addEventListener('click',()=>{
    modalConnection.classList.add('PopUpVisible')
})

fermer.addEventListener('click',()=>{
    modalConnection.classList.remove('PopUpVisible')
    modalInscription.classList.remove('PopUpVisible')

})
fermerBis.addEventListener('click',()=>{
    modalConnection.classList.remove('PopUpVisible')
    modalInscription.classList.remove('PopUpVisible')

})

myButtonConnection.addEventListener('click',()=>{
    modalInscription.classList.remove('PopUpVisible')
    modalConnection.classList.add('PopUpVisible')
})

myButtonInscription.addEventListener('click',()=>{
    modalConnection.classList.remove('PopUpVisible')
    modalInscription.classList.add('PopUpVisible')
})

myButtonConnectionBis.addEventListener('click',()=>{
    modalInscription.classList.remove('PopUpVisible')
    modalConnection.classList.add('PopUpVisible')
})

myButtonInscriptionBis.addEventListener('click',()=>{
    modalConnection.classList.remove('PopUpVisible')
    modalInscription.classList.add('PopUpVisible')
})