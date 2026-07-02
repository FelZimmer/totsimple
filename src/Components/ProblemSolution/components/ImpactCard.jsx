import React from "react";

const ImpactCard = ({ icon, titulo, itens }) => (
  <div className="impact-card">
    <h4>
      {icon} {titulo}
    </h4>
    <ul>
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ImpactCard;
