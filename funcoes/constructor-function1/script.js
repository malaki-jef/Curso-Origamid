// Função construtora com objeto seco, tudo aponta para carro.
/*
const carro = {
marca: 'Marca',
preco: 0,
}
const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;

console.log(carro);
console.log(honda);
console.log(fiat);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Funnção construtora com parametro, e novo objeto para cada chamada.
function Carro2(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
};

const honda2 = new Carro2('Honda', 4000);
const fiat2 = new Carro2('Fiat', 3000);

console.log(honda2);
console.log(fiat2);
*/

function Carro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
  }
  
const honda = new Carro('Honda', 2000);


// EXERCICIOS

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
}

function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(`${this.nome} andou!!`);
    };
}
const malaki = new Pessoa('Malaki', 30)
console.log(malaki)
console.log(malaki.andar())

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
  
const joao = new Pessoa ('João', 20);
const maria = new Pessoa ('Maria', 25);
const bruno = new Pessoa ('Bruno', 15);


  
// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. 
// Deve conter as seguintes propriedades e métodos: 
// Elements: retorna NodeList com os elementos selecionados -- addClass(classe): adiciona a classe a todos os elementos -- removeClass(classe): remove a classe a todos os elementos

function Dom(seletor){
    const elementosSelecionados = document.querySelectorAll(seletor);
    this.elements = elementosSelecionados;
    this.addClass = function(classe){
        elementosSelecionados.forEach((element)=> {
            element.classList.add(classe)
        })
    }
    this.remove = function(classe){
        elementosSelecionados.forEach((element)=> {
            element.classList.remove(classe)
        })
    }
}

const lista = new Dom("li");
lista.addClass('Ativo')
//lista.remove("Ativo")