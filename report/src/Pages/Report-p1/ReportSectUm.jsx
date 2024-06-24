import React from 'react'
import { useReportContext } from '../../Data/ReportData/ReportContext';
import Header from '../../Components/Header/Header';
import Diagram from '../../Components/HistoricoDoImovel/HistoricoDoImovel';
import Restricoes from '../../Components/Restricoes/Restricoes';

export default function ReportSectUm() {
  //processos
  //restricoes
  //area total
  //Iptu
  //Divida 

  const { historico, restricoes } =
  useReportContext();
  console.log(historico)
  return (
    <div className='ReporstSectUm'>
      <Header selected='condicionantes' />
      <h3 className='HistoricTitle'>Histórico do imóvel</h3>
      <Diagram historico={historico}  /> 
      <section className='FlexSection'>
        <Restricoes restricoes={restricoes} />
      </section>
    </div>
  )
}
