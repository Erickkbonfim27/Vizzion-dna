import React from "react";
import { useReportContext } from "../../Data/ReportData/ReportContext";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/PATHS";

export default function Home() {
  const {
    imgHome,
    clientName,
    coordenadas,
    endereco,
    Logo,
    cep,
    disable,
    handleOnChange,
    message,
  } = useReportContext();

  return (
    <div className="ReportHome">
      <img className="backgroundImage" src={imgHome} alt="Home" />
      <div className="ReportTextsHome">
        <section className="logo">
          <img src={Logo} alt="logo" />
        </section>
        <div className="ImovelDataBegin">
          <h1> seja bem vindo: {clientName} </h1>
          <p> Coordenadas do imóvel: {coordenadas} </p>
          <p> Endereço: {endereco} </p>
          <p> Cep: {cep} </p>
        </div>
        <div className="PasssCodeControll">
          <label htmlFor="passCode">Senha de acesso</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="passCode"
            id="passCode"
          />
          <button
            className={`Linked ${disable ? "Disabled" : ""}`}
            disabled={disable}
          >
            {disable ? (
              <div className="Disable">
                Digite a Senha
                {message && <p>{message}</p>}
              </div>
            ) : (
              <Link to={PATHS.SecaoUm}>Ver Relatório</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
