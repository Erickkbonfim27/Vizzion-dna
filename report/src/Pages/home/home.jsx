import React from "react";
import { useReportContext } from "../../Data/ReportData/ReportContext";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/PATHS";

export default function Home() {
  const { imgHome, clientName, coordenadas, endereco, Logo, cep } =
    useReportContext();

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

        <Link to={PATHS.SecaoUm}>Ver Relatorio</Link>
      </div>
    </div>
  );
}
