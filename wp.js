const search = document.querySelector('.search');
const patient = document.querySelector('.patient');

search.addEventListener('click', function() {
    patient.classList.remove('hidden');
});