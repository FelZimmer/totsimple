import React from 'react';
import { Link } from 'react-router-dom';
import './CarrinhoPagamento.css';
import Header from '../../../Components/Header/Header';
import FundoT from '../../../Components/FundoTotem/FundoT';
import { useCarrinho } from '../../../hooks/useCarrinho';

const CarrinhoPagamento = () => {
  const {
    medicamentosBalcao,
    medicamentosReceita,
    todosMedicamentos,
    subtotal,
    desconto,
    total,
    removerBalcao,
    removerReceita,
    resetarReceita,
  } = useCarrinho();

  return (
    <> <div className="fundo-totem-wrapper">
            <FundoT />
          </div>
    <div className="pagamento-wrapper">
     
      <Header />

      <main className="pagamento-main">
        <div className="medicamentos-section">
          <h2>Medicamentos no Carrinho</h2>
          
          {medicamentosReceita.length > 0 && (
            <div className="medicamentos-receita-section">
              <h3>Medicamentos da Receita</h3>
              {medicamentosReceita.map(med => (
                <div key={med.id} className="medicamento-card receita">
                  <img src={med.imagem} alt={med.nome} />
                  <div className="detalhes">
                    <h3>{med.nome}</h3>
                    <p>{med.descricao}</p>
                    <span>R$ {med.preco.toFixed(2)}</span>
                  </div>
                  <button 
                    className="btn-remove" 
                    onClick={() => removerReceita(med.id)}
                    title="Remover medicamento da receita"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {medicamentosBalcao.length > 0 && (
            <div className="medicamentos-balcao-section">
              <h3>Medicamentos do Balcão</h3>
              {medicamentosBalcao.map(med => (
                <div key={med.id} className="medicamento-card balcao">
                  <img src={med.imagem} alt={med.nome} />
                  <div className="detalhes">
                    <h3>{med.nome}</h3>
                    <p>{med.descricao}</p>
                    <span>R$ {med.preco.toFixed(2)}</span>
                  </div>
                  <button 
                    className="btn-remove" 
                    onClick={() => removerBalcao(med.id)}
                    title="Remover medicamento do balcão"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {medicamentosReceita.length === 0 && medicamentosBalcao.length === 0 && (
            <div className="carrinho-vazio">
              <h3>Nenhum medicamento no carrinho</h3>
              <p>Adicione medicamentos para continuar com o pagamento.</p>
              <button className="btn-resetar" onClick={resetarReceita}>
                Restaurar Medicamentos da Receita
              </button>
            </div>
          )}
        </div>

        <div className="resumo-pedido">
          <h3>Resumo do Pedido</h3>
          <div className="itens-resumo">
            <div><span>Subtotal:</span><span>R$ {subtotal.toFixed(2)}</span></div>
            <div><span>Desconto:</span><span>R$ {desconto.toFixed(2)}</span></div>
            <div className="total"><span>Total:</span><span>R$ {total.toFixed(2)}</span></div>
          </div>

          {medicamentosReceita.length === 0 && (
            <button className="btn-resetar-receita-sidebar" onClick={resetarReceita}>
              Restaurar Medicamentos da Receita
            </button>
          )}

          <div className="botoes-pagamento">
            <Link to="/Cartao">
            <button 
              className='CartaoCOR'
              disabled={todosMedicamentos.length === 0}
            >
              Pagar com Cartão
            </button>
            </Link>
            <Link to='/Pix'>
            <button  
              className='PixCor'
              disabled={todosMedicamentos.length === 0}
            >
              Pagar com PIX
            </button>
            </Link>
            <Link to='/TotemPagamento'>
            <button  className="cancelar">Cancelar</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default CarrinhoPagamento;
