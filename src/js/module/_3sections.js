let myImage = document.getElementsByClassName('a-img-section')

let myArray = Array.from(myImage);
 

myArray.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.style =  "transform: scale(1.25); z-index: 1100;"
    })
    element.addEventListener("mouseout",()=>{
        element.style = " "
    })  
});