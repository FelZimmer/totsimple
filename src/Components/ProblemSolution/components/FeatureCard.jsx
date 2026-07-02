import React from "react";

const FeatureCard = ({ icon, titulo, texto }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h4>{titulo}</h4>
    <p>{texto}</p>
  </div>
);

export default FeatureCard;
