/*
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

const andre = new Pessoa('André', 28);

Pessoa.prototype.andar = function() { // Aqui ele se torna um objeto. Adiciona novas propriedades e métodos ao objeto protótipo.
return this.nome + ' andou';
}


console.log(typeof(Pessoa)); // retorna a função
console.log(typeof(Pessoa.prototype)); // retorna o objeto
console.log(typeof(andre))
console.log(typeof(andre.prototype)); // undefined




const lista = document.querySelectorAll('li');
console.log(lista)
// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
console.log(listaArray)



Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));

*/

// EXERCICIOS

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas (nome, sobreNome, idade) {
  this.nome = nome;
  this.sobreNome = sobreNome;
  this.idade = idade;
}


const nomeCompleto = new Pessoas("Jefferson","Malaki",30)
Pessoas.todoNome = function() {
  return this.nome + this.sobreNome
}

console.log(nomeCompleto);
console.log(Pessoas.todoNome());


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
/*const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
*/