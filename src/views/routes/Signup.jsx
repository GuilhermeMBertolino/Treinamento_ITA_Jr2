import React, {useState} from "react";
import {Link} from "react-router-dom";
const axios = require("axios");

const Signup = props => 
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const quandoMudarUser = (event) =>
    {
        setUsername(event.target.value);
    }
    const quandoMudarPassword = (event) =>
    {
        setPassword(event.target.value);
    }

    return (
        <div className="Login">
            <div className="login_title"><h2 >Cadastrar-se</h2></div>
            <div className="input">
                <input type="username" value={username} placeholder="Nome de usuário" onChange={quandoMudarUser}/>
            </div>
            <div className="input">
                <input type="password" value={password} placeholder="Senha" onChange={quandoMudarPassword} />
            </div>
            <button id="signup_btn" onClick={() => {
                axios.post("http://localhost:4000/usuario", {
                    nome: username,
                    senha: password,
                    turma: 26,
                    cargo: "membro",
                }).catch((err) => {
                    console.log(err);
                })
            }}>
                <Link to="/login" className="btn_link">
                    <p>Cadastrar-se</p>
                </Link>
            </button>
        </div>
    )
}

export default Signup;