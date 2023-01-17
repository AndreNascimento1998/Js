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
        const imc = calculaImc(tdPeso, tdAltura) 
        pacientes[c].querySelector('.info-imc').textContent = imc;
    }
}

function calculaImc(peso, altura) {
    let imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}