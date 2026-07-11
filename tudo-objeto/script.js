// TUDO É OBJETO
let nome = 'Jefferson'
console.log(nome.length) // 9
console.log(nome.charAt(5)) // R
console.log(nome.replace('son', 'sonzão')) // Jeffersonzão
console.log(nome) // Jefferson  

// NUMEROS
let altura = 1.8000
console.log(altura.toFixed(2))
console.log(typeof(altura.toString()))

// FUNÇÕES
function areaQuadrado(lado) {
    return lado * lado;
}
console.log(areaQuadrado(2)) 
console.log(typeof(areaQuadrado.toString()));
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"
console.log(areaQuadrado.length); // 1


// ELEMENTOS DOM
let btnTest = document.querySelector('.btn-teste');
btnTest.classList.add('azul') // adicionando class no btn-teste
console.log(btnTest.innerText); // Captura do texto dentro da tag
btnTest.addEventListener('click', () => {
    console.log('Clicou')
});

// EXERCICIOS

// nomeie 3 propriedades ou métodos de strings
let nomeTeste = 'Malaki'
nomeTeste.length
nome.toUpperCase()
nome.toLowerCase()

// nomeie 5 propriedades ou métodos de elementos do DOM
/*
btnTest.appendChild()
btnTest.addEventListener()
btnTest.className.add('Blue');
btnTest.innerHTML
btnTest.animate()
*/

// busque na web um objeto (método) capaz de interagir com o clipboard, clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
const botao = document.querySelector('.copiar'); 

botao.addEventListener('click', async () => {

    await navigator.clipboard.writeText('Jefferson'); // Async e Await assuntos que estudarei na proxima grade, realizada essa atividadde com ajuda do Claude.
    console.log('Texto copiado!');
    const texto = await navigator.clipboard.readText();
    console.log(texto);

});