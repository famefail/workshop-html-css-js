const questions = document.querySelectorAll('.question');


questions.forEach((question) =>{
    let btn = question.querySelector('.question-btn');
        btn.addEventListener('click', function(){
        questions.forEach(function (select){
            if(select !== question){
               select.classList.remove('title-add');
            }
            else{
                select.classList.toggle('title-add');
            }
            
        })
    })
})




/*
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
*/