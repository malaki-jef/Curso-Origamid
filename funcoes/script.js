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

// ARGUMENTOS PODEM SER FUNÇÕES // CALLBACK
document.addEventListener('click', ()=> {
    console.log('Clicou');
});
// A função possui dois argumentos. Primeiro é a string 'click', segundo é uma função anônima;
/*
Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
Funções anônimas são aquelas em que o nome da função não está definido, escritas como function() {} ou () => {}
*/  
  

// PODE OU NÃO RETORNAR UM VALOR
function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc) // Aqui não esta retornando nada, precisaria ter um return
};
  
console.log(imc2(80, 1.80)); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined // Aqui na chamada do argumento, tendo return não da undefined


// VALORES RETORNADOS

// Uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade){
    if(typeof(idade) !== 'number'){
        return "Porfavor preencha um numero!"
    }else if(idade <= 60){
        return true
    }else {
        return false
    }
}
console.log(terceiraIdade(60));

// ESCOPO
// Variáveis ​​e funções definidas dentro de um bloco {}não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
  }
//console.log(totalPaises); // erro, totalPaises não definido
console.log(precisoVisitar(23))


// ESCOPO LÉXICO
let profissao = "Desenvolvedor";
function dados() {
    let nome = 'Jefferson Malaki', 
    idade = 30;
    function outrosDados () {
        let endereco = 'Jaraguá do sul',
        idade = 29;
        return `Nome: ${nome}, Idade: ${idade} anos, Residindo: ${endereco}, Profissão: ${profissao}`
    }
    return outrosDados()
};
console.log(dados());
//outrosDados() // retorna um erro, porque ele não foi definido em um escopo global, mas dentro de uma função, então aqui fora não acessa variaveis de dentro do escopo da funcão.

// EXERCICIOS
// Crie uma função para verificar se um valor é Truthy
/*
Em JavaScript, um valor truthy é qualquer valor que, quando convertido para booleano, resulta em true
*/
function verfiqueTruthy (valor) {
    if(valor) { // IF so retorna o true então ele converte o valor para booleano, então não precisa fazer nada so passar o valor que vem do parametro, e seguir a regra do que torna algo TRUE, ex: numeros, string, boleanos.. 
        return `Valor é Truthy`
    }else {
        return 'Valor não é Truthy'
    }   
 /*
 Existe essa forma tambem:

 function verifiqueTruthy(valor) {
    return valor ? 'Valor é Truthy' : 'Valor não é Truthy';
}
 */
}
console.log(verfiqueTruthy())
// Crie uma função matemática que retorne o perímetro de um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro (lado) {
    return  lado * 4;
};
console.log(perimetro(5))

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome
function myName (nome,sobreNome) {
    return `${nome} ${sobreNome}`
};
console.log(myName('Jefferson','Malaki'))

// Crie uma função que verifica se um número é par
function parImpar (valor){
    if(valor%2==0){
        return 'É Par!'
    } else {
        return 'É Impar'
    }
};
console.log(parImpar(50))
// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function typeValor(valor){
    return typeof(valor)
}
console.log(typeValor("É string"))

/*
addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
*/
document.addEventListener('click',() => {
    return console.log("Jefferson Malaki");
})


// Corrija o erro abaixo
let totalPaises2 = 193;
function precisoVisitar2(paisesVisitados) {
    //let totalPaises = 193;
    return `Ainda faltam ${totalPaises2 - paisesVisitados} países para visitar`;
  }
  function jaVisitei2(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises2} países`; // Para acessar o totalPaises, ele precisa estar em um escopo global
} 
console.log(precisoVisitar2(20));   
console.log(jaVisitei2(20));
