import React, { useState } from 'react';
import {
  stats,
  flowSteps,
  impactAreas,
  features,
  timelineSteps,
  beneficios,
  profiles,
} from './problemSolutionData';
import StatCard from './components/StatCard';
import FlowStep from './components/FlowStep';
import ImpactCard from './components/ImpactCard';
import FeatureCard from './components/FeatureCard';
import TimelineStep from './components/TimelineStep';
import BeneficioCard from './components/BeneficioCard';
import ProfileCard from './components/ProfileCard';

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState('problem');

  return (
    <section className="problem-solution-section">
      <h2 className="problem-solution-title">Análise do Problema & Nossa Solução</h2>
      
      
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'problem' ? 'active problem-tab' : ''}`}
          onClick={() => setActiveTab('problem')}
        >
           Problematização
        </button>
        <button 
          className={`tab-button ${activeTab === 'solution' ? 'active solution-tab' : ''}`}
          onClick={() => setActiveTab('solution')}
        >
           Nossa Solução
        </button>
      </div>

      
      {activeTab === 'problem' && (
        <div className="tab-content problem-content">
          <div className="problem-overview">
            <h3 className="section-subtitle">Cenário Atual das Drogarias</h3>
            
           
            <div className="stats-grid">
              {stats.map((stat) => (
                <StatCard key={stat.numero} {...stat} />
              ))}
            </div>

           
            <div className="problem-flow">
              <h4>Ciclo Vicioso Atual</h4>
              <div className="flow-steps">
                {flowSteps.map((step, index) => (
                  <React.Fragment key={step.titulo}>
                    <FlowStep {...step} />
                    {index < flowSteps.length - 1 && (
                      <div className="flow-arrow">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

           
            <div className="impact-areas">
              {impactAreas.map((area) => (
                <ImpactCard key={area.titulo} {...area} />
              ))}
            </div>
          </div>
        </div>
      )}

     
      {activeTab === 'solution' && (
        <div className="tab-content solution-content">
          <div className="solution-overview">
            <h3 className="section-subtitle">TotSimple - Revolução no Atendimento</h3>
            
          
            <div className="brand-showcase">
              <div className="brand-logo">
                <div className="totem-icon"></div>
                <div className="brand-name">TotSimple</div>
              </div>
              <p className="brand-tagline">Autoatendimento Inteligente para Drogarias</p>
            </div>

           
            <div className="features-showcase">
              {features.map((feature) => (
                <FeatureCard key={feature.titulo} {...feature} />
              ))}
            </div>

           
            <div className="solution-flow">
              <h4>Novo Fluxo Otimizado</h4>
              <div className="flow-timeline">
                {timelineSteps.map((step) => (
                  <TimelineStep key={step.numero} {...step} />
                ))}
              </div>
            </div>

            
            <div className="beneficios-grid">
              {beneficios.map((beneficio) => (
                <BeneficioCard key={beneficio.titulo} {...beneficio} />
              ))}
            </div>

          
            <div className="adaptability-section">
              <h4> Adaptado para Todos os Perfis</h4>
              <div className="user-profiles">
                {profiles.map((profile) => (
                  <ProfileCard key={profile.titulo} {...profile} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProblemSolution;
