import React from 'react';
import Logo from '../../Data/Reportimages/logoi.png';
import NotFoundImage from '../../Data/Reportimages/erreur-404.png'
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/PATHS';

export default function NotFound() {
  return (
    <div className="IsNotVerified">
      <img src={Logo} alt="Logo" />
      <section className="DocsText">
        <img src={NotFoundImage} alt="isNotVerifiedd" />
        <div className="Textos">
          <h1>
           Pagina não encontrada
          </h1>
          <p>
            Este caminho não existe, clique no botão abaixo e retorne para a Home!
          </p>

          <Link className="ReturnHome" to={PATHS.Home}>
            Retornar para Home
          </Link>
        </div>
      </section>
    </div>
  )
}
