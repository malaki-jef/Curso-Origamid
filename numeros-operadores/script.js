// NUMEROS
let idade = 30
let gols = 1000
let pi = 3.14
let exp = 2e10  
console.log(idade,gols,pi,exp)

// OPERADORES ARITMETICOS
let soma = 100 + 50; // 150
let subtracao = 100 - 50; // 50
let multiplicacao = 100 * 2; // 200
let divisao = 100 / 2; // 50
let expoente = 2 ** 4; // 16
let modulo = 14 % 5; // 4

// OPERADORES ARITMETICOS (STRING)
let somaString = '100' + 50; // 10050 -> Aqui esta concatenando o valor
let subtracaoString = '100' - 50; // 50 -> Aqui realmente esta acontecendo a redução do valor
let multiplicacaoString = '100' * '2'; // 200 -> Aqui acontece a multiplicação do valor da string
let divisaoString = 'Comprei 10' / 2; // NaN (Not a Number)

// NAN = NÃO É NUMERO
let numero = 80
let unidade = 'kg'
let peso = numero + unidade
let pesoDividido = peso / 2 // NAN Ele não realiza o calculo porque o 80kg se tornou uma string
console.log(peso, pesoDividido)

// ORDEM DE GRANDEZA
let total1 = 20 + 5 * 2; // 30
let total2 = (20 + 5) * 2; // 50
let total3 = 20 / 2 * 5; // 50
let total4 = 10 + 10 * 2 + 20 / 2; // 40
console.log(total1,total2,total3,total4)

/*
=========================================
    ORDEM DE PRIORIDADE DOS OPERADORES
=========================================

1. ()                -> Parênteses
2. **                -> Potenciação
3. *, /, %           -> Multiplicação, Divisão e Módulo (Resto da divisão)
4. +, -              -> Soma e Subtração
5. >, <, >=, <=      -> Comparações
6. ===, !==, ==, !=  -> Igualdade e Diferença
7. &&                -> E (AND)
8. ||                -> Ou (OR)
9. ??                -> Coalescência nula (Nullish)
10. =, +=, -=, *=... -> Atribuições

-----------------------------------------
REGRA IMPORTANTE
-----------------------------------------

Quando dois operadores possuem a mesma prioridade,
o JavaScript executa da ESQUERDA para a DIREITA.

Exemplos:

20 / 2 * 5
↓
10 * 5
↓
50

10 + 20 - 5
↓
30 - 5
↓
25

=========================================
DICA
=========================================

Sempre que houver dúvida, utilize parênteses.

20 + 5 * 2      // 30
(20 + 5) * 2    // 50

Os parênteses tornam o código mais legível e evitam erros.
*/

// OPERADORES ARITMETICOS UNARIOS
let incremento = 5
let incremento2 = 5
console.log(incremento++)
console.log(++incremento2)
let decremento = 5
let decremento2 = 5
console.log(decremento--)
console.log(--decremento2)


// EXERCICIO 

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total)
// Crie duas expressões que retornem NaN
let numeroReal = 20
let unidadeMedida = "kg"
console.log(numeroReal + unidadeMedida / 2)
// Somar a string '200' com o número 50 e retornar 250
let somar = '200'
let num = 50
console.log(Number(somar) + num)
// Incremente o número 5 e retorne o seu valor incrementado
let incrementacao = 5
console.log(++incrementacao)
// Como dividir o peso por 2?
let numero1 = '80';
let unidade1 = 'kg';
let peso1 = numero1 + unidade1; // '80kg'
let pesoPorDois = parseInt(peso1) / 2; // NaN (Not a Number)
console.log(pesoPorDois)
