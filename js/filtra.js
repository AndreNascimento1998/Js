const campofiltro = document.querySelector('#filtrar-tabela');
campofiltro.addEventListener('input', function() {
    const paciente = document.querySelectorAll('.paciente');

    if(this.value.length > 0){
        paciente.forEach((vl) => {
            const tdNome = vl.querySelector('.info-nome');
            const nome = tdNome.textContent
            const expressao = new RegExp(this.value, 'i', );
            if(!expressao.test(nome)){
                vl.classList.add('invisivel');
            }else {
                vl.classList.remove('invisivel');
            }
        });
    }else {
        paciente.forEach((vl) => {
            vl.classList.remove('invisivel')
        })
    }
})