import React from "react";
import Restricoes from "../../Components/Restricoes/Restricoes";
import { useReportContext } from "../../Data/ReportData/ReportContext";

export default function CondicionantesDadosJuridicos() {
    const { restricoes } =
    useReportContext();
  return (
    <div>
      <section className="FlexSection">
        <Restricoes restricoes={restricoes} />
      </section>
    </div>
  );
}
