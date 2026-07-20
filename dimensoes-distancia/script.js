// HEIGHT E WIDTH
const listaAnimais = document.querySelector('.animais-lista');
const dentroCaixa = listaAnimais.clientHeight; //A altura visível por dentro da caixa (sem contar a borda, sem contar o scrollbar)
const naCaixa = listaAnimais.offsetHeight //A altura visível da caixa, mas incluindo a borda (border) e o scrollbar, se tiver
const height = listaAnimais.scrollHeight; //A altura total do conteúdo, incluindo a parte escondida pelo scroll
const width = listaAnimais.scrollWidth;

/*
Podemos pegar também o width de ofset e client.

client = o que cabe dentro (sem border)
offset = o que aparece na tela (com border)
scroll = o que existe de verdade (mesmo escondido)
*/

console.log(height)
console.log(width)
console.log(dentroCaixa)
console.log(naCaixa)


// EXERCICIOS

// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
console.log(`A distância da primeira img em relação ao todo da pagina é de ${img.offsetTop}`);

// Retorne a soma da largura de todas as imagens
function somarImagens () {
const todasImgs = document.querySelectorAll('img');
let soma = 0;
todasImgs.forEach(function(img) {
    soma = soma + img.offsetWidth;   
    // mesma coisa que: soma += img.offsetWidth; 
});
console.log(`A soma de ${img.offsetWidth} x ${img.offsetWidth} que são as larguras das img, é igual a ${soma}`);
};

window.onload = function() { // Essa função está dizendo: "quando a página terminar de carregar TUDO (HTML, imagens, CSS, etc), execute a função somarImagens()". Para somar as imgs, preciso que todas elas tenham sido carregadas!
    somarImagens();
};
/*
O mais moderdo é usar, o exemplo abaixo, porque com ele não será permitodo sobrescrever. Caso eu tenha mais de um window.onload no codigo..

window.addEventListener('load', function() {
    somarImagens();
});
*/

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach(function(a) {
    if(a.offsetWidth >= 48 && a.offsetHeight >= 48) {
        console.log('Tem o minimo recomendado!!');
    } else {
        console.log('Não possui o minimo recomendavel que é 48px')
    }
}); 

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
};
