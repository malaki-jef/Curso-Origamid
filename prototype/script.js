function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

const andre = new Pessoa('André', 28);

Pessoa.prototype.andar = function() { // Aqui ele se torna um objeto.
return this.nome + ' andou';
}


console.log(typeof(Pessoa)); // retorna a função
console.log(typeof(Pessoa.prototype)); // retorna o objeto
console.log(andre.prototype); // undefined
