import React from "react";

const FlowStep = ({ icon, titulo, desc }) => (
  <div className="flow-step">
    <div className="step-icon">{icon}</div>
    <div className="step-title">{titulo}</div>
    <div className="step-desc">{desc}</div>
  </div>
);

export default FlowStep;
