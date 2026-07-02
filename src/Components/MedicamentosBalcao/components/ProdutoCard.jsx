import React from "react";

const ProdutoCard = ({ medicamento, onAdicionar }) => (
  <div className="produto-card">
    <img src={medicamento.imagem} alt={medicamento.nome} className="produto-imagem" />
    <div className="produto-info">
      <h3>{medicamento.nome}</h3>
      <p className="produto-descricao">{medicamento.descricao}</p>
      <div className="sintomas">
        <strong>Trata:</strong>
        <ul>
          {medicamento.sintomas.map((sintoma, index) => (
            <li key={index}>{sintoma}</li>
          ))}
        </ul>
      </div>
      <div className="produto-preco">R$ {medicamento.preco.toFixed(2)}</div>
      <button className="btn-adicionar" onClick={() => onAdicionar(medicamento)}>
        Adicionar ao Carrinho
      </button>
    </div>
  </div>
);

export default ProdutoCard;
