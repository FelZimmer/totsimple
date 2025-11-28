import React from 'react';
import './Triagem.css';
import Header from '../../../Components/Header/Header';
import { Link } from 'react-router-dom';
import FundoT from '../../../Components/FundoTotem/FundoT';

const TotemTriagem = () => {
  const handleIniciarTriagem = () => {
    console.log('Iniciando triagem...');
    // Aqui seria implementada a lógica para iniciar a triagem
  };

  const handleAcessibilidade = () => {
    console.log('Abrindo opções de acessibilidade...');
    // Aqui seria implementada a lógica para acessibilidade
  };

  return (
    <div className="totem-container">
      
      <FundoT />

      
     
      <Header />

     
      <main className="main-triagem">
        <div className="welcome-section">
          <h1 className="welcome-title">Seja Bem Vindo!</h1>
          <p className="welcome-subtitle">
            Faça sua triagem de forma rápida: com ou sem receita
          </p>
         <Link to = "/TotemModal">
          <button 
            className="start-button"
            onClick={handleIniciarTriagem}
          >
            Iniciar Triagem
          </button>
          </Link>
        </div>
      </main>

     
      <button 
        className="accessibility-button"
        onClick={handleAcessibilidade}
        aria-label="Opções de acessibilidade"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
          <path d="M12 12v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default TotemTriagem;