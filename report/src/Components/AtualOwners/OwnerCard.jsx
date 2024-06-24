import React from "react";
import PropTypes from "prop-types";

export default function OwnerCard({ proprietariosAtuais = [] }) {
  return (
    <div className="ownerCard">
      {proprietariosAtuais.map((proprietario, proprietarioIndex) => (
        <div className="owner" key={proprietarioIndex}>
          <div className="proprietarios">
            <h4>Proprietarios:</h4>
            {proprietario.proprietarios.map((item, itemIndex) => (
              <h3 className="prop" key={itemIndex}>{item}</h3>
            ))}
          </div>
          <div className="metragens">
            <p className="metragemAprox">Metragem Aproximada: {proprietario.MetragemAprox}</p>
            <p className="percentual">Percentual: {proprietario.Percentual}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

OwnerCard.propTypes = {
  proprietariosAtuais: PropTypes.arrayOf(
    PropTypes.shape({
      proprietarios: PropTypes.arrayOf(PropTypes.string).isRequired,
      MetragemAprox: PropTypes.string.isRequired,
      Percentual: PropTypes.string.isRequired,
    })
  ),
};
