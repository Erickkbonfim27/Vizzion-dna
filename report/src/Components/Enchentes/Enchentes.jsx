/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function Enchentes({ nv1, nv2, nv3, nv4 }) {
  return (
    <div className="Enchentes">
      <div className="printsDosNiveis">
        <div className="enchenteSeteMetros">
          <img src={nv1} alt="" />
          <h3>afetação com Rio a 7mts acima do nivel</h3>
        </div>
        <div className="enchenteSeteMetros">
          <img src={nv2} alt="" />
          <h3>afetação com Rio a 8mts acima do nivel</h3>
        </div>
        <div className="enchenteSeteMetros">
          <img src={nv3} alt="" />
          <h3>afetação com Rio a 9mts acima do nivel</h3>
        </div>
        <div className="enchenteSeteMetros">
          <img src={nv4} alt="" />
          <h3>afetação com Rio a 10mts acima do nivel</h3>
        </div>
      </div>
      <div className="MapaDeCartaDeEnchentes">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1D5zBjbOXw4uVlX38O_9IBvELuHs&ehbc=2E312F"
          width="600"
          height="400"
          style={{ border: 0 }}
          loading="async"
        ></iframe>
        <div className="Texts">
          <h2>
            Ficou com alguma dúvida ou curiosidade referente à enchente?
          </h2>
          <p>Este mapa ao lado comtempla a região geral de brusque com a carta enchente, sendo possível visualizar a afetação de 7 à 15 metros acima do nível do Rio.</p>
        </div>
      </div>
    </div>
  );
}
