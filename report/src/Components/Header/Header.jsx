import React, { useState } from "react";
import LogoImage from "../../Data/Reportimages/logoi.png";
import { PATHS } from '../../router/PATHS';

export default function Header({ selected }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        <li className={selected === "historico" ? "selecionado" : ""}>
          <a href={PATHS.SecaoUm}> Historico </a>
        </li>
        <li className={selected === "condicionantes" ? "selecionado" : ""}>
          <a href={PATHS.SecaoDeCondicionais}> Condicionantes </a>
        </li>
        <li className={selected === "potenciais" ? "selecionado" : ""}>
          <a href={PATHS.potenciais}> Potenciais </a>
        </li>
        <li className={selected === "demografia" ? "selecionado" : ""}>
          <a href={PATHS.demografia}> Demografia Regional </a>
        </li>
        <li className={selected === "contato" ? "selecionado" : ""}>
          <a href={PATHS.contatos}> Contato </a>
        </li>
      </ul>
      <img src={LogoImage} alt="logo" />
    </div>
  );
}
