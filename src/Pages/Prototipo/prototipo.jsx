import React from 'react';
import './TotSimpleSelection.css';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';

const TotSimpleSelection = () => {
  
  const triagemFeatures = [
    'Interface intuitiva para pacientes',
    'Sistema de classificação de risco',
    'Integração com prontuário eletrônico',
    'Relatórios em tempo real',
    'Suporte multilíngue'
  ];

  const pagamentoFeatures = [
    'Múltiplas formas de pagamento',
    'Processamento seguro',
    'Emissão de comprovantes',
    'Integração com sistemas fiscais',
    'Interface touch amigável'
  ];

  return (
    <div className='background-prototipo'>
    <div className="totsimple-app">
    
      <Header />

  
      <main className="main-content">
        <div className="page-header">
          <h1 className="page-title">Escolha seu Protótipo</h1>
          <p className="page-subtitle">
            Selecione o tipo de totem que você deseja visualizar. 
            Cada protótipo foi desenvolvido com foco na experiência do usuário 
            e nas necessidades específicas de cada aplicação.
          </p>
        </div>
        
        <div className="cards-container">
          
          <div className="prototype-card" >
            <div className="card-header">
              <div className="card-icon">🏥</div>
              <h3 className="card-title">Totem Triagem</h3>
            </div>
            <p className="card-description">
              Sistema completo para triagem médica com classificação de risco e gestão de filas inteligente.
            </p>
            <ul className="card-features">
              {triagemFeatures.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

<Link to = "/Triagem"> 
            <button className="card-button">
              Ver Protótipo
          </button>
   </Link>        
          </div>
       
    
        
        </div>
      </main>
    </div>
    </div>
  );
};

export default TotSimpleSelection;