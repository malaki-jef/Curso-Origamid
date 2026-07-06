// TIPOS DE VARIAVEIS
var nome = "Jefferson" // Praticamente não utilizamos mais essa declaração
let sobreNome = "Malaki" // Let é muito usada, é uma variavel que pode ser atualizada
const apelido = "Malak" // Const é uma variavel constante, ou seja ela não atualiza
console.log(nome,sobreNome,apelido)

// EVITAR REPETIÇÕES
let preco = 5
let totalComprado = 2
let totalPreco = preco * totalComprado // Utilizei de duas variaveis para multiplicar entre elas, então perco a necessidade de ficar reescrevendo linha de codigo repetidas
console.log(totalPreco)

// VARIAVEIS SEM VALOR
let semDefinirValor; //Podemos declarar uma variavel e não passar valor para ela no momento, e mais a frente declarar. Nesse momento a variavel retorna o valor UNDEFINED
semDefinirValor = "Olá, Mundo!"
console.log(semDefinirValor)

// VARIAVEIS SEGUIDAS POR VIRGULA
let faculdade = "Federal Santa Catarina",
    curso = "Analise e desenvolvimento de sistemas",
    anoTermino = 2027;
console.log(faculdade,curso,anoTermino)


// EXERCICIOS

// Declarar uma variável com o seu nome
let myName = "Jefferson Malaki"
// Declarar uma variável com a sua idade
let myAge = 30
// Declarar uma variável com a sua comida favorita e não atribuir valor
let food;
// Atribuir valor a sua comida favorita
food = "X-coração"
// Declarar 5 variáveis diferentes sem valores
let timeFavoritos = "Meus Times",
    vasco = "Vasco",
    realMadrid = "Real Madrid",
    brasil = "Brasil",
    bergamota = "Begamota";
console.log(myName,myAge,food,timeFavoritos,vasco,realMadrid,brasil,bergamota)