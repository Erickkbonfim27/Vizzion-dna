import React from "react";
import ReportContextProvider from "../../Data/ReportData/ReportContext";
import { PATHS } from "../../router/PATHS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "../home/home";
import ReportSectUm from "../Report-p1/ReportSectUm";
import CondicionantesDadosJuridicos from '../Condicionantes/CondicionantesDadosJuridicos';

export default function ContextIndexavel() {
  return (
    <ReportContextProvider>
      <Router>
        <Routes>
          <Route path={PATHS.Home} element={<Home />} />
          <Route path={PATHS.SecaoUm} element={<ReportSectUm />} />
          <Route path={PATHS.SecaoDeCondicionais} element={<CondicionantesDadosJuridicos />} /> 
        </Routes>
      </Router>
    </ReportContextProvider>
  );
}
