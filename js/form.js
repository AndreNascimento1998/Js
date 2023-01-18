let botaoAdd = document.querySelector('#adicionar-paciente');

botaoAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const formulario = document.querySelector('#form-adiciona');

    const paciente = obtemPacienteFormulario(formulario);
    
    if(campoBranco(paciente)){
        if (validaPaciente(paciente.peso, paciente.altura)){
            mensagemEscritaErro('Peso ou Altura inválidas');
            return;
        }else {
            adicionaPaciente(paciente);
            mensagemEscritaErro('');
        }
    }else {
        mensagemEscritaErro('Não aceitamos campos vazios');
        return;
    }
    formulario.reset();
})

function adicionaPaciente(paciente){
    const pacienteTr = montaTr(paciente);
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function obtemPacienteFormulario(form) {
    return paciente ={
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
}

function montaTr(paciente){
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function campoBranco(dados){
    for(let c in dados){
       if(dados[c].length <= 0){
            return false;
       }
    }
    return true;
}

function mensagemEscritaErro(mensagem){
    let mensagemErro = document.querySelector(".mensagem-erro");
    mensagemErro.textContent = mensagem;
}