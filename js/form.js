let botaoAdd = document.querySelector('#adicionar-paciente');

botaoAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const formulario = document.querySelector('#form-adiciona');

    const paciente = obtemPacienteFormulario(formulario);
    const pacienteTr = montaTr(paciente);

    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
})

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

    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    nomeTd.textContent =  paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}