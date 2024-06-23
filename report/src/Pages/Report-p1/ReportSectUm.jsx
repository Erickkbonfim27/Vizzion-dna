import React from 'react'
import { useReportContext } from '../../Data/ReportData/ReportContext';
import Header from '../../Components/Header/Header';

export default function ReportSectUm() {
  //historico do imóvel
  //processos
  //restricoes
  //area total
  //Iptu
  //Divida 

  const { logo } =
  useReportContext();

  return (
    <div className='ReporstSectUm'>
      <Header />

    </div>
  )
}
