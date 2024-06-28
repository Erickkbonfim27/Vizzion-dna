import React from "react";
import Header from "../../Components/Header/Header";
import { useReportContext } from "../../Data/ReportData/ReportContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DemografiaRegional() {
  const { bairro, Data } = useReportContext();

  // genero
  // idadae
  // classe social

  return (
    <div className="DemografiaRegional">
      <Header selected="demografia" />
      <div className="HeaderText">
        <h1> Demografia Regional do bairro: {bairro} </h1>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={Data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#056119" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
