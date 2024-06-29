import React from "react";
import Header from "../../Components/Header/Header";
import { RiWhatsappFill } from "react-icons/ri";
import InstagramEmbed from "../../Components/SocialMedia/Instagram";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Contato() {
  return (
    <div className="Contato">
      <Header selected="contato" />
      <div className="ContactBody">
        <section className="AcessLinks">
          <div className="Texts">
            <h1 className="PrincipalTitle">Ficou com alguma Duvida?</h1>
            <p>
              Abaixo estão os princípais canais de contato conosco, ou se
              preferir pode usar o chat integrado.{" "}
            </p>
          </div>
          <div className="WhatsappCard">
            <RiWhatsappFill />
            <a href="https://api.whatsapp.com/send?phone=5547997633714&text=Ol%C3%A1,%20estava%20vendo%20o%20relat%C3%B3rio%20e%20tive%20uma%20d%C3%BAvida">
              Mande uma mensagem no Whatsapp
            </a>
          </div>
          <div className="Email">
            <MdEmail />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vizzion.startup@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envie um email
            </a>
          </div>
          <div className="Instagram">
            <PiInstagramLogoFill />
            <a
              href="https://www.instagram.com/vi.zzion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siga-nos no instagram
            </a>
          </div>
          <div className="Instagram">
            <IoLogoLinkedin />
            <a
              href="https://www.linkedin.com/company/vizzionstartup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conheça nosso LinkedIn
            </a>
          </div>
        </section>

        <div className="SocialMedia">
          <InstagramEmbed />
        </div>
      </div>
    </div>
  );
}
