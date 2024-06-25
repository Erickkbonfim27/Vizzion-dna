import React from "react";
import { Link } from "react-router-dom";

export default function AnaliseAmbiental({ areasVerdes, relevo, linkEarth }) {
  return (
    <div className="AnaliseAmbiental">
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1X-myoqo6dWjJ7VkMz35i8_PpoeTCQck&ehbc=2E312F&noprof=1"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="dataSet">
        <div className="Infos">
          <h3>Informações</h3>
          <li> <b> Areas Verdes: </b> {areasVerdes} </li>
          <li> <b> Relevo Local: </b> {relevo} </li>
        </div>
        <div className="Legenda">
          <h3>Legenda do Mapa</h3>
          <section className="AreasVerdes">
            <span className="AreasVerdesCollorBox"></span>
            <p>Areas Verdes</p>
          </section>
          <section className="App">
            <span className="AppCollorBox"></span>
            <p>Areas de preservação permanentes</p>
          </section>
        </div>
        <Link to={linkEarth}> Veja no Google Earth </Link>
      </div>
    </div>
  );
}
