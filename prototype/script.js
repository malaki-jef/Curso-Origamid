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


function Carro(marca) {
  this.marca = marca;
}
Carro.prototype.buzinar = function() {
  console.log('Bi bi!');
};
const honda = new Carro('Honda');

console.log(honda.hasOwnProperty('marca'));    // true  → é do próprio objeto
console.log(honda.hasOwnProperty('buzinar'));  // false → não é do objeto...
honda.buzinar();                  // ...mas funciona mesmo assim!

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
};

Pessoas.prototype.todoNome = function() {
  return console.log(`${this.nome} ${this.sobreNome}`)
}

const nomeCompleto = new Pessoas("Jefferson","Malaki",30)


console.log(nomeCompleto);
console.log(nomeCompleto.todoNome());


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype)
console.log(NodeList.constructor.name)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
