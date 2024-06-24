import React from "react";
import Restricoes from "../../Components/Restricoes/Restricoes";
import { useReportContext } from "../../Data/ReportData/ReportContext";
import Header from "../../Components/Header/Header";
import IsNotVerified from "../../Components/isNotVerifyed/isNotVerified";

export default function CondicionantesDadosJuridicos() {
  const { restricoes } = useReportContext();
  let Verified = localStorage.getItem("@item");
  return (
    <>
      {Verified === "True" && (
        <div>
          <Header selected="condicionantes" />
          <section className="FlexSection">
            <Restricoes restricoes={restricoes} />
          </section>
        </div>
      )}
      {Verified === 'False' && (
        <div>
           <IsNotVerified />
        </div>
      )}
    </>
  );
}
