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
import { Link } from "react-router-dom";

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
    LinkEarthEntornoDoImovel,
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
          <h3 className="EnvoltadoImovelTitle">
            Localização e pontos próximos ao imóvel
          </h3>
          <p className="emvoltaDoImovelSubtitle">
            Conheça os pontos ao redor do imóvel que podem influênciar na
            decisão de compra e precificação do ativo.
          </p>
          <section className="EnvoltaDoImovel">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1gO1npXJZM4rsYPiOJm-eXO_4tOHrZLI&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
            <div className="Legendas">
              <h3>Legenda do mapa</h3>
              <div className="legendaCompletaDoArredorDoImol">
                <div className="flexSection">
                  <section className="Legend">
                    <span className="Escolas"></span>
                    <p>Escola</p>
                  </section>
                  <section className="Legend">
                    <span className="Parques"></span>
                    <p>Parques</p>
                  </section>
                  <section className="Legend">
                    <span className="Mercados"></span>
                    <p>Mercados</p>
                  </section>
                  <section className="Legend">
                    <span className="Faculdade"></span>
                    <p>Universiade</p>
                  </section>
                  <section className="Legend">
                    <span className="PontoDeOnibus"></span>
                    <p>Ponto de ônibos</p>
                  </section>
                  <section className="Legend">
                    <span className="centro"></span>
                    <p>Centro</p>
                  </section>
                  <section className="Legend">
                    <span className="CuidadosComCabelo"></span>
                    <p>Cuidados com Cabelo</p>
                  </section>
                  <section className="Legend">
                    <span className="WeGoGym"></span>
                    <p>Academias</p>
                  </section>
                </div>
                <div className="flexSection">
                  <section className="Legend">
                    <span className="Petshop"></span>
                    <p>Petshop</p>
                  </section>
                  <section className="Legend">
                    <span className="mecanica"></span>
                    <p>Mecanica</p>
                  </section>
                  <section className="Legend">
                    <span className="Padaria"></span>
                    <p>Padaria</p>
                  </section>
                  <section className="Legend">
                    <span className="fisioterapia"></span>
                    <p>Cuidados com a saúde</p>
                  </section>
                  <section className="Legend">
                    <span className="hospitalMaisProximo"></span>
                    <p>Hospital mais próximo</p>
                  </section>
                  <section className="Legend">
                    <span className="Creche"></span>
                    <p>Creche</p>
                  </section>
                  <section className="Legend">
                    <span className="Havan"></span>
                    <p>Havan</p>
                  </section>
                  <section className="Legend">
                    <span className="Estadio"></span>
                    <p>Estadio</p>
                  </section>
                  <section className="Legend">
                    <span className="Lifestyle"></span>
                    <p>Lifestyle</p>
                  </section>
                </div>
              </div>
              <Link to={LinkEarthEntornoDoImovel}>Veja no Earth</Link>
            </div>
          </section>
        </div>
      )}
      {Verified === "False" && (
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
