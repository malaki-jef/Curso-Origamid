// ARRAY
let videoGame = ['Switch','PS4','Xbox'];
console.log(videoGame[0]) // Seleção de elemento array apartir do indice, nesse caso o indice 0 é o Switch
console.log(videoGame[2]) // Xbox

/*
Resumo dos mais importantes: 

push()	Adiciona no final
pop()	Remove o último
shift()	Remove o primeiro
unshift()	Adiciona no início
includes()	Verifica se existe
indexOf()	Procura o índice
find()	Retorna o primeiro elemento encontrado
findIndex()	Retorna o índice do elemento encontrado
filter()	Filtra elementos
map()	Cria um novo array transformado
forEach()	Percorre o array
some()	Verifica se algum elemento atende à condição
every()	Verifica se todos atendem à condição
sort()	Ordena o array
reverse()	Inverte a ordem
slice()	Copia parte do array
splice()	Remove, adiciona ou substitui elementos
concat()	Junta arrays
join()	Converte o array em uma string
reduce()	Reduz o array a um único valor
*/

// FOR LOOP
for(let numero = 0; numero < 10; numero++) {
    console.log(numero)
};  // Retorna de 0 a 9 no console
/* O for loop possui 3 partes, início (let numero = 0), condição (numero < 10) e incremento (numero ++)*/


// WHILE LOOP
let i = 0;
while(i<10){
    console.log(i);
    i++;
}; // Retorna de 0 a 9 no console


// ARRAYS E LOOPS
let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for(let i = 0; i < videoGames.length; i++){
    console.log(videoGames[i])
};

// BREAK
let videoGamess = ['Switch', 'PS4', 'XBOX', 'NINTENDO'];
for(let i=0;i<videoGamess.length;i++){
    console.log(videoGamess[i])
    if(videoGamess[i] === "PS4"){
        break // O loop irá parar caso encontro e palavra break
    };
};


// FOREACH
let games = ['PS1', 'PS4', 'XBOX', 'NINTENDO'];
games.forEach(function(item,index,array){
    console.log(item,index,array) // Podemos passar os seguintes parâmetros item, index e array
});

// EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let brasilCampeao = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let i=0; i<brasilCampeao.length;i++){
    if(brasilCampeao[i] == 2002){
        console.log(`O brasil foi campeão em ${brasilCampeao[i]}!`)
    };
};

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(let i=0;i<frutas.length;i++){
    console.log(frutas[i])
    if(frutas[i] === "Pera"){
        break
    };
};
// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta);