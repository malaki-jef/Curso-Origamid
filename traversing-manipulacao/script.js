/*
const menu = document.querySelector('.menu');

menu.innerHTML; // html interno
menu.innerText; // texto, sem tags
menu.outerHTML; // todo o html do elemento
menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


const lista = document.querySelector('.animais-lista');
console.log(lista);
lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


const listinha= document.querySelector('.animais-lista');

listinha.previousElementSibling; // elemento acima
listinha.previousSibling; // node acima, aqui considera até o enter que foi inserido no texto.

listinha.firstChild; // primeiro node child
listinha.childNodes; // todos os node child 
listinha.lastChild; // último node child


const listona = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(listona); // move listona para o final de contato AppendChild adiciona o elemento no final do pai.
contato.insertBefore(listona, titulo); // insere a listona antes de titulo InsertBefore adiciona o elemento antes do elemento especificado.
contato.removeChild(titulo); // remove titulo de contato RemoveChild remove o elemento especificado do pai.
contato.replaceChild(listona, titulo); // substitui titulo por listona ReplaceChild substitui o elemento especificado pelo novo elemento.
*/

// EXERCICIOS ------------------------------------------------------------

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
copy.appendChild(menu.cloneNode(true)); // CloneNode clona o elemento e todos os seus filhos. true para clonar todos os filhos. se eu deixar false, clona apenas o elemento.

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista');
const priDt = faq.querySelector('dt');
console.log(priDt);

// Selecione o DD referente ao primeiro DT
const priDd = priDt.nextElementSibling;
console.log(priDd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;
console.log(faq);
