// BOLEANOS (TRUE E FALSE)
let possuiFaculdade = true
let possuiDoutorado = false

// CONDICIONAIS "IF(SE)" E "ELSE(SE NÃO)"
if(possuiFaculdade) { // Como a condição é verdadeira ela entra dentro do if
    console.log("Possui Faculdade") // Comando executado, porque a condição é true
}else {
    console.log("Não possui faculdade") // Executa apenas se a condição do if for false
};

// CONDICIONAIS ELSE IF (SE NÃO SE)
if(possuiDoutorado){ // Como a condição do if é falsa ele pula para executar o else if
    console.log("Possui Doutorado")
} else if (possuiFaculdade) { // Como a condição é true, entra no bloco e executa ele "Possui faculdade"
    console.log("Possui Faculdade")
} else {
    console.log("Não possui doutorado e nem faculdade!")
};


// SWITCH COMPARAÇÃO
let corFavorita = 'Azul'; // O conteudo da variavel será a condição para o case;

switch (corFavorita) {
  case 'Azul': // Quando a condição ser encontrada o break é ativado, parando o codigo e retornando o valor do case.
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
 /* 
Regra prática 

Use switch quando:
você vai comparar a mesma variável com vários valores fixos ("Azul", "Vermelho", 1, 2, etc.).

Use if/else quando:
precisar de comparações mais complexas (>, <, &&, ||, intervalos, chamadas de funções, etc.).

*/


// VERDADEIRO E FALSO
/* Existem valores que retornam truee outros que retornam falsequando selecionados em uma expressão booleana.*/
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({});

// OPERADOR LOGICO DE NEGAÇÃO
/* O operador !nega uma operação booleana. Ou seja, !true vira false */

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false

/* 
Dica: Você pode usar o !! para verificar se uma expressão é Verdadeira ou Falsa..
Quando usar: Legal para quando quero apenas o resultado em boleano, exemplo, saber se um usuario esta online, em vez de ter o retorno do nome do individuo posso apenas ter o retorno de TRUE ou FALSE, então faria algo mais ou menos assim: nome = "Malaki" if(!!nome) e tenho o meu TRUE
*/

// OPERADORES DE COMPARAÇÃO
10 > 5; // true  > MAIOR
5 > 10; // false < MENOR
20 < 10; // false
10 <= 10 // true <= MENOR OU IGUAL 
10 >= 11 // false >= MAIOR OU IGUAL

/*
O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
*/
10 == '10'; // true == IGUALDADE 
10 == 10; // true
10 === '10'; // false === IGUALDADE ESTRITA (ou seja, valor igual e tipo de dado também)
10 === 10 // true
10 != 15 // true != Diferença
10 != '10' // false
10 !== '10' // true !== Diferença estrita (ou seja, valor diferente e tipo de dado também)

// OPERADORES LOGICOS &&
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão' -- TRUE E TRUE (PEGA O ULTIMO TRUE(CÃO))
(5 - 5) && (5 + 5); // 0 -- FALSE E TRUE = FALSE
'Gato' && false; // false -- TRUE E FALSE = FALSE
(5 >= 5) && (3 < 6); // true -- TRUE E TRUE = TRUE

/*
Tabela Verdade &&:
true  && true   // true
true  && false  // false
false && true   // false
false && false  // false
*/

// OPERADORES LOGICOS || 
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato' TRUE E TRUE = Retorna o primeiro TRUE(GATO)
(5 - 5) || (5 + 5); // 10  FALSE E TRUE = Retorna o TRUE (10)
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

/*
Tabela Verdade ||:
true  || true   // true
true  || false  // true
false || true   // true
false || false  // false
*/


//EXERCICIO

// Verifique se a sua idade é maior do que a de algum parente dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let malaki = 30
let lavinia = 25

if(malaki > lavinia) {
    console.log('Malaki é MAIOR!')
} else if(malaki == lavinia) {
    console.log("Malaki e Lavinia são igual")
} else {
    console.log('Malaki é MENOR')
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); 
/* 
1º: (5 - 2) = 3
2º: (5 - ' ') = 5 - 0 = 5 A string ' ' é convertida para o número 0.    
3º: (5 - 2) = 3
*/
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome3 = 'Andre'; // truthy
var idade3 = 28; // truthy
var possuiDoutorado3 = false; // falsy
var empregoFuturo3; // falsy
var dinheiroNaConta3 = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log(`O Brasil tem ${brasil*1e6} e a China tem ${china*1e6}, então o brasil é MAIOR`)
} else {
    console.log(`O Brasil tem ${brasil*1e6} e a China tem ${china*1e6}, então o brasil é MENOR`)
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); // VAI APARECER FALSO, "Gato" e "gato" Não são estritamente igual, um tem G maiusculo e o outro não.
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // VAIR RETORNAR CÃO --> A primeira comparação é false mas 5 é maior que 2, o operador || retorna o primeiro verdadeiro que achar, ou seja, a condição snedo verdadeira entra no bloco if, e como tem duas condição verdadeira no console.log, o operador && retorna o ultimo verdadeiro.
} else {
  console.log('Falso');
}