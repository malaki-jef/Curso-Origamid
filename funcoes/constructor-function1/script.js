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
  