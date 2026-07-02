import React from "react";

const MedicamentoCard = ({ medicamento, tipo, onRemover }) => (
  <div className={`medicamento-card ${tipo}`}>
    <div className="medicamento-image">
      <img src={medicamento.imagem} alt={medicamento.nome} />
    </div>
    <div className="medicamento-details">
      <h3>{medicamento.nome}</h3>
      <p>{medicamento.descricao}</p>
      <div className="medicamento-price">R$ {medicamento.preco.toFixed(2)}</div>
    </div>
    <button className="btn-remove" onClick={() => onRemover(medicamento.id)}>
      ✕
    </button>
  </div>
);

export default MedicamentoCard;
