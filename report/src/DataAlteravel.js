import imgVar from "./Data/Reportimages/image.png";
import enchente7mt from "./Data/Reportimages/Enchentes/enchente7mt.png";
import enchente8mt from "./Data/Reportimages/Enchentes/enchente8mt.png";
import enchente9mt from "./Data/Reportimages/Enchentes/enchente9mt.png";
import enchente10mt from "./Data/Reportimages/Enchentes/enchente10mt.png";

import matricula from './Data/Reportimages/ClientDocs/Matricula.pdf';
import viabilidade from './Data/Reportimages/ClientDocs/viabilidade1.pdf'

export const DadosAlteraveis = {
  passCode: "000-aaa",
  imagemDaHome: imgVar,
  clientName: "José",
  coordenadas: "-27.10589409588796, -48.913661305307016",
  endereco: "Rua Francisco Walendosky - Centro 2",
  Cep: "88353-201",
  Historico: [
    {
      TipoDeAnotacao: "Doacao",
      Message: "Doação de 1/3 do imóvel para",
      PessoasEnvolvida: [
        { nome: "Walmir Merisio" },
        { nome: "Ledy Walendosky Merisio" },
      ],
      CodigoDaAnotacao: "R. 1-23.543",
    },
    {
      TipoDeAnotacao: "Doacao",
      Message: "Doação de 1/3 do imóvel para",
      PessoasEnvolvida: [{ nome: "Mario Merisio" }],
      CodigoDaAnotacao: "R. 2-23.543",
    },
    {
      TipoDeAnotacao: "Doacao",
      Message: "Doação de 1/3 do imóvel para",
      PessoasEnvolvida: [{ nome: "Ivo  Merisio" }],
      CodigoDaAnotacao: "R. 3-23.543",
    },
    {
      TipoDeAnotacao: "Usufruto",
      Message: " Registro de usufruto em nome de ",
      PessoasEnvolvida: [
        { nome: " Luiz Walendosky " },
        { nome: "Sofia Walendosky" },
      ],
      CodigoDaAnotacao: "R. 4-23.543",
    },
    {
      TipoDeAnotacao: "Extinção de usufruto",
      Message: " Extinção do usufruto devido ao falecimento dos usufrutuários ",
      CodigoDaAnotacao: "AV 5-23.543",
    },
    {
      TipoDeAnotacao: "Transferência",
      Message: " Transferência de 1/3  do imóvel para: ",
      PessoasEnvolvida: [{ nome: " Márcia Walendosky Pereira " }],
      CodigoDaAnotacao: "R. 6-23.543",
    },
    {
      TipoDeAnotacao: "Usufruto",
      Message: " Registro de usufruto em nome de ",
      PessoasEnvolvida: [{ nome: " Lúcia Imhof Walendosky " }],
      CodigoDaAnotacao: "R. 7-23.543",
    },
    {
      TipoDeAnotacao: "Correcao R.6",
      Message: " Correção do R.6 para indicar aquisição de 1/3 do imóvel ",
      CodigoDaAnotacao: "AV 8-23.543",
    },
    {
      TipoDeAnotacao: "Usufruto",
      Message: " Transferência de 1/3 do imóvel para ",
      PessoasEnvolvida: [
        { nome: " Marlu Walendosky Martins " },
        { nome: "Ivana Walendosky" },
      ],
      CodigoDaAnotacao: "R. 9-23.543",
    },
  ],
  DivisaoFinalDoImovel: [
    {
      ProprietarioUm: "Walmir Merisio e Ledy",
      ProprietarioDois: "Walendosky Merisio",
      Metragem: "752,47m²",
      percento: "33%",
    },
    {
      ProprietarioUm: "Marlu Walendosky Martins",
      ProprietarioDois: " Ivana Walendosky ",
      Metragem: "752,47m²",
      percento: "33%",
    },
    {
      ProprietarioUm: "Marcia Walendosky Pereira",
      ProprietarioDois: "sem",
      Metragem: "752,47m²",
      percento: "33%",
    },
  ],
  RestricoesDoImovel: [
    "Necessidade de retificação de área total na matrícula",
    "Ausência de registro das partes de Walmir Merisio e Ledy, bem como de Marlu Walendosky Martins e Ivana",
  ],
  proprietariosAtuais: [
    {
      proprietarios: ["Walmir Merisio", "Ledy Walendosky Merisio"],
      MetragemAprox: "752,47m²",
      Percentual: "33.33%",
    },
    {
      proprietarios: ["Marlu Walendosky Martins", "Ivana Walendosky"],
      MetragemAprox: "752,47m²",
      Percentual: "33.33%",
    },
    {
      proprietarios: ["Marcia Walendosky Pereira"],
      MetragemAprox: "752,47m²",
      Percentual: "33.33%",
    },
  ],
  usosPermitidos: ["NC1-B", "NC1-C", "NC2-A", "NC2-B", "NC2-C"],
  enchente7mt,
  enchente8mt,
  enchente9mt,
  enchente10mt,
  zoneamento: "urbano",
  regrasDeUso: ["dontFind"],
  taxaOcupacao: "50%",
  Recuos: [
    "frontal: 5 metros",
    "Lateral: 3 metros",
    "Fundos: 3 metros",
  ],
  alvara: "dontFind",
  habitese: "dontFind",
  cno: "dontFind",
  cnar: "dontFind",
  matricula,
  licensaAmbiental: "dontFind",
  avcb: "dontFind",
  escrituraPublicaDeCompraeVenda: "dontFind",
  loteMinimo: "240m²",
  testada: "12mt",
  alturaMaximaPermitida: "dontSpecificData",
  macrozona: "zmpl",
  microzona: "UP UP12",
  pavimentos: "6",
  areasVerdes: "não presente no local",
  relevo: "dontFind",
  linkEarth:
    "https://earth.google.com/web/data=MkEKPwo9CiExc1YtdW9fTUtWMVFjNC1aVGZ2d2VuNU9YRFNpQkxzOUgSFgoUMDA5MUNBRjczNzMxODI5ODA0ODIgAQ",
  iptu: ['sem pendências encontradas'],
  mapa: "https://earth.google.com/earth/d/1sV-uo_MKV1Qc4-ZTfvwen5OXDSiBLs9H?usp=sharing",
  viabilidade,
};
