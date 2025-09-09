const inputA = document.getElementById('valorA');
const inputB = document.getElementById('valorB');
const inputC = document.getElementById('valorC');
const resultado = document.getElementById('resultado');

function calcularRegraDeTres() {
    const valorA = parseFloat(inputA.value);
    const valorB = parseFloat(inputB.value);
    const valorC = parseFloat(inputC.value);

    if (!isNaN(valorA) && !isNaN(valorB) && !isNaN(valorC)) {

        if (valorA === 0) {
            resultado.value = "Erro: Divisão por Zero";
            return;
        }

        const valorD = (valorB * valorC) / valorA;

        resultado.value = parseFloat(valorD.toFixed(2));

    } else {
        resultado.value = "";
    }
}

inputA.addEventListener('input', calcularRegraDeTres);
inputB.addEventListener('input', calcularRegraDeTres);
inputC.addEventListener('input', calcularRegraDeTres);

// function carregarDadosSalvos() {
//     const aSalvo = localStorage.getItem('valorA_salvo');
//     const bSalvo = localStorage.getItem('valorB_salvo');
//     const cSalvo = localStorage.getItem('valorC_salvo');

//     if (aSalvo) inputA.value = aSalvo;
//     if (bSalvo) inputB.value = bSalvo;
//     if (cSalvo) inputC.value = cSalvo;

//     if (aSalvo && bSalvo && cSalvo) {
//         calcularRegraDeTres();
//     }
// }

// function salvarDados() {
//     localStorage.setItem('valorA_salvo', inputA.value);
//     localStorage.setItem('valorB_salvo', inputB.value);
//     localStorage.setItem('valorC_salvo', inputC.value);
// }

// inputA.addEventListener('input', salvarDados);
// inputB.addEventListener('input', salvarDados);
// inputC.addEventListener('input', salvarDados);

// document.addEventListener('DOMContentLoaded', carregarDadosSalvos);