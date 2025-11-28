import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CarrinhoConfirmacao.css";
import Header from "../Header/Header";
import FundoT from "../FundoTotem/FundoT";

// === IMPORTANDO IMAGENS CORRETAMENTE ===

import ecoBagImg from "../../assets/remeimg/tostro.jpg";
import alcoolGelImg from "../../assets/remeimg/tostro.jpg";

const CarrinhoConfirmacao = () => {
  const navigate = useNavigate();
  const [medicamentosBalcao, setMedicamentosBalcao] = useState([]);

  // Medicamentos padrão da receita
  const medicamentosPadraoReceita = [
    {
      id: 101,
      nome: "Ecobag TotSimple",
      descricao:
        "Sacola reutilizável que serve como alternativa às sacolas plásticas descartáveis.",
      preco: 45.9,
      imagem: ecoBagImg,
      tipo: "receita",
    },
    {
      id: 102,
      nome: "Álcool Gel 70% TotSimple",
      descricao:
        "Serve para higienizar as mãos e desinfetar superfícies.",
      preco: 89.5,
      imagem: alcoolGelImg,
      tipo: "receita",
    },
  ];

  const [medicamentosReceita, setMedicamentosReceita] = useState(medicamentosPadraoReceita);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
      const medicamentos = JSON.parse(carrinhoSalvo).map((med) => ({
        ...med,
        tipo: "balcao",
      }));
      setMedicamentosBalcao(medicamentos);
    }

    // Carregar receita salva
    const receitaSalva = localStorage.getItem("medicamentosReceita");
    if (receitaSalva) {
      const receitaParsed = JSON.parse(receitaSalva);
      if (receitaParsed.length === 0) {
        setMedicamentosReceita(medicamentosPadraoReceita);
        localStorage.setItem(
          "medicamentosReceita",
          JSON.stringify(medicamentosPadraoReceita)
        );
      } else {
        setMedicamentosReceita(receitaParsed);
      }
    } else {
      localStorage.setItem(
        "medicamentosReceita",
        JSON.stringify(medicamentosPadraoReceita)
      );
    }
  }, []);

  const removerMedicamentoBalcao = (id) => {
    const novosMedicamentos = medicamentosBalcao.filter((med) => med.id !== id);
    setMedicamentosBalcao(novosMedicamentos);
    localStorage.setItem("carrinho", JSON.stringify(novosMedicamentos));
  };

  const removerMedicamentoReceita = (id) => {
    const novosMedicamentosReceita = medicamentosReceita.filter(
      (med) => med.id !== id
    );
    setMedicamentosReceita(novosMedicamentosReceita);
    localStorage.setItem(
      "medicamentosReceita",
      JSON.stringify(novosMedicamentosReceita)
    );
  };

  const adicionarMaisMedicamentos = () => navigate("/MedicamentosBalcao");

  const finalizarTriagem = () => navigate("/TriagemFinalizada");

  const cancelarTriagem = () => {
    localStorage.removeItem("carrinho");
    setMedicamentosReceita(medicamentosPadraoReceita);
    localStorage.setItem(
      "medicamentosReceita",
      JSON.stringify(medicamentosPadraoReceita)
    );
    navigate("/");
  };

  const resetarMedicamentosReceita = () => {
    setMedicamentosReceita(medicamentosPadraoReceita);
    localStorage.setItem(
      "medicamentosReceita",
      JSON.stringify(medicamentosPadraoReceita)
    );
  };

  const todosMedicamentos = [...medicamentosReceita, ...medicamentosBalcao];
  const subtotal = todosMedicamentos.reduce(
    (total, med) => total + med.preco,
    0
  );
  const desconto = 0.0;
  const total = subtotal - desconto;

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
                      <div
                        key={medicamento.id}
                        className="medicamento-card receita"
                      >
                        <div className="medicamento-image">
                          <img src={medicamento.imagem} alt={medicamento.nome} />
                        </div>
                        <div className="medicamento-details">
                          <h3>{medicamento.nome}</h3>
                          <p>{medicamento.descricao}</p>
                          <div className="medicamento-price">
                            R$ {medicamento.preco.toFixed(2)}
                          </div>
                        </div>
                        <button
                          className="btn-remove"
                          onClick={() =>
                            removerMedicamentoReceita(medicamento.id)
                          }
                        >
                          ✕
                        </button>
                      </div>
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
                      <div
                        key={medicamento.id}
                        className="medicamento-card balcao"
                      >
                        <div className="medicamento-image">
                          <img src={medicamento.imagem} alt={medicamento.nome} />
                        </div>
                        <div className="medicamento-details">
                          <h3>{medicamento.nome}</h3>
                          <p>{medicamento.descricao}</p>
                          <div className="medicamento-price">
                            R$ {medicamento.preco.toFixed(2)}
                          </div>
                        </div>
                        <button
                          className="btn-remove"
                          onClick={() =>
                            removerMedicamentoBalcao(medicamento.id)
                          }
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {medicamentosReceita.length === 0 &&
                medicamentosBalcao.length === 0 && (
                  <div className="carrinho-vazio">
                    <h2>Nenhum medicamento selecionado</h2>
                    <p>Adicione medicamentos do balcão para continuar.</p>
                    <button className="btn-resetar" onClick={resetarMedicamentosReceita}>
                      Restaurar Medicamentos da Receita
                    </button>
                  </div>
                )}
            </div>

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
                  <button
                    className="btn-adicionar-medicamentos"
                    onClick={adicionarMaisMedicamentos}
                  >
                    Adicionar mais medicamentos do balcão
                  </button>

                  {medicamentosReceita.length === 0 && (
                    <button
                      className="btn-resetar-receita"
                      onClick={resetarMedicamentosReceita}
                    >
                      Restaurar Medicamentos da Receita
                    </button>
                  )}

                  <button
                    className="btn-finalizar-pedido"
                    onClick={finalizarTriagem}
                    disabled={todosMedicamentos.length === 0}
                  >
                    Finalizar Triagem
                  </button>

                  <button
                    className="btn-cancelar-pedido"
                    onClick={cancelarTriagem}
                  >
                    Cancelar Triagem
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CarrinhoConfirmacao;
