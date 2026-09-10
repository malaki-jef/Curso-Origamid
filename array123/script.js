const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas[0]  //comidas.splice(0,1);
console.log(primeiraComida)
// Remova o último valor de comidas e coloque em uma variável~
const ultimaComida = comidas.splice(-1) //comidas[comidas.length -1];
console.log(ultimaComida)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)
console.log(comidas[comidas.length -1])
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe','Batata');
console.log(comidas)
const retornoDuasPrimeiras = comidas.splice(0,2)
console.log(retornoDuasPrimeiras)




const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes)
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes)
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')) // True
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')) // False



let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

// Substitua section por ul e div com li, utilizando split e join
html = html.split('section').join('ul')
html = html.split('div').join('li')
console.log(html)



const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// Remova o último carro, mas antes de remover salve a array original em outra variável
const arrayCarros = carros.slice()
console.log(arrayCarros)
const removerCarro = arrayCarros.pop();
console.log(arrayCarros)
console.log(removerCarro)



