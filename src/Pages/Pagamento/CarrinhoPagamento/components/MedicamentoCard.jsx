import React from "react";

const MedicamentoCard = ({ medicamento, tipo, onRemover }) => (
  <div className={`medicamento-card ${tipo}`}>
    <img src={medicamento.imagem} alt={medicamento.nome} />
    <div className="detalhes">
      <h3>{medicamento.nome}</h3>
      <p>{medicamento.descricao}</p>
      <span>R$ {medicamento.preco.toFixed(2)}</span>
    </div>
    <button
      className="btn-remove"
      onClick={() => onRemover(medicamento.id)}
      title={`Remover medicamento ${tipo === "receita" ? "da receita" : "do balcão"}`}
    >
      ✕
    </button>
  </div>
);

export default MedicamentoCard;
