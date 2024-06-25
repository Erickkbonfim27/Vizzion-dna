import React from "react";

export default function DadosGerais({
  loteMinimo,
  testada,
  taxaOcupacao,
  macrozona,
  microzona,
  pavimentosMaximosPermitidos,
}) {
  return (
    <div className="GeneralDataBody">
      <h3>Dados Gerais</h3>
      <div className="infos">
        <section className="col1">
          <ul>
            <li>
              <b>Lote mínimo:</b> {loteMinimo}
            </li>
            <li>
              <b>Testada:</b> {testada}
            </li>
            <li>
              <b>Taxa de ocupação:</b> {taxaOcupacao}
            </li>
          </ul>
        </section>
        <section className="col2">
          <ul>
            <li>
              <b> Pavimentos :</b> {pavimentosMaximosPermitidos}
            </li>
            <li>
              <b>Macrozona:</b> {macrozona}
            </li>
            <li>
              <b>Microzona:</b> {microzona}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
