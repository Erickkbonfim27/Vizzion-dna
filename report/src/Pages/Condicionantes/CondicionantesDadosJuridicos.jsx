import React from "react";
import Restricoes from "../../Components/Restricoes/Restricoes";
import { useReportContext } from "../../Data/ReportData/ReportContext";
import Header from "../../Components/Header/Header";
import IsNotVerified from "../../Components/isNotVerifyed/isNotVerified";
import RegrasDeUso from "../../Components/Zoneamento/Zoneametno";
import Dowloadable from "../../Components/Dowloadable/Dowloadable";
import DadosGerais from "../../Components/DadosGerais/DadosGerais";
import AnaliseAmbiental from "../../Components/AnaliseAmbiental/AnaliseAmbiental";
import PendenciasIptu from "../../Components/PendenciasIptu/PendenciasIptu";
import Enchentes from "../../Components/Enchentes/Enchentes";

export default function CondicionantesDadosJuridicos() {
  const {
    restricoes,
    usosPermitidos,
    zoneamento,
    regrasDeUso,
    taxaDeOcupacao,
    Recuos,
    alvara,
    habitese,
    cno,
    cnar,
    matricula,
    licensaAmbiental,
    avcb,
    escrituraPublicaDeCompraeVenda,
    loteMinimo,
    testada,
    taxaOcupacao,
    alturaMaximaPermitida,
    macrozona,
    microzona,
    pavimentos,
    mapa,
    areasVerdes,
    relevo,
    linkEarth,
    iptu,
    handleOnClick,
    enchente7mt,
    enchente8mt,
    enchente9mt,
    enchente10mt,
    Rules,
    viabilidade,
  } = useReportContext();
  let Verified = localStorage.getItem("@item");
  return (
    <>
      {Verified === "True" && (
        <div className="Condicionantes">
          <Header selected="condicionantes" />
          <div className="textApresentation">
            <p>
              {" "}
              Os dados condicionantes são os que afetam diretamente o imóvel,
              informando questões documentais, jurídicas e possíveis impeditivos
              de construção ou venda{" "}
            </p>
            <div className="Permitted">
              <h3>Usos permitidos</h3>
              <div className="holl">
                {usosPermitidos.map((item, index) => (
                  <p className="Items" key={index}>
                    {item} /
                  </p>
                ))}
              </div>
            </div>
          </div>
          <section className="RestricoesZoneamento">
            <Restricoes restricoes={restricoes} />
            <div className="RegDowData">
              <p className="Zoneamento">Zoneamento: {zoneamento}</p>
              <RegrasDeUso
                RegrasDeUso={regrasDeUso}
                TaxaDeOcupacao={taxaDeOcupacao}
                Recuos={Recuos}
                Rules={Rules}
              />
            </div>
          </section>
          <section className="DadosGerais">
            <Dowloadable
              alvara={alvara}
              habitese={habitese}
              cno={cno}
              cnar={cnar}
              matricula={matricula}
              licensaAmbiental={licensaAmbiental}
              avcb={avcb}
              escrituraPublicaDeCompraeVenda={escrituraPublicaDeCompraeVenda}
              viabilidade={viabilidade}
            />
            <DadosGerais
              loteMinimo={loteMinimo}
              testada={testada}
              taxaOcupacao={taxaOcupacao}
              alturaMaximaPermitida={alturaMaximaPermitida}
              macrozona={macrozona}
              microzona={microzona}
              pavimentosMaximosPermitidos={pavimentos}
            />
             <PendenciasIptu iptu={iptu} />
          </section>
          <section className="Ambiental">
            <h2 className="titleSectionAmbinetal">Analise Ambiental</h2>
            <AnaliseAmbiental
              mapa={mapa}
              areasVerdes={areasVerdes}
              relevo={relevo}
              linkEarth={linkEarth}
            />
          </section>
          <section className="Enchentes">
            <div className="text">
              <h3>Afetação em Enchentes</h3>
              <p>
                O mapeamento abaixo se refere em como a área dm questão pode ser
                atingida de acordo com o nível do rio
              </p>
            </div>
            <Enchentes
              nv1={enchente7mt}
              nv2={enchente8mt}
              nv3={enchente9mt}
              nv4={enchente10mt}
            />
          </section>
          <section>
            <h3>Localização e pontos próximos ao imóvel</h3>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1gO1npXJZM4rsYPiOJm-eXO_4tOHrZLI&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
            <button onClick={handleOnClick}>Veja no earth</button>
          </section>
        </div>
      )}
      {Verified === "False" && (
        <div>
          <IsNotVerified />
        </div>
      )}
    </>
  );
}
