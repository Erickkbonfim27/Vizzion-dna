import React from "react";
import ReportContextProvider from "../../Data/ReportData/ReportContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/home";
import ReportSectUm from "../Report-p1/ReportSectUm";
import { PATHS } from "../../router/PATHS";

export default function ContextIndexavel() {
  return (
    <ReportContextProvider>
      <Router>
        <Routes>
          <Route path={PATHS.Home} element={<Home />} />
          <Route path={PATHS.SecaoUm} element={<ReportSectUm />} />
        </Routes>
      </Router>
    </ReportContextProvider>
  );
}
