import { createContext, useContext, useState } from "react";
import { DadosAlteraveis } from "../../DataAlteravel";
import Logo from "../../Data/Reportimages/logoi.png";
export const ReportContext = createContext();
export const useReportContext = () => {
  return useContext(ReportContext);
};

export default function ReportContextProvider({ children }) {
  const isValidPassCode = (passCode) => {
    const regex = /^\d{3}-[a-zA-Z]{3}$/;
    return passCode.length === 7 && regex.test(passCode);
  };
  const correctPassCode = DadosAlteraveis.passCode;
  const [passCode, setPassCode] = useState("");
  const [disable, setDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [Verified, setVerified] = useState(false);
  const handleOnChange = (e) => {
    const result = e.target.value;

    if (isValidPassCode(result)) {
      setPassCode(result);

      if (correctPassCode === result) {
        setDisable(false);
        setMessage("");
        setVerified(true)
        localStorage.clear()
        localStorage.setItem('@item', 'True');
    
        
        

        setTimeout(() => {
          setDisable(true);
        }, 30000);
      } else {
        setMessage("Senha incorreta, acesso bloqueado");
        setTimeout(() => {
          setMessage("");
          setPassCode("");
        }, 5000);
      }
    } else {
      setMessage("Formato de passCode inválido");
      setTimeout(() => {
        setMessage("");
      }, 4000);
    }
  };

  const LinkEarthEntornoDoImovel = "https://earth.google.com/web/@-27.10815205,-48.9144618,23.43798021a,6139.88427919d,30y,0h,0t,0r/data=MigKJgokCiAxZ08xbnBYSlpNNHJzWVBpT0ptLWVYT180dE9IclpMSSAC";
  const imgHome = DadosAlteraveis.imagemDaHome;
  const clientName = DadosAlteraveis.clientName;
  const coordenadas = DadosAlteraveis.coordenadas;
  const endereco = DadosAlteraveis.endereco;
  const cep = DadosAlteraveis.Cep;
  const historico = DadosAlteraveis.Historico;
  const restricoes = DadosAlteraveis.RestricoesDoImovel;
  const proprietariosAtuais = DadosAlteraveis.proprietariosAtuais;
  const usosPermitidos = DadosAlteraveis.usosPermitidos;
  const enchente7mt = DadosAlteraveis.enchente7mt;
  const enchente8mt = DadosAlteraveis.enchente8mt;
  const enchente9mt = DadosAlteraveis.enchente9mt;
  const enchente10mt = DadosAlteraveis.enchente10mt;
  const zoneamento = DadosAlteraveis.zoneamento;
  const regrasDeUso = DadosAlteraveis.regrasDeUso;
  const taxaDeOcupacao = DadosAlteraveis.taxaOcupacao;
  const Recuos = DadosAlteraveis.Recuos;
  const alvara = DadosAlteraveis.alvara;
  const habitese = DadosAlteraveis.habitese;
  const cno = DadosAlteraveis.cno;
  const cnar = DadosAlteraveis.cnar;
  const matricula = DadosAlteraveis.matricula;
  const licensaAmbiental = DadosAlteraveis.licensaAmbiental;
  const avcb = DadosAlteraveis.avcb;
  const escrituraPublicaDeCompraeVenda = DadosAlteraveis.escrituraPublicaDeCompraeVenda;
  const loteMinimo = DadosAlteraveis.loteMinimo;
  const testada = DadosAlteraveis.testada;
  const taxaOcupacao = DadosAlteraveis.taxaOcupacao;
  const alturaMaximaPermitida = DadosAlteraveis.alturaMaximaPermitida;
  const macrozona = DadosAlteraveis.macrozona;
  const microzona = DadosAlteraveis.microzona;
  const pavimentos = DadosAlteraveis.pavimentos;
  const areasVerdes = DadosAlteraveis.areasVerdes;
  const relevo = DadosAlteraveis.relevo;
  const linkEarth = DadosAlteraveis.linkEarth;
  const iptu = DadosAlteraveis.iptu;
  const mapa = DadosAlteraveis.mapa;
  const Rules = DadosAlteraveis.regrasDeUso;
  const viabilidade = DadosAlteraveis.viabilidade;
  const Data = DadosAlteraveis.IdadeMediaNa


  
  const value = {
    imgHome,
    clientName,
    coordenadas,
    Logo,
    endereco,
    cep,
    historico,
    restricoes,
    proprietariosAtuais,
    handleOnChange,
    disable,
    message,
    Verified,
    usosPermitidos,
    enchente7mt,
    enchente8mt,
    enchente9mt,
    enchente10mt,
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
    Rules,
    viabilidade,
    LinkEarthEntornoDoImovel,
    Data,
  };

  return (
    <ReportContext.Provider value={value}>{children}</ReportContext.Provider>
  );
}
