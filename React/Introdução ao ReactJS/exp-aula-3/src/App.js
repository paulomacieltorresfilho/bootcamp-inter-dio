import React from "react";
import mock from "./mock.js"
import './App.css';

const buttonB = <button>Cadastrar Cliente</button>
const hasCustomers = true;

function App() {
  
  const name = 'Digital Innovation One';
  
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  }

  const handleClick = (e, id) => {
    alert(`deletar cliente: ${id}`)
  }
  
  const renderCustomers = ({ id, name }, index) => {
    return (
      <li key={`customer-${id}`}>{name} <button onClick={(e) => handleClick(e, id)}>Deletar Cliente X</button></li>
      )
    }
    
    const showEvent = (e) => {
      console.log('evento clicado');
      console.log(e);
      alert(name);
    }
  
    const buttonA = <button onClick={showEvent}>Histórico dos Clientes</button>

    const renderShowHistory = (
      <div>
        Clique no botao abaixo para visualizar o histórico dos clientes
        <br />
        <input onChange={handleChange}/>
        {buttonA}
    </div>
  )
  
  const renderAddCustomer = (
    <div>
        Clique no botão abaixo para cadastrar um cliente
        <br />
        {buttonB}
    </div>
  )
  
  
  return (
    <div className="App">
      <h1>Minha Página</h1>
      <p>Está é minha página</p>
      {hasCustomers ? renderShowHistory : renderAddCustomer}
      <ul>
        {mock.listCustomers.map(renderCustomers)}
      </ul>

    </div>
  );
}

export default App;
