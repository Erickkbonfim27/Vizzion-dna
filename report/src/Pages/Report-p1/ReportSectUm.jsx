import React from "react";
import { useReportContext } from "../../Data/ReportData/ReportContext";
import Header from "../../Components/Header/Header";
import Diagram from "../../Components/HistoricoDoImovel/HistoricoDoImovel";
import ActualOwners from "../../Components/AtualOwners/ActualOwners";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/PATHS";
import IsNotVerified from "../../Components/isNotVerifyed/isNotVerified";

export default function ReportSectUm() {
  const { historico, proprietariosAtuais } = useReportContext();
  let Verified = localStorage.getItem('@item')

  return (
    <>
      {Verified === 'True' && (
        <div className="ReporstSectUm">
          <Header selected="historico" />
          <div className="HistoricTitle">
            <h3>Histórico do imóvel</h3>
            <Link to={PATHS.SecaoDeCondicionais}>
              Dados Condicionantes do imóvel
            </Link>
          </div>
          <Diagram historico={historico} />

          <ActualOwners owners={proprietariosAtuais} />
        </div>
      )}
      {Verified === 'False' && (
        <div>
          <IsNotVerified />
        </div>
      )}
      {Verified === null && (
        <div>
          <IsNotVerified />
        </div>
      )}
    </>
  )
}
