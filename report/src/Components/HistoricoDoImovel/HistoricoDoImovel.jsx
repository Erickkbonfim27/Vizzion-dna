import React from "react";
import { useReportContext } from "../../Data/ReportData/ReportContext";

const Diagram = () => {
  const { historico } = useReportContext();
  console.log(historico);
  return (
    <div className="bodySectionGridContainer">
      <div className="grid-container">
        {historico.map((entry, index) => (
          <div className="grid-item" key={index}>
            <div className="annotation">
              <section className="HeadderCard">
                <h3>{entry.TipoDeAnotacao}</h3>
                <p className="codigo">{entry.CodigoDaAnotacao}</p>
                <h3 className="order">ordem: {index + 1}</h3>
              </section>
              <section className="SectionBodyData">
                <p className="EntryMessage">{entry.Message}</p>
                <ul className="ListClients">
                  {entry.PessoasEnvolvida &&
                    entry.PessoasEnvolvida.map((pessoa, i) => (
                      <li key={i}>{pessoa.nome}</li>
                    ))}
                </ul>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagram;
