const btn = document.getElementById('btn');
const change = document.getElementById('background');
const text = document.getElementById('text');
function ChangeColor(){
  text.style.color = "black";
  change.style.backgroundColor = RandomColor();
}

let hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let copy
function RandomColor(){
    let start = "#";
    let collect;
    for(i = 0;i <= 5; i++){
         collect = Random();
         start += String(hex[collect]);
    }
   text.innerHTML = start
    return String(start);
}

function clipboard(){
  navigator.clipboard.writeText(text.innerHTML)
  text.style.color = "green";
}

function Random(){
  return String(Math.floor(Math.random() * hex.length));
}