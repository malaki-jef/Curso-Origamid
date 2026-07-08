// FUNÇÕES
function areaQuadrado(lado) {
    return lado * lado;
};  
console.log(areaQuadrado(5)) // 25
console.log(areaQuadrado(4)) // 16
console.log(areaQuadrado(2)) // 4

// USANDO VALOR DE RETORNO DA FUNÇÃO
function pi () {
    return 3.14;
};
let total = 2 * pi(); // 6.28
console.log(total)


// PARÂMETROS E ARGUMENTOS
// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
};  
console.log(`${imc(80, 1.80).toFixed(2)}`) // 80 e 1.80 são os argumentos
console.log(`${imc(60, 1.70).toFixed(2)}`) // 60 e 1.70 são os argumentos


// PARÊNTESES EXECUTAM FUNÇÃO
function corFavorita(cor) {
    if(cor === 'azul') {
   return 'Você gosta do céu';
    } else if(cor === 'verde') {
      return 'Você gosta de mato';
    } else {
      return 'Você não gosta de nada';
    }
};
console.log(corFavorita()); // retorna 'Você não gosta de nada' --> porém se eu adicionar um parametro, tipo: "azul" o retorno já se torna a primeira condição "Você gosta do céu"

// ARGUMENTOS PODEM SER FUNÇÕES
document.addEventListener('click', ()=> {
    console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
  

// PODE OU NÃO RETORNAR UM VALOR
function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc)
};
  
console.log(imc2(80, 1.80)); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined
  