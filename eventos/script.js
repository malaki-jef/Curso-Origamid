// CALLBACK

/*
É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
*/
const img = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback); // Roda normalmente, pois passamos o callback da função criada acima.
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() { // Estrutura completa de um evento
  console.log('Clicou');
})
img.addEventListener('click', () => { // Estrutura com arrow function, passando uma função anonima.
  console.log('Clicou');
})


// Parametro 

const imgs = document.querySelector('img');

function callback(event) { // Event aqui vai trazer informações do evento, propriedades e metodos.
  console.log(event);
};
imgs.addEventListener('click', callback);
