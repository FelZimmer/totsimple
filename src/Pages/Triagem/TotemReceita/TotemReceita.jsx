import React, { useState } from 'react';
import './TotemReceita.css';
import { Link } from 'react-router-dom';
import FundoT from '../../../Components/FundoTotem/FundoT';
import Header from '../../../Components/Header/Header';

const ScannerReceita = ({ onRetornar, onEscanear }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRetornar = () => {
    if (onRetornar) onRetornar();
    console.log('Retornando para tela anterior');
  };

  const handleEscanear = () => {
    setIsScanning(true);
    if (onEscanear) onEscanear();
    console.log('Iniciando escaneamento da receita');

    setTimeout(() => {
      setIsScanning(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <>
    <Header />
      <div className="scanner-tela">
        

        <div className="scanner-background">
          <FundoT />
        </div>

        <div className="scanner-container">
          <div className="scanner-modal">
            <div className="scanner-header">
              <div className="scanner-icon">
                <svg className="icon-receita-scanner" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  <circle cx="4" cy="8" r="1"/>
                  <circle cx="4" cy="12" r="1"/>
                  <circle cx="4" cy="16" r="1"/>
                  <path d="M20 2L22 4L20 6L18 4Z" fill="currentColor"/>
                  <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>

            <div className="scanner-content">
              <h2 className="scanner-title">
                Posicione Sua<br />
                Receita no Scanner<br />
                Abaixo:
              </h2>

              <div className="scanner-buttons">
                <button
                  className="scanner-btn scanner-btn-retornar"
                  onClick={handleRetornar}
                  disabled={isScanning}
                >
                  Retornar
                </button>

                <button
                  className="scanner-btn scanner-btn-escanear"
                  onClick={handleEscanear}
                  disabled={isScanning}
                >
                  {isScanning ? (
                    <div className="loading-spinner">
                      <svg className="spinner-icon" viewBox="0 0 50 50">
                        <circle
                          className="path"
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          strokeWidth="5"
                        />
                      </svg>
                      Escaneando...
                    </div>
                  ) : (
                    'Escanear'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {showSuccess && (
          <div className="scanner-success-modal">
            <div className="scanner-success-content">
              <h3>✅ Receita escaneada com sucesso!</h3>
              <Link to='/Foto'>
              <button onClick={() => setShowSuccess(false)}>Fechar</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ScannerReceita;
