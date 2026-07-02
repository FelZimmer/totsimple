import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarrinhoConfirmacao.css";
import Header from "../Header/Header";
import FundoT from "../FundoTotem/FundoT";
import { useCarrinho } from "../../hooks/useCarrinho";
import MedicamentoCard from "./components/MedicamentoCard";
import ResumoPedido from "./components/ResumoPedido";

const CarrinhoConfirmacao = () => {
  const navigate = useNavigate();
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
    limparTudo,
  } = useCarrinho();

  const adicionarMaisMedicamentos = () => navigate("/MedicamentosBalcao");

  const finalizarTriagem = () => navigate("/TriagemFinalizada");

  const cancelarTriagem = () => {
    limparTudo();
    navigate("/");
  };

  return (
    <>
      <div className="fundo-totem-wrapper">
        <FundoT />
      </div>

      <div className="carrinho-confirmacao">
        <Header />

        <main className="main-container">
          <div className="content-wrapper">
            <div className="medicamentos-section">
              {medicamentosReceita.length > 0 && (
                <>
                  <div className="section-header">
                    <h2>Medicamentos Identificados na Receita</h2>
                  </div>

                  <div className="medicamentos-grid">
                    {medicamentosReceita.map((medicamento) => (
                      <MedicamentoCard
                        key={medicamento.id}
                        medicamento={medicamento}
                        tipo="receita"
                        onRemover={removerReceita}
                      />
                    ))}
                  </div>
                </>
              )}

              {medicamentosBalcao.length > 0 && (
                <>
                  <div className="section-header balcao-header">
                    <h2>Medicamentos do Balcão Adicionados</h2>
                  </div>

                  <div className="medicamentos-grid">
                    {medicamentosBalcao.map((medicamento) => (
                      <MedicamentoCard
                        key={medicamento.id}
                        medicamento={medicamento}
                        tipo="balcao"
                        onRemover={removerBalcao}
                      />
                    ))}
                  </div>
                </>
              )}

              {medicamentosReceita.length === 0 &&
                medicamentosBalcao.length === 0 && (
                  <div className="carrinho-vazio">
                    <h2>Nenhum medicamento selecionado</h2>
                    <p>Adicione medicamentos do balcão para continuar.</p>
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
              onAdicionarMais={adicionarMaisMedicamentos}
              onResetarReceita={resetarReceita}
              onFinalizar={finalizarTriagem}
              onCancelar={cancelarTriagem}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default CarrinhoConfirmacao;
