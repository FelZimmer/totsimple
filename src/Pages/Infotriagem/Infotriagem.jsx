import React from 'react';
import './infotriagem.css';
import Header from '../../Components/Header/Header';

const Infotriagem = () => {
  return (
    <div className="produtos-container">
      <Header />
  <br />
  <br />
  <br />
  <br />
      <section className="hero-sectione">
        <div className="hero-contente">
          <div className="texto-info">
            
            <h1>Para criar o sistema utilizaremos as seguintes ferramentas</h1>
            
            <div className="description">
              <p>
                <strong>Software de Desenvolvimento:</strong> Utilizamos React.js com Tailwind CSS para 
                o desenvolvimento do front-end da interface dos totens, 
                Node.js para o back-end e APIs para integração com os sistemas internos 
                da Drogaria.
              </p>
            </div>

            <div className="tech-list">
              <div className="tech-item">
                <div className="tech-icon"></div>
                <span>React.js, usando JSX e HTML</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon"></div>
                <span>Node.js para Back-end</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon"></div>
                <span>Supabase como banco de dados</span>
              </div>
            </div>
          </div>
          
          <div className="info-image">
            <img src="/public/images/img/Copilot_20251025_203840.png" alt="Totem de triagem" />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1759704000">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
       </div>
     </section>


      <section className="totem-section">
        <div className="totem-content">
          <div className="totem-info">
            <h2>
             
              <span className="highlight"> Totem Triagem</span>
            </h2>
            
            <p className="totem-description">
              Quando o cliente chega à drogaria, ele insere sua receita no <strong>Tot Triagem</strong>, que 
              automaticamente digitaliza e pré-seleciona os medicamentos de acordo com a 
              prescrição. O cliente então tem a opção de adicionar outros medicamentos que ele 
              precise, criando um pedido personalizado para a farmácia. Enquanto o pedido 
              está sendo processado, o cliente pode explorar a drogaria com autonomia, 
              aproveitando o tempo para adquirir outros produtos que não exigem receita ou que 
              estão disponíveis fora do balcão, tornando sua experiência mais eficiente e fluida.
            </p>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon"></div>
                <span>Leitura de receita rapidamente</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon"></div>
                <span>Gestão eficaz do tempo</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon"></div>
                <span>Autonomia do Cliente</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon"></div>
                <span>Experiência mais eficiente e fluida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section className="components-section">
        <div className="custom-shape-divider-top-1759712501">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
        <div className="components-content">
          <div className="components-image">
            <div className="scanner-illustration">
              <img src="/public/images/img/totemaa.png" alt="" />
            </div>
          </div>

          <div className="components-list">
            <div className="component-item">
              <div className="component-number">1</div>
              <div className="component-info">
                <h3>Scanner óptico</h3>
                <p>Feito para realizar a leitura das receitas médicas(somente impressas);</p>
              </div>
            </div>

            <div className="component-item">
              <div className="component-number">2</div>
              <div className="component-info">
                <h3>Impressora térmica</h3>
                <p>Utilizadas para emissão de comprovantes para cliente e pedido para o funcionário;</p>
              </div>
            </div>

            <div className="component-item">
              <div className="component-number">3</div>
              <div className="component-info">
                <h3>Tela touchscreen e convencional</h3>
                <p>A tela touchScreen será utilizada para interação do cliente e a tela convencional será para o funcionário .</p>
              </div>
            </div>

            <div className="component-item">
              <div className="component-number">4</div>
              <div className="component-info">
                <h3>CPU</h3>
                <p>equipada com nosso software, responsável por gerenciar todo o processo de triagem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infotriagem;