// Retorne um número aleatório
// entre 1050 e 2000

const numAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050
console.log(numAleatorio)
// Sintaxe: Math.floor(Math.random() * (max - min + 1)) + min

  // Retorne o maior número da lista abaixo
  let numeros = '4, 155, 20, 68, 9';
  let novoNum = numeros.split(',').map(Number);
  /*
  split gera ['4','5','20','8','9']
  o map vem e gera [4, 5, 20, 8, 9] Com esse array o Math.max funciona, e localiza o maior entre eles


  .map(Number) é igual:
  .map((item) => {
    return Number(item)
  });

  */  
  console.log(Math.max(...novoNum));

  

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
