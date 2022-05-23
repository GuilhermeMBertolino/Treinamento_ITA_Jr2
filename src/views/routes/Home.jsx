import React, { useContext, useState } from "react";
import "./Home.css";
import MembrosRede from "../../imagens/Membros_rede_25.png";
import BixosRede from "../../imagens/Imagem_rede.jpeg";
import { AppContext } from "../../data/InfoContext";
import Members from "../../components/Members.jsx";

const Home = props => 
{
    const {user, members} = useContext(AppContext);
    const [btnStatus, setBtnStatus] = useState(false);
    return (
        <div className="Home">
            <h2>Bem vindo a Rede_ <strong>{user || ""}</strong></h2>
            <h3><strong>#borarede</strong></h3>
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
            <button className="membersbtn" onClick={() => setBtnStatus(!btnStatus)}>
                Nossos membros
            </button>
            {btnStatus ? <Members members={members}></Members> : <></>}
            <div className="imgDiv">
                <div className="img">
                    <img src={MembrosRede} alt="MembrosRede"/>
                </div>
                <div className="img">
                    <img src={BixosRede} alt="BixaralRede"/>
                </div>
            </div>
        </div>
    )
}

export default Home;