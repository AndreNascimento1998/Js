const botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json');
    xhr.addEventListener('load', function(){
        if(xhr.status == 200){
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
            pacientes.forEach(vl => {
                adicionaPaciente(vl);
            });
            const botao = document.querySelector('#buscar-pacientes');
            botao.classList.add('invisivel');
        }else {
            alert(`Erro: ${xhr.status}, Erro ao buscar os clientes`);
        }
    })
    xhr.send();
})