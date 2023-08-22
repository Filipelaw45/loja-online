import { useState } from 'react';
import './Body.css';

function Body() {
  const [compraMes, setCompraMes] = useState('');
  const [valorCompras, setValorCompras] = useState('');
  const [desconto, setDesconto] = useState('');
  const [total, setTotal] = useState('');

function calculaDesconto(){

    let totalDesconto = parseFloat(0);
    let novoTotal = parseFloat(valorCompras);

    if (valorCompras >= 500) {
      totalDesconto = parseFloat(valorCompras * 0.1) + parseFloat(totalDesconto);
    }

    if (compraMes > 3) {
      totalDesconto = parseFloat(valorCompras * 0.07) + parseFloat(totalDesconto);
    }

    novoTotal = parseFloat(novoTotal) - parseFloat(totalDesconto);


    setDesconto(totalDesconto.toFixed(2));
    setTotal(novoTotal.toFixed(2));
  }

  return (
    <div className='main-container'>

      <form onSubmit={(e)=> e.preventDefault()} className='input-container'>

        <label htmlFor='comprasMes'>Número de compras</label>
        <input
          className='input-content'
          type='number'
          placeholder='Número de compras'
          onChange={(e) => {
            setCompraMes(e.target.value)
          }}
          value={compraMes}
        />

        <label htmlFor='valorCompras'>Valor das compras</label>
        <input
          className='input-content'
          type='number'
          placeholder='Valor das compras'
          onChange={(e) => {
            setValorCompras(e.target.value)
          }}
          value={valorCompras}
        />

        <button
          className='btn-search'
          onClick={() => calculaDesconto()}
        >Calcular</button>
        
      </form>


      <div id='result'>
        <div className='result-content'>
          <span>Valor</span>
          <span>{valorCompras}</span>
        </div>
        <div className='result-content'>
          <span>Desconto</span>
          <span>{desconto}</span>
        </div>
        <div className='result-content'>
          <span>Total</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
}

export default Body