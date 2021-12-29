const nav = document.querySelector('.nav-center')
const a = document.querySelectorAll('a')
const title = document.querySelector('.title-container')
const bg = document.querySelector('.bg')
const container = document.querySelector('.container')
const rows = document.querySelectorAll('.row')
const up = document.querySelector('.scroll-up')
const feature = document.querySelector('.feature-text')


window.addEventListener('scroll', function(){
    a.forEach(function(a){
if(this.window.scrollY > 200){
        nav.classList.add('fixed-nav')
        a.classList.add('fixed-a')
        container.classList.add('fixed-container')
        up.classList.add('fixed-up')
    }
    else{
        nav.classList.remove('fixed-nav')
        a.classList.remove('fixed-a')
        container.classList.remove('fixed-container')
        up.classList.remove('fixed-up')
    }

if(this.window.scrollY > 2010){
    feature.style.top = 0
}

    a.addEventListener('mouseenter', function(){
        a.classList.add('hover-a')
    })

    a.addEventListener('mouseleave', function(){
        a.classList.remove('hover-a')
    })
    })
})

rows.forEach(function (row){

    row.addEventListener('click', function(){

        rows.forEach(function(row){
            if(row.classList.value !== "row fixed-row")
                row.classList.toggle('hide-row')
                else{
                    row.classList.toggle('click-row')
                }
        })
    console.log(row.classList)})
})

rows.forEach(function(row){

    row.addEventListener('mouseenter', function(){
        row.classList.toggle('fixed-row')
    })

    row.addEventListener('mouseleave', function(){
        row.classList.remove('fixed-row')
        row.classList.remove('hide-row')
    })
})

function check(){
    
}