import React from "react";
import LogoImage from "../../Data/Reportimages/logoi.png";
import {PATHS} from '../../router/PATHS';

export default function Header({ selected }) {
  return (
    <div className="Header">
      <ul>
        <li className={selected === "historico" ? "selecionado" : ""}>
          <a href={PATHS.SecaoUm}> Historico </a>
        </li>
        <li className={selected === "condicionantes" ? "selecionado" : ""}>
          <a href={PATHS.SecaoDeCondicionais}> Condicionantes </a>
        </li>
        <li className={selected === "deficiencias" ? "selecionado" : ""}>
          <a href={PATHS.deficiencias}> Deficiências </a>
        </li>
        <li className={selected === "potenciais" ? "selecionado" : ""}>
          <a href={PATHS.potenciais}> Potenciais </a>
        </li>
      </ul>
      <img src={LogoImage} alt="logo" />
    </div>
  );
}
