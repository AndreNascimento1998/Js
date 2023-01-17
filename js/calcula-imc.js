let titulo = document.querySelector(".titulo");
titulo.textContent = 'Nutricionista';


const pacientes = document.querySelectorAll(".paciente");
for(let c = 0; c < pacientes.length; c++){
    const tdAltura = pacientes[c].querySelector('.info-altura').textContent;
    const tdPeso = pacientes[c].querySelector(".info-peso").textContent;
    let validador = validaPaciente(tdPeso, tdAltura);
    if(validador){
        pacientes[c].querySelector('.info-imc').textContent = 'Peso/Altura inválidos';
        pacientes[c].classList.add('paciente-invalido');
    }else {
        const imc = calculaImc(tdPeso, tdAltura) 
        pacientes[c].querySelector('.info-imc').textContent = imc;
    }
}

function calculaImc(peso, altura) {
    let imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPaciente(peso, altura) {
    if((peso > 0 && peso < 900) && (altura > 0 && altura < 3.0)){
        return false;
    }else {
        return true;
    }
}