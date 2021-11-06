let init = 0;

function increase(){
     init++;
    value.innerHTML = init;
}

function decrease(){
    
    if(init <= 0){
        init = 0
    }
     else{
         init--;
     }
    value.innerHTML = init;
}

function reset(){
   init = 0;
    value.innerHTML = init;
}