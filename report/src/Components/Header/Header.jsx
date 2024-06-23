import React from "react";
import LogoImage from "../../Data/Reportimages/logoi.png";

export default function Header() {
  return (
    <div className="Header">
        <ul>
          <li>
            <a href=""> Condicionantes </a>
          </li>
          <li>
            <a href=""> Deficiencias </a>
          </li>
          <li>
            <a href=""> Potênciais </a>
          </li>
        </ul>

        <img src={LogoImage} alt="logo" />
    </div>
  );
}
