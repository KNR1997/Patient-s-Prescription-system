const search = document.querySelector('.search');
const patient = document.querySelector('.patient');

search.addEventListener('click', function() {
    patient.classList.remove('hidden');
});
/* Add New button*/
const popup = document.querySelector('#pop-up');
const addNew = document.querySelector('.addnew');
const enter = document.querySelector('.popup-enter');
const close = document.querySelector('.popup-close');

addNew.addEventListener('click',function(){
    popup.style.display = 'flex';
});

enter.addEventListener('click', function(){
    popup.style.display = 'none';
});
close.addEventListener('click', function(){
    popup.style.display = 'none';
})
