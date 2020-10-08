let myNav = document.querySelector('nav');

let stick = myNav.offsetTop;

window.addEventListener('scroll',()=>{
    if (scrollY >= stick) {
        document.body.style.paddingTop = myNav.offsetHeight +"px";
        document.body.classList.add('sticky');
        
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('sticky');
    }
});