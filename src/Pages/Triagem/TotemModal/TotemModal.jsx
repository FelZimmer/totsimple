import React, { useState } from 'react';
import './TotemModal.css';
import Header from '../../../Components/Header/Header';
import { Link } from 'react-router-dom';

import FundoT from '../../../Components/FundoTotem/FundoT';

const TriagemTela = () => {
  const [ setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    
    alert(`Você selecionou: ${option === 'receita' ? 'Tenho Receita' : 'Medicamentos do Balcão (Sem Receita)'}`);
  };

  const handleCancel = () => {
    setSelectedOption(null);
  };

  return (
 <>
 <Header />
    <div className="triagem-tela">
        
       
<div className="triagem-container  ">
        <div className="triagem-modal">
          <div className="triagem-header">
            <h2 className="triagem-title">Como você deseja continuar?</h2>
          </div>
          
          <div className="triagem-content">

            
            <div className="triagem-options">
             <Link to = "/TotemReceita"> 
              <button className="triagem-option"onClick={() => handleOptionClick('receita')}>

                <div className="triagem-option-icon">
                  <svg className="icon-receita" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    <circle cx="4" cy="8" r="1"/>
                    <circle cx="4" cy="12" r="1"/>
                    <circle cx="4" cy="16" r="1"/>
                  </svg>
                </div>
                <div className="triagem-option-text">
                  Tenho<br />Receita
                </div>

              </button>
            </Link>
 <Link to = "/TotemReceita"> 
              <button 
                className="triagem-option"
                onClick={() => handleOptionClick('balcao')}
              >
                <div className="triagem-option-icon">
                  <svg className="icon-pilula" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="triagem-option-text">
                  Medicamentos<br />do Balcão<br />(Sem Receita)
                </div>
              </button>
    </Link>
            </div>
  <Link to='/prototipo'>
            <button className="triagem-cancel" onClick={handleCancel}>
              Cancelar
            </button>
            </Link>
          </div>
        </div>
      <div className="triagem-background">
        <div calssName="">
          <FundoT />
        </div>
      </div>

      
      </div>
    </div>
  
   </>
  );
};

export default TriagemTela;