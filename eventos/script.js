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

// Propriedade do EVENT

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.composedPath();
  console.log(currentTarget, target, type, path);
}
document.addEventListener('click', executarCallback);
/*
currentTarget =	Elemento com o listener
target =	Elemento clicado de fato
type =	Tipo do evento ("click", etc)
composedPath() =	Caminho de propagação (substitui path)
*/


// FOREACH E EVENTOS
const imagens = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imagens.forEach((img) => {
  img.addEventListener('click', imgSrc);
});
