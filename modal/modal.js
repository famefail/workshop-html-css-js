const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-overay');

openModal.addEventListener('click', function(){
    modal.classList.add("open-modal");
})
closeModal.addEventListener('click', function(){
    modal.classList.remove("open-modal");
})