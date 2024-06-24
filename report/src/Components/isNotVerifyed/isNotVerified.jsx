import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/PATHS";
import isNotVerifiedImg from "../../Data/Reportimages/interdit.png";
import Logo from "../../Data/Reportimages/logoi.png";

export default function IsNotVerified() {
  return (
    <div className="IsNotVerified">
      <img src={Logo} alt="Logo" />
      <section className="DocsText">
        <img src={isNotVerifiedImg} alt="isNotVerifiedd" />
        <div className="Textos">
          <h1>
            Por favor, retorne e coloque o cógido de segurança na tela inicial
          </h1>

          <Link className="ReturnHome" to={PATHS.Home}>
            Retornar para Home
          </Link>
        </div>
      </section>
    </div>
  )
}
