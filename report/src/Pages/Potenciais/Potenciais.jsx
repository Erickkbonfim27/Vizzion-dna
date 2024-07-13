import React from "react";
import Header from "../../Components/Header/Header";
import ProximidadeARedeDeTransporteAlternativo from "../../Components/ProximidadeARedeDeTransporteAlternativo/ProximidadeARedeDeTransporteAlternativo";
import MesclaDeUsosDoSolo from "../../Components/MesclaDeUsosDoSolo/MesclaDeUsosDoSolo";
import AcessoSimultaneoEquipamentosBasicos from "../../Components/AcessoSimultaneoEquipamentosBasicos/AcessoSimultaneoEquipamentosBasicos";
import { useReportContext } from "../../Data/ReportData/ReportContext";
import IndicadoresDeCoesaoSocial from "../../Components/IndicadoresDeCoesaoSocial/IndicadoresDeCoesaoSocial";
import IsNotVerified from "../../Components/isNotVerifyed/isNotVerified";
import AcessibilidadeDoSistemaViario from "../../Components/AcessibilidadeDoSistemaViario/AcessibilidadeDoSistemaViario";
import EspacoVerdePorHabitante from "../../Components/EspacoVerdePorHabitante/EspacoVerdePorHabitante";

export default function Potenciais() {
  const {
    AcessSistemaViario,
    ProximidadeRedeDeTransporte,
    EspacoDeEstarPorM2Proximo,
    AcessoSimultaneoAEquipamentosBasicos,
  } = useReportContext();
  let Verified = localStorage.getItem("@item");

  return (
    <>
      {Verified === "True" && (
        <>
          <div className="PaginaPotenciais">
            <Header selected="potenciais" />
            <h1>Potencialidades do imóvel</h1>
            <section className="FlexSection">
              <ProximidadeARedeDeTransporteAlternativo
                ProximidadeRedeDeTransporte={ProximidadeRedeDeTransporte}
              />
              <AcessibilidadeDoSistemaViario
                AcessibilidadeDoSistemaViario={AcessSistemaViario}
              />
            </section>
            <section className="FlexSection">
              <MesclaDeUsosDoSolo MesclaDeUsosDoSolo={MesclaDeUsosDoSolo} />
              <EspacoVerdePorHabitante
                EspacoVerdePorHabitante={EspacoVerdePorHabitante}
              />
            </section>
            <section className="FlexSection">
              <EspacoDeEstarPorM2Proximo
                EspacoDeEstarPorM2Proximo={EspacoDeEstarPorM2Proximo}
              />
              <AcessoSimultaneoEquipamentosBasicos
                equipamentosBasicosDisponiveis={
                  AcessoSimultaneoAEquipamentosBasicos
                }
              />
            </section>
            <h1 className="IndicadoresDeCompletudeSocial">
              Indicatores Que indicam a qualidade de vida estimada do local
            </h1>
            <section className="FlexSection">
              <IndicadoresDeCoesaoSocial
                CoesaoSocial={AcessoSimultaneoAEquipamentosBasicos}
              />
            </section>
          </div>
        </>
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
  );
}
