const fs = require('fs');

const obj = {
    nome: "Marcos",
    idade: 20,
    esta_trabalhando: true,
    detalhes_do_usuario: {
        cor_preferida: "preto",
        hobbies: ["ler", "programar", "viajar"]
    },
    lista_de_compras: [
        "miojo",
        "pepino",
        "frango"
    ]
};
//console.log(obj); // objeto
const json = JSON.stringify(obj); // converte o objeto em json colocando em uma variavel
//console.log(typeof json); // string
const obj2 = JSON.parse(json); // converte o json em objeto colocando em uma variavel
//console.log(typeof obj2); // object


const dados = fs.readFileSync('dados.txt', 'utf8');
//console.log(dados);


const usuarios = ["ana", "bruno", "carla"];
const usuariosMaiusculos = usuarios.map(usuario => usuario.toUpperCase());
//console.log(usuariosMaiusculos);

const frutas = "maça;banana;uva";
const frutasSeparadas = frutas.split(";");
//console.log(Array.isArray(frutasSeparadas)) Saber se é um array que retornou do split.
//console.log(frutasSeparadas[0])

const arrayHobbies = ['futebol','programar','acampar'];
const novosHobbies = arrayHobbies.map(item => item.length); // Verificando o tamanho de cada palavra no array.
console.log(novosHobbies)

const filtroHobbies = arrayHobbies.filter(item => item.includes(arrayHobbies[1])); // filtra o indece 1 do array original arrayHobbies
console.log(filtroHobbies)