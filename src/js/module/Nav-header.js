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


// Bouton connexion

let myConnect = document.querySelector('#connection')
let modal = document.querySelector('#myPopUp')
let fermer = document.querySelector('.close')


myConnect.addEventListener('click',()=>{
    modal.classList.add('PopUpVisible')
})

fermer.addEventListener('click',()=>{
    modal.classList.remove('PopUpVisible')
})