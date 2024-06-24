import React from "react";
import LogoImage from "../../Data/Reportimages/logoi.png";

export default function Header({ selected }) {
  return (
    <div className="Header">
        <ul>
          <li className={selected === 'condicionantes' ? 'selecionado': ''}>
            <a href=""> Condicionantes </a>
          </li>
          <li className={selected === 'deficiencias' ? 'selecionado': ''}>
            <a href=""> Deficiencias </a>
          </li>
          <li className={selected === 'potenciais' ? 'selecionado': ''}>
            <a href=""> Potenciais </a>
          </li>
        </ul>
        <img src={LogoImage} alt="logo" />
    </div>
  );
}
