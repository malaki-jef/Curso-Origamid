// HEIGHT E WIDTH
const listaAnimais = document.querySelector('.animais-lista');
const dentroCaixa = listaAnimais.clientHeight; //A altura visível por dentro da caixa (sem contar a borda, sem contar o scrollbar)
const naCaixa = listaAnimais.offsetHeight //A altura visível da caixa, mas incluindo a borda (border) e o scrollbar, se tiver
const height = listaAnimais.scrollHeight; //A altura total do conteúdo, incluindo a parte escondida pelo scroll
const width = listaAnimais.scrollWidth;
console.log(height)
console.log(width)
console.log(dentroCaixa)
console.log(naCaixa)