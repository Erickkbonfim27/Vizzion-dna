import React from "react";
import { FaDownload } from "react-icons/fa"; 
import { FaArrowAltCircleDown } from "react-icons/fa";


export default function Downloadable({
  alvara,
  habitese,
  cno,
  cnar,
  matricula,
  licensaAmbiental,
  avcb,
  escrituraPublicaDeCompraeVenda,
  viabilidade,
}) {
  const isPdf = (path) => /\.pdf$/i.test(path);

  const files = [
    { name: "Alvará", path: alvara },
    { name: "Habite-se", path: habitese },
    { name: "CNO", path: cno },
    { name: "CNAR", path: cnar },
    { name: "Matrícula", path: matricula },
    { name: "Licença Ambiental", path: licensaAmbiental },
    { name: "AVCB", path: avcb },
    {
      name: "Escritura Pública de Compra e Venda",
      path: escrituraPublicaDeCompraeVenda,
    },
    { name: "Viabilidade", path: viabilidade },
  ];

  return (
    <div className="Downloadable">
      <h3>Documentos encontrados:</h3>
      {files.map((file, index) =>
        isPdf(file.path) ? (
          <div key={index} className="card">
            <div className="card-body">
              <a href={file.path} download className="btn btn-primary">
              <FaArrowAltCircleDown />
              </a>
              <p>{file.name}</p>
            </div>
          </div>
        ) : (
          <div key={index} className="card">
            <div className="card-body"></div>
          </div>
        )
      )}
    </div>
  );
}
