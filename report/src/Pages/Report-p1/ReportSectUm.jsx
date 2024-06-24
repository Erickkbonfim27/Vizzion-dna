import React from 'react'
import { useReportContext } from '../../Data/ReportData/ReportContext';
import Header from '../../Components/Header/Header';
import HistoricoDoImovel from '../../Components/HistoricoDoImovel/HistoricoDoImovel';
import Diagram from '../../Components/HistoricoDoImovel/HistoricoDoImovel';

export default function ReportSectUm() {
  //processos
  //restricoes
  //area total
  //Iptu
  //Divida 

  const { logo, historico } =
  useReportContext();
  console.log(historico)
  return (
    <div className='ReporstSectUm'>
      <Header />
      <h3 className='HistoricTitle'>Histórico do imóvel</h3>
      <Diagram historico={historico}  /> 

    </div>
  )
}
