import {createContext, useContext} from 'react';
import { DadosAlteraveis } from '../../DataAlteravel'; 
import Logo from "../../Data/Reportimages/logoi.png";
export const ReportContext = createContext();
export const useReportContext = () => {
    return useContext(ReportContext);
}


export default function ReportContextProvider({children}){





    const imgHome = DadosAlteraveis.imagemDaHome;
    const clientName = DadosAlteraveis.clientName;
    const coordenadas = DadosAlteraveis.coordenadas;
    const endereco = DadosAlteraveis.endereco;
    const cep = DadosAlteraveis.Cep;




    const value = {
        imgHome,
        clientName,
        coordenadas,
        Logo,
        endereco,
        cep,
    }

    return (
        <ReportContext.Provider value={value}>
        {children}
        </ReportContext.Provider>
    )
}