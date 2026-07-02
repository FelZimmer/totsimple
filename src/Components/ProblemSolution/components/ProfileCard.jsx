import React from "react";

const ProfileCard = ({ icon, titulo, texto }) => (
  <div className="profile-card">
    <div className="profile-icon">{icon}</div>
    <h5>{titulo}</h5>
    <p>{texto}</p>
  </div>
);

export default ProfileCard;
