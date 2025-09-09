// 1. Seleciona os elementos do HTML com os quais vamos interagir
const inputA = document.getElementById('valorA');
const inputB = document.getElementById('valorB');
const inputC = document.getElementById('valorC');
const resultado = document.getElementById('resultado');

// 2. Cria a função principal que fará o cálculo
function calcularRegraDeTres() {
    // Pega os valores dos inputs e converte para números de ponto flutuante (decimais)
    const valorA = parseFloat(inputA.value);
    const valorB = parseFloat(inputB.value);
    const valorC = parseFloat(inputC.value);

    // 3. Validação: Verifica se os três valores são números válidos
    if (!isNaN(valorA) && !isNaN(valorB) && !isNaN(valorC)) {
        
        // Validação adicional: Verifica se o valorA é diferente de zero para evitar divisão por zero
        if (valorA === 0) {
            resultado.value = "Erro: Divisão por Zero";
            return; // Encerra a função aqui
        }

        // Realiza o cálculo da regra de 3
        const valorD = (valorB * valorC) / valorA;

        // Exibe o resultado no campo 'resultado', formatado com 2 casas decimais
        // O parseFloat remove zeros desnecessários (ex: 12.00 -> 12, 12.50 -> 12.5)
        resultado.value = parseFloat(valorD.toFixed(2));

    } else {
        // Se algum campo não for um número válido, limpa o campo de resultado
        resultado.value = "";
    }
}

// 4. Adiciona "ouvintes de evento" para os três campos de entrada.
// O evento 'input' é acionado toda vez que o valor do campo muda.
inputA.addEventListener('input', calcularRegraDeTres);
inputB.addEventListener('input', calcularRegraDeTres);
inputC.addEventListener('input', calcularRegraDeTres);

// // 5. Função para carregar dados salvos quando a página é aberta
// function carregarDadosSalvos() {
//     // Pega os valores do localStorage
//     const aSalvo = localStorage.getItem('valorA_salvo');
//     const bSalvo = localStorage.getItem('valorB_salvo');
//     const cSalvo = localStorage.getItem('valorC_salvo');

//     // Se existirem valores, preenche os campos com eles
//     if (aSalvo) inputA.value = aSalvo;
//     if (bSalvo) inputB.value = bSalvo;
//     if (cSalvo) inputC.value = cSalvo;

//     // Se todos os valores salvos existirem, faz o cálculo inicial
//     if (aSalvo && bSalvo && cSalvo) {
//         calcularRegraDeTres();
//     }
// }

// // 6. Adiciona um "ouvinte" para salvar os dados no localStorage sempre que o usuário digita
// function salvarDados() {
//     localStorage.setItem('valorA_salvo', inputA.value);
//     localStorage.setItem('valorB_salvo', inputB.value);
//     localStorage.setItem('valorC_salvo', inputC.value);
// }

// inputA.addEventListener('input', salvarDados);
// inputB.addEventListener('input', salvarDados);
// inputC.addEventListener('input', salvarDados);


// // 7. Chama a função para carregar os dados assim que a página terminar de carregar
// document.addEventListener('DOMContentLoaded', carregarDadosSalvos);