let myImage = document.getElementsByClassName('a-img-section')
console.log(myImage);

let myArray = Array.from(myImage);
 

myArray.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.style =  "height:300px; width:380px;z-index:1;"
    })
    element.addEventListener("mouseout",()=>{
        element.style = " "
    })  
});





















// let divImg = document.getElementById('cactus');
array.addEventListener('mouseover',()=>{
    array.forEach(element => {
      
        
    });
})

array.addEventListener('mouseout',()=>{
    array.forEach(element => {
    
        
    });
})
