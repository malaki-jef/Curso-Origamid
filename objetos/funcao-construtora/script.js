// Função Construtora
function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
};

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

console.log(honda);
console.log(fiat);


function Pessoa() {
    this.nome = 'Sem nome';
}

const joao = new Pessoa();
const maria = new Pessoa();
maria.nome = 'Maria';
console.log(joao);