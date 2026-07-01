import React from 'react';
import './Scanner.css';
import Header from '../../Components/Header/Header';
import FundoT from '../../Components/FundoTotem/FundoT';
import { FaBarcode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
Link

const Scanner = () => {
  return (
    <div className="totem-container">
        <Header />
      
      <div className="geometric-bg">
        <FundoT />
      </div>

    
    

     
      <div className="payment-card">
        <div className="card-headerr">
          <div className="barcode-icon">
            
              <div className="barcode-lines">
                 <FaBarcode size={80} color="#ffffff" />
              </div>
              
                

           
          </div>
        </div>
        
        <div className="card-content">
          <h2 className="card-title">
            Escaneie o código de barras para adicionar ao carrinho
          </h2>
          <Link to = "/CarrinhoPagamento">
          <button className="start-buttonn">
            Começar
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
