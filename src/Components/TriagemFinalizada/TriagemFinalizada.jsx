import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TriagemFinalizada.css';
import Header from '../Header/Header';
import FundoT from '../FundoTotem/FundoT';

const TriagemFinalizada = () => {
  const [senha, setSenha] = useState('64');
  const navigate = useNavigate();

  useEffect(() => {
    const senhaAleatoria = Math.floor(Math.random() * 99) + 1;
    setSenha(senhaAleatoria.toString().padStart(2, '0'));
  }, []);

  const handleNovaTriagem = () => {
    navigate('/'); 
  };

  const handleAjuda = () => {
    alert('Procure um funcionário para obter ajuda com sua triagem.');
  };

  return (
    <>
      <div className="fundo-totem-wrapper">
        <FundoT />
      </div>
      <div className="triagem-finalizada">
        <Header />
        <main className="main-finalizada">
          <div className="content-finalizada">
            <h1 className="titulo-principal">A sua Triagem foi realizada!</h1>
            <p className="descricao">
              O farmacêutico analisará o seu pedido e<br />
              você poderá retirá-lo utilizando esta senha:
            </p>

            <div className="senha-container">
              <div className="senha-card">
                <span className="senha-numero">{senha}</span>
              </div>
            </div>

            <div className="botoes-container">
              <button className="btn-ajuda" onClick={handleAjuda}>
                <span className="ajuda-icon">?</span>
                Ajuda
              </button>
            </div>

            <div className="nova-triagem-container">
              <button className="btn-nova-triagem" onClick={handleNovaTriagem}>
                Nova Triagem
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TriagemFinalizada;
