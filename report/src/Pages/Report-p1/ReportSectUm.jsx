import React from "react";
import { useReportContext } from "../../Data/ReportData/ReportContext";
import Header from "../../Components/Header/Header";
import Diagram from "../../Components/HistoricoDoImovel/HistoricoDoImovel";
import ActualOwners from "../../Components/AtualOwners/ActualOwners";

export default function ReportSectUm() {
  const { historico, proprietariosAtuais } = useReportContext();
  return (
    <div className="ReporstSectUm">
      <Header selected="condicionantes" />
      <h3 className="HistoricTitle">Histórico do imóvel</h3>
      <Diagram historico={historico} />

      <ActualOwners owners={proprietariosAtuais} />
    </div>
  );
}
