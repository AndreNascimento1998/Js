let titulo = document.querySelector(".titulo");
titulo.textContent = 'Nutricionista';
let validador = true

const pacientes = document.querySelectorAll(".paciente");
for(let c = 0; c < pacientes.length; c++){
    const tdAltura = pacientes[c].querySelector('.info-altura').textContent;
    const tdPeso = pacientes[c].querySelector(".info-peso").textContent;
    
    if((tdAltura <= 0 || tdAltura >= 3.00) || (tdPeso <= 0 || tdPeso >= 1000)){
        validador = false;
        pacientes[c].querySelector('.info-imc').textContent = 'Peso/Altura inválidos';
        pacientes[c].classList.add('paciente-invalido');
    };
    
    if(validador){
        const imc = tdPeso / (tdAltura * tdAltura);
        pacientes[c].querySelector('.info-imc').textContent = imc.toFixed(2);
    }
}
let botaoAdd = document.querySelector('#adicionar-paciente');

botaoAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const formulario = document.querySelector('#form-adiciona');
    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;
    
    let pacienteTr = document.createElement('tr');

    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    console.log(pacienteTr);
})
