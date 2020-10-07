let myImage = document.getElementsByClassName('a-img-section')
console.log(myImage);

let myArray = Array.from(myImage);

 

myArray.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.style =  "height:350px; width:380px;z-index:1;"
    })
    element.addEventListener("mouseout",()=>{
        element.style = " "
    })  
});






















