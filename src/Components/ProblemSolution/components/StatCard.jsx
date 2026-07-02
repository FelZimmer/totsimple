import React from "react";

const StatCard = ({ variant, icon, numero, label, sublabel, status }) => (
  <div className={`stat-card ${variant}`}>
    <div className="stat-icon">{icon}</div>
    <div className="stat-number">{numero}</div>
    <div className="stat-label">
      {label}
      <br />
      <small>{sublabel}</small>
    </div>
    <div className="stat-status">{status}</div>
  </div>
);

export default StatCard;
