
import React from 'react';
import './Foto.css';
import { Link } from 'react-router-dom';
import FundoT from '../../../Components/FundoTotem/FundoT';
import Header from '../../../Components/Header/Header';


const Foto = () => {
  return (
    <div className="receita-container">
      <div className="background-pattern">
        <FundoT />
      </div>
      
      
      <Header />
<br />
<br />
<br />
<br />
<br />
<br />
      <div className="content-wrapper">
        <div className="receita-card">
          <div className="receita-header">
            <div className="caduceus-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 5L20 35M15 10L25 10M12 15L28 15M10 20L30 20M12 25L28 25M15 30L25 30" 
                      stroke="#d4a574" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="12" r="3" fill="none" stroke="#d4a574" strokeWidth="2"/>
                <circle cx="20" cy="28" r="3" fill="none" stroke="#d4a574" strokeWidth="2"/>
              </svg>
            </div>
            <div className="doctor-info">
              <h3>Dra. Amanda Moreira Batista</h3>
              <p>CRM MS - 0803</p>
            </div>
          </div>

          <div className="patient-info">
            <p><strong>Sra. Maria Clara Sicrana de Oliveira</strong></p>
            <p>Rua: Silva de Souza</p>
            <p>Ponta Porã</p>
          </div>

          <div className="usage-info">
            <p><strong>Uso Interno - Via Oral</strong></p>
          </div>

          <div className="medication">
            <p><strong>Ecobag TotSimple</strong> ......................... Sacola reutilizável que serve como alternativa às sacolas plásticas descartáveis.</p>
          </div>
          <div className="medication">
            <p><strong>Álcool Gel 70% TotSimple</strong> ......................... Serve para higienizar as mãos e desinfetar superfícies.</p>
          </div>

          <div className="instructions">
            <p>Brindes que se pode conseguir ao entrar em contato com a TotSimple.</p>
          </div>

          <div className="signature-section">
            <div className="signature">
              <div className="signature-line">AM</div>
              <p>Dra. Amanda Moreira Batista</p>
              <p>CRM MS - 0803</p>
            </div>
          </div>

          <div className="contact-info">
            <p>Contato: (12) 3456-7890</p>
            <p>Rua Alegre, 123</p>
            <p>Cidade Brasileira</p>
          </div>
        </div>

        <div className="confirmation-section">
          <h2>Esta correto a receita?</h2>
          
          <p>Se <span className="green-text">Sim</span> clique no Botão <span className="green-text">Azul</span></p>
          
          
          <p>Se <span className="red-text">Não</span> clique no Botão <span className="red-text">Vermelho</span></p>
          
          <div className="buttons">
            <Link to='/TotemReceita'>
            <button className="btn-refazer">Refazer</button>
            </Link>
            <Link to='/Dados'>
            <button className="btn-confirmar">Confirmar</button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Foto;