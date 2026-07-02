import React from "react";
import { Link } from "react-router-dom";

const ResumoPedido = ({
  subtotal,
  desconto,
  total,
  temMedicamentosReceita,
  temMedicamentos,
  onResetarReceita,
}) => (
  <div className="resumo-pedido">
    <h3>Resumo do Pedido</h3>
    <div className="itens-resumo">
      <div>
        <span>Subtotal:</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>
      <div>
        <span>Desconto:</span>
        <span>R$ {desconto.toFixed(2)}</span>
      </div>
      <div className="total">
        <span>Total:</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>
    </div>

    {!temMedicamentosReceita && (
      <button className="btn-resetar-receita-sidebar" onClick={onResetarReceita}>
        Restaurar Medicamentos da Receita
      </button>
    )}

    <div className="botoes-pagamento">
      <Link to="/Cartao">
        <button className="CartaoCOR" disabled={!temMedicamentos}>
          Pagar com Cartão
        </button>
      </Link>
      <Link to="/Pix">
        <button className="PixCor" disabled={!temMedicamentos}>
          Pagar com PIX
        </button>
      </Link>
      <Link to="/TotemPagamento">
        <button className="cancelar">Cancelar</button>
      </Link>
    </div>
  </div>
);

export default ResumoPedido;
