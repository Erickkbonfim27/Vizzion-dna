import React from "react";
import OwnerCard from "./OwnerCard";

export default function ActualOwners({ owners }) {
  return (
    <div className="ActualOwners">
      <h3 className="title">Quadro de proprietários atuais</h3>
      <div className="owners-grid">
        {owners.map((owner, index) => (
          <div className="owner-card" key={index}>
            <OwnerCard proprietariosAtuais={[owner]} />
          </div>
        ))}
      </div>
    </div>
  );
}
