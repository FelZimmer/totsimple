
import "./FeatureSection.css";
import React from "react";
import  Totemm  from "./Totemm.png";
import { WiTime1 } from 'react-icons/wi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { MdPeopleAlt } from 'react-icons/md';
import { LuComputer } from 'react-icons/lu';
import { FaHeadSideMask } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';

const features = [
  {
    id: 1,
    title: "Redução do Tempo de Espera no Balcão",
    description: "O cliente pode aproveitar o tempo de espera para fazer outras compras na Drogaria, tornando sua experiência mais ágil e produtiva.",
    icon: <WiTime1 size={30} color="#000000ff" />,
    position: "top-left"
  },
  {
    id: 2,
    title: "Aumento do Ticket Médio nas Drogarias",
    description: "Enquanto aguarda o pedido, o cliente pode explorar a loja e realizar novas compras, aumentando as vendas da Drogaria e tornando o tempo de espera mais proveitoso",
    icon: <FaMoneyBillTrendUp size={30} color="#000000ff" />,
    position: "top-right"
  },
  {
    id: 3,
    title: "Geração de Autonomia para o Cliente",
    description: "O cliente ganha autonomia para realizar todo o processo de compra de forma independente, enquanto a Drogaria se destaca como moderna e inovadora.",
    icon: <MdPeopleAlt size={30} color="#000000ff" />,
    position: "middle-left"
  },
  {
    id: 4,
    title: "totens em drogarias, equipado com: ",
    description: "Leitura digital de receitas médicas, rápida e segura; Envio automático de pedidos para o farmacêutico; Pagamentos integrados, de forma prática e interativa",
    icon: <LuComputer size={30} color="#000000ff" />,
    position: "middle-right"
  },
  {
    id: 5,
    title: "Diminuição da Carga dos Funcionários",
    description: "Com o TotSimple, o farmacêutico pode focar em tarefas estratégicas, enquanto o sistema automatiza processos, reduz a carga repetitiva e melhora a produtividade e o bem-estar da equipe",
    icon: <FaHeadSideMask size={30} color="#000000ff" />,
    position: "bottom-left"
  },
  {
    id: 6,
    title: "Redução de Filas",
    description: "Reduz o tempo de permanência do cliente na fila e distribui o fluxo de atendimento, permitindo que a Drogaria atenda mais clientes de maneira mais eficiente, sem sobrecarregar os funcionários.",
    icon: <FaPeopleGroup size={30} color="#000000ff" />,
    position: "bottom-right"
  }
];

const FeaturesSection = () => {
  return (
    <section className="smartwatch-section">
      <div className="container">
        <div className="features-grid">
          
        
          <div className="features-column left-column">
            {features.filter(feature => feature.position.includes('left')).map((feature, index) => (
              <div 
                key={feature.id}
                className={`feature-item left-feature feature-${index + 1}`}
              >
                <div className="feature-content">
                  <div className="feature-icon">
                    <span>{feature.icon}</span>
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
                <div className="connecting-line left-line"></div>
              </div>
            ))}
          </div>

    
          <div className="center-column">
            <div className="smartwatch-container">
              <img 
                src={Totemm} 
                alt="Smartwatch" 
                className="smartwatch-image"
              />
            </div>
          </div>

         
          <div className="features-column right-column">
            {features.filter(feature => feature.position.includes('right')).map((feature, index) => (
              <div 
                key={feature.id}
                className={`feature-item right-feature feature-${index + 1}`}
              >
                <div className="connecting-line right-line"></div>
                <div className="feature-content">
                  <div className="feature-icon">
                    <span>{feature.icon}</span>
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
