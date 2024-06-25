import React from "react";

export default function RegrasDeUso({ TaxaDeOcupacao, Recuos, Rules }) {
  return (
    <div className="RegrasDeUsoBody">
      <div className="RegrasDeUso">
        <h3>Regras de uso</h3>
        {Rules.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
          </div>
        ))}
      </div>
      <div className="ocupacao">
        <h3>Taxa de ocupação: {TaxaDeOcupacao}</h3>
        <h3>Recuos</h3>
        {Recuos.map((item, index) => (
          <div className="recuos" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
