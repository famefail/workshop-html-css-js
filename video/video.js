const video = document.querySelector('.video-container')
const btn = document.querySelector('.switch-btn')
const rotate = document.querySelector('.switch')
const title = document.querySelector('.title')
const des = document.querySelector('.des')
let status = false

btn.addEventListener('click', function(){
    if(status != true){
    video.pause()
    status = true
    rotate.classList.add('rotate')
    video.classList.add('opacity')
    }
    else{
        
        status = false
        rotate.classList.remove('rotate')
        video.classList.remove('opacity')
        video.play()
    }
})
title.addEventListener('click', function(){
    if(title.classList != 'title'){
        title.classList.remove('hide')
        des.classList.remove('show')
    }
    else{
        des.classList.add('show')
        title.classList.add('hide')
    }
    console.log(title.classList)  
})