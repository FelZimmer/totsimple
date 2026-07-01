import React from 'react';
import './PagamentoFim.css';
import FundoT from '../../Components/FundoTotem/FundoT';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
Link

const PagamentoFim = () => {
  return (
    <div className="payment-success">
        <Header></Header>
    <div className='backFim'>
      <FundoT></FundoT>
</div>
     

  
      <div className="success-modal">
        <div className="success-header">
          <div className="check-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
          </div>
        </div>
        <div className="success-content">
          <h1 className="success-title">Pagamento aprovado!</h1>
          <p className="success-message">
            Você já pode levar<br />
            suas compras!
          </p>
          <Link to = "/">
          <button className="finish-button">
            Encerrar
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PagamentoFim;