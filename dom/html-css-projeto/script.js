// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img)

// Retorne no console apenas as imagens que começaram com a palavra imagem
img.forEach(function(img) {
    if(img.src="imagem") {
        console.log(img)
    }
});

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

