const openbtn = document.querySelector('.question-btn');
const title = document.querySelector('.title');

openbtn.addEventListener('click', clickQuestionBtn)

function clickQuestionBtn(){
        if(title.classList == 'title title-add'){
            title.classList.remove('title-add')
        }else{
            title.classList.add('title-add')
        }
}