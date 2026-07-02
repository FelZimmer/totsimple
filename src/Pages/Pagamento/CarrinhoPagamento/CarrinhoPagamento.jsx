import React from 'react';
import './CarrinhoPagamento.css';
import Header from '../../../Components/Header/Header';
import FundoT from '../../../Components/FundoTotem/FundoT';
import { useCarrinho } from '../../../hooks/useCarrinho';
import MedicamentoCard from './components/MedicamentoCard';
import ResumoPedido from './components/ResumoPedido';

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
                <MedicamentoCard
                  key={med.id}
                  medicamento={med}
                  tipo="receita"
                  onRemover={removerReceita}
                />
              ))}
            </div>
          )}

          {medicamentosBalcao.length > 0 && (
            <div className="medicamentos-balcao-section">
              <h3>Medicamentos do Balcão</h3>
              {medicamentosBalcao.map(med => (
                <MedicamentoCard
                  key={med.id}
                  medicamento={med}
                  tipo="balcao"
                  onRemover={removerBalcao}
                />
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

        <ResumoPedido
          subtotal={subtotal}
          desconto={desconto}
          total={total}
          temMedicamentosReceita={medicamentosReceita.length > 0}
          temMedicamentos={todosMedicamentos.length > 0}
          onResetarReceita={resetarReceita}
        />
      </main>
    </div>
    </>
  );
};

export default CarrinhoPagamento;
