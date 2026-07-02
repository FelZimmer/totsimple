import React from "react";

const ResumoPedido = ({
  subtotal,
  desconto,
  total,
  temMedicamentosReceita,
  temMedicamentos,
  onAdicionarMais,
  onResetarReceita,
  onFinalizar,
  onCancelar,
}) => (
  <div className="sidebar-resumo">
    <div className="resumo-container">
      <h3>Resumo do Pedido</h3>
      <div className="resumo-items">
        <div className="resumo-item">
          <span>Subtotal:</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>

        <div className="resumo-item">
          <span>Desconto:</span>
          <span>R$ {desconto.toFixed(2)}</span>
        </div>

        <div className="resumo-item total">
          <span>Total:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn-adicionar-medicamentos" onClick={onAdicionarMais}>
          Adicionar mais medicamentos do balcão
        </button>

        {!temMedicamentosReceita && (
          <button className="btn-resetar-receita" onClick={onResetarReceita}>
            Restaurar Medicamentos da Receita
          </button>
        )}

        <button
          className="btn-finalizar-pedido"
          onClick={onFinalizar}
          disabled={!temMedicamentos}
        >
          Finalizar Triagem
        </button>

        <button className="btn-cancelar-pedido" onClick={onCancelar}>
          Cancelar Triagem
        </button>
      </div>
    </div>
  </div>
);

export default ResumoPedido;
