const listaPacientes = document.querySelectorAll('.paciente');
const tabelaPai = document.querySelector('tbody');

tabelaPai.addEventListener('dblclick', function(e){
    e.target.parentNode.classList.add('fadeOut'); 
    setTimeout(() =>{
        e.target.parentNode.remove();
    }, 800)
})