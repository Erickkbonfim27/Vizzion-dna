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
  const imgHome = DadosAlteraveis.imagemDaHome;
  const clientName = DadosAlteraveis.clientName;
  const coordenadas = DadosAlteraveis.coordenadas;
  const endereco = DadosAlteraveis.endereco;
  const cep = DadosAlteraveis.Cep;
  const historico = DadosAlteraveis.Historico;
  const restricoes = DadosAlteraveis.RestricoesDoImovel;
  const proprietariosAtuais = DadosAlteraveis.proprietariosAtuais;
  
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
    Verified
  };

  return (
    <ReportContext.Provider value={value}>{children}</ReportContext.Provider>
  );
}
