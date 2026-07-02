import React from "react";

const BeneficioCard = ({ icon, titulo, texto }) => (
  <div className="beneficios-card">
    <div className="beneficios-icon">{icon}</div>
    <h4>{titulo}</h4>
    <p>{texto}</p>
  </div>
);

export default BeneficioCard;
