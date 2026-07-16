// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');

// Retorne no console apenas as imagens que começaram com a palavra imagem
img.forEach(function(img) {
    if(img.src="imagem") {
        console.log(img)
    }
});

/*
forEach é um método de Array, alguns objetos semelhantes a array possuem esse método. Caso não possua, o ideal é transformá-los em uma matriz. Usando o ARRAY.FROM()!

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});
*/

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('a[href^="#"]')
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const ultimoParagrado = document.querySelectorAll('p');
const pegandoUltimoP = ultimoParagrado[ultimoParagrado.length -1];
console.log(pegandoUltimoP)


// Mostre no console cada parágrado do site Mostre o texto dos parágrafos no console
const todosP = document.querySelectorAll('p');
todosP.forEach(function(todoP, index) {
    const valorP = todoP.innerText
    console.log(index, valorP)
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));

// Adicione a classe ativo a todos os itens do menu
const todoMenu = document.querySelectorAll('.menu li');
todoMenu.forEach(function(ativo){
    ativo.classList.add('ativo')
    console.log(ativo)
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
todoMenu.forEach(function(removeAtivo,index) {
    if(index ===0){
       removeAtivo.classList.add('ativo')
       console.log(removeAtivo)
    } else {
        removeAtivo.classList.remove('ativo')
        console.log(removeAtivo)
    };    
})
// Verifique se as imagens possuem o atributo alt
imgs.forEach(function(img) {
  console.log(img.hasAttribute('alt'));
});
