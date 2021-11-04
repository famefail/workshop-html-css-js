let navbtn = document.querySelector('.nav-toggle')
let link = document.querySelector('.link')
navbtn.addEventListener('click', () =>{
    if (link.style.overflow == 'visible'){
        link.style.transition = 'all 1s';
        link.style.overflow = 'hidden';
        
    }
    else {
        link.style.overflow = 'visible'
    }
})