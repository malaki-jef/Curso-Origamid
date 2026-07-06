let nome = "Jefferson"; // String
let idade = 30; // Number
let possuiFaculdade = true; // Bolean (boleano)
let time; // Undefined
let comida = null; // Null
let simbolo = Symbol() //Symbol
let novoObjeto = {} // Object

// VERIFICAR TIPO DE DADOS
let nomeSobrenome = "Jefferson Malaki"
console.log(typeof(nomeSobrenome))

// CORDA -- CONCATENAÇÃO
let sobreNome = "Malaki"
let nomeCompleto = nome + " " +  sobreNome;
console.log(nomeCompleto);
let gols = 1000
let frase = "Romario fez " +   gols +  " gols";
let novoModelo = `Romario fez ${gols} gols` // template string é a forma mais utilizada e atual
console.log(frase)
console.log(novoModelo)

// EXERCICIO

// Declare uma variável contendo uma string
let fruta = "banana"
// Declare uma variável contendo um número dentro de uma string
let valor = 10
// Declare uma variável com a sua idade
let minhaIdade = 30
// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
let novoNomeCompleto = `${nome} ${sobreNome}`
console.log(novoNomeCompleto)
// Coloque a seguinte frase em uma variável: It's time
let fraseTime = "It's time" //Esse exercicio é para entender o uso de aspas, no caso usei aspas dupla fora, consigo usar aspas simples dentro, mas se eu tivesse usado aspas simples fora eu não conseguiria escrever It's porque ele fecharia a aspas de abertura da string.
console.log(fraseTime)
// Verifique o tipo da variável que contém o seu nome
console.log(typeof(novoNomeCompleto))