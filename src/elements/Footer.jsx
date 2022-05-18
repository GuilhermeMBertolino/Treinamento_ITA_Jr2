import "./Footer.css"
import React from "react";
import logo_facebook from "../imagens/logo_facebook.png";
import logo_linkedin from "../imagens/logo_linkedin.png";
import logo_instagram from "../imagens/logo_instagram.png";

const Footer = (props) =>
(
    <div className="component">
        <div className="Footer">
            <div className="contato">
                <h4><strong>Encontre-nos:</strong></h4>
                <p>Praça Marechal Eduardo Gomes, nº 50, Vila das Acácias, DCTA - São José dos Campos</p>
                <p>Telefone: <strong>(12)99999-9999</strong></p>
            </div>
            <div className="redes">
                <h4><strong>Acompanhe nossas redes:</strong></h4>
                <div className="linksRedes">
                    <a href="https://www.linkedin.com/">
                        <img src={logo_linkedin} alt="Logo_linkedin"/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <img src={logo_facebook} alt="logo_facebook"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={logo_instagram} alt="logo_instagram"/>
                    </a>
                </div>
            </div>
        </div>
        <h5 className="copyright">
            Feito em 2022 por: Guilherme Müller Bertolino
        </h5>
    </div>
)

export default Footer;