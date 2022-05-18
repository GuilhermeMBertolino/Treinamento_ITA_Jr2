import React from "react";
import "./Home.css";
import {useParams} from "react-router-dom";
import MembrosRede from "../../imagens/Membros_rede_25.png";
import BixosRede from "../../imagens/Imagem_rede.jpeg";

const Home = props => 
{
    const {user} = useParams();
    return (
        <div className="Home">
            <h2>Bem vindo a Rede_ <strong>{user || ""}</strong></h2>
            <h3><strong>#borarede</strong></h3>
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