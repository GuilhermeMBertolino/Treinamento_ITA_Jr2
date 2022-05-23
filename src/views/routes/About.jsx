import React from "react";
import "./About.css";
import ImagemRede from "../../imagens/Imagem_rede.jpeg";

const About = props => 
(
    <div className="About">
        <h2>Bora Rede_!</h2>
        <p>
            A <strong>Rede_</strong> é a iniciativa responsável por garantir o
            acesso à <strong>internet</strong> em todo o H8. Só com isso dá para ter
            noção de como é fundamental o nosso trabalho, mas
            não ficamos por aí. Você vai sim aprender a arrumar a
            internet da sua casa quando ela cair, mas a <strong>Rede_</strong> vai
            muito além disso. Aqui você aprederá a controlar
            <strong> servidores e redes em geral</strong>, você também poderá
            participar dos grandes projetos que virão em 2022 e
            serão bem interessantes para colocar no seu currículo.
        </p>
        <p>
            Mas eu preciso ter algum conhecimento
            prévio em programação ou outra tecnologia? <strong>Não! </strong>
            O único pre-requisito é ter entusiamo, vontade de
            aprender e de contribuir com a comunidade em
            nossa missão de garantir que todos do H8 tenham
            acesso à internet. Se você tem curiosidade em
            aprender mais sobre servidores, web development,
            Linux, bash e outras linguagens de programação,
            venha fazer parte da nossa <strong>família</strong>! Vamos
            transformar toda essa curiosidade em
            conhecimento, aprendendo tudo na prática!
            Sejam muito bem-vindos à comunidade iteana
            e aproveitem cada momento desses próximos
            anos aqui no ITA e no H8. E por fim, mas não
            menos importante, <strong>#borarede</strong> .
        </p>
        <div className="imgDiv">
            <img src={ImagemRede} alt="Imagem Rede" />
        </div>
    </div>
)

export default About;