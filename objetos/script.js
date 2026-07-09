// OBJETOS
let pessoa = {
    nome: "Jefferson",
    idade: 30,
    profissao: "Dev",
    possuiFaculdade: true,
};
console.log(pessoa.nome, pessoa.idade, pessoa.profissao, pessoa.possuiFaculdade)

// MÉTODOS
let quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado
    }
}
console.log(quadrado.lados) // 4
console.log(quadrado.area(5)) // 25
console.log(quadrado.perimetro(5)) // 20

// Forma compacta de usar function;
let retangulo = {
    vertical: 4,
    area(horizontal) {
        return horizontal * horizontal
    },
    perimetro(horizontal) {
        return this.vertical * horizontal
    }
};
console.log(retangulo.vertical) // 4
console.log(retangulo.area(5)) // 25
console.log(retangulo.perimetro(5)) // 20


// ORGANIZAR O CODIGO
Math.PI;
Math.random();

let pi = Math.PI;
console.log(pi.toFixed(2));

// CONJUNTO DE NOTAÇÃO DE PONTO
let corFavorita = {
    cor: 'Amarela',
    cores: 'Colorido'
}
console.log(corFavorita.cor, corFavorita.cores)
corFavorita.cor = "Azul"
corFavorita.cores = "Preto e Branco"
console.log(corFavorita.cor, corFavorita.cores)

// ADICIONAR PROPRIEDADES E METODOS
let menu = {
    altura: 800,
}
console.log(menu)
menu.largura = 500;
menu.volume = "50ml"
console.log(menu);

