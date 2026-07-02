import React from "react";

const TimelineStep = ({ numero, titulo, texto }) => (
  <div className="timeline-step">
    <div className="step-number">{numero}</div>
    <div className="step-content">
      <h5>{titulo}</h5>
      <p>{texto}</p>
    </div>
  </div>
);

export default TimelineStep;
