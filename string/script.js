// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  
  let totalTaxas = 0;
  let totalRecebimentos = 0;
  transacoes.forEach((valor) =>{
    if(valor.descricao.includes('Taxa') == true){
        const valorArray = valor.valor.split('R$').join('');
        totalTaxas = totalTaxas + Number(valorArray);
    };
  });
  console.log(totalTaxas);

  transacoes.forEach((valorR) => {
    if(valorR.descricao.includes('Recebimento') == true){
        const valorRArray = valorR.valor.split('R$').join('');
        totalRecebimentos = totalRecebimentos + Number(valorRArray);
    }
  })
console.log(totalRecebimentos)


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const listaArray = transportes.split(';');
console.log(listaArray)


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;


const novoHtml = html.replace(/span/g, 'a');
console.log(novoHtml)


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length -1])


// Retorne o total de taxas
const transacao = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalDeTaxas = 0;
transacao.forEach((item) => {
    if(item.toLowerCase().includes('taxa') === true){
        totalDeTaxas = totalDeTaxas + 1
    };
    
})
console.log(totalDeTaxas);


  