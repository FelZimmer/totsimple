import React from 'react';
import Timeline from '../../Components/TimeLine/TimeLine';
import ProblemSolution from '../../Components/ProblemSolution/ProblemSolution';
import MobileDevice from '../../Components/MobileDevice/MobileDevice';
import Header from '../../Components/Header/Header';
import "./components.css";
import entrega from "/public/images/img/img111.png";
import sis from "/public/images/img/SISTEMATOTEM.png";


const Index = () => {
  return (
    
    <div className="page-container">
<Header />

<section className="back-vision-mission">
      <section className="vision-mission-section">
        
        <div className="vision-content">
          <h2>Nossa Missão e Nossa Visão</h2>
          <p className="vision-text">
            Na TotSimple, nossa missão é revolucionar o atendimento em drogarias através da tecnologia, 
            proporcionando uma experiência mais eficiente, humanizada e satisfatória para todos.
          </p>
          <ul className="vision-list">
            <li>Reduzir filas e tempo de espera através do autoatendimento inteligente</li>
            <li>Melhorar a qualidade de vida dos funcionários reduzindo o estresse operacional</li>
            <li>Aumentar a satisfação e fidelização dos clientes</li>
          </ul>
        </div>
        <div className="vision-illustration">
          <img src={sis}></img>
        </div>
         <div className="custom-shape-divider-bottom-17597040001">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"opacity=".25"className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"opacity=".5"className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"className="shape-fill"></path>
        </svg>
       </div>
      </section>
</section>
    <section className="back-why-choose">
      <section className="why-choose-section">
        <div className="why-choose-illustration">
         <img src={entrega} alt="" />
        </div>
        <div className="why-choose-content">
          <h2>O que entregamos?</h2>
          <p className="why-choose-text">
            A TotSimple oferece uma solução inovadora que transforma completamente a experiência 
            de atendimento em drogarias, beneficiando clientes, funcionários e proprietários.
          </p>
          <h3 className="objectives-title">Nossos Objetivos Específicos:</h3>
          <ul className="objectives-list">
            <li>Implementar sistema de autoatendimento para receitas médicas</li>
            <li>Digitalizar e otimizar o processo de triagem de medicamentos</li>
            <li>Reduzir significativamente o tempo de espera dos clientes</li>
            <li>Melhorar o ambiente de trabalho dos farmacêuticos e atendentes</li>
            <li>Aumentar a eficiência operacional e satisfação geral</li>
          </ul>
        </div>
      </section>
</section>
  <section className="back-roadmap">
      <section className="roadmap-section">
        <div className="custom-shape-divider-top-17597125011">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
        <h2 className="roadmap-title">Nosso RoadMap & Plano do Projeto</h2>
        <Timeline />  
        <div className="custom-shape-divider-bottom-17597040001">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"opacity=".25"className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"opacity=".5"className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"className="shape-fill"></path>
        </svg>
       </div>  
      </section>
    </section>
      <ProblemSolution />
    </div>
  );
};

export default Index;