import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
   ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
const pedro = {
  cliente: 'Pedro',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 12500' },
    { nome: 'Geladeira', preco: 'R$ 6000' },
    { nome: 'Smartphone', preco: 'R$ 17500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: true,
};

const App = () => {
  const clientes = [luana, mario,pedro];  

  return (
    <>
    {clientes.map((cliente) => {
      const total = cliente.compras.map((preco) => Number(preco.preco.replace('R$',''))).reduce((a,b) => a +b)
      return (
      <div>
        <p>Nome: {cliente.cliente}</p>
        <p>Idade: {cliente.idade}</p>
        <p>
        Situação:{' '}
          <span style={{ color: cliente.ativa ? 'green' : 'red' }}>
            {cliente.ativa ? 'Ativa' : 'Inativa'}
          </span>
        </p>
        <p>Total: R$ {total}</p>
        {total > 10000 && <p>Você está gastando muito</p>}
        <p>#############################################</p>
      </div>)      
    })}
    
    </>
  );
};
export default App
