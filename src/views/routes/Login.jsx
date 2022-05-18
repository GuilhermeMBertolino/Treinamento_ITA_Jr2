import "./Login.css"
import React, {useState} from "react";
import users from "../../data/users.js";
import {Link, useParams} from "react-router-dom";

const Login = props => 
{
    const {autentication} = useParams(); 
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
    const checarUsuario = () =>
    {
        return users.map((usuario) => 
            usuario.nome === username && usuario.senha === password).reduce((a, b) => a || b);
    }

    return (
        <div className="Login">
            <div className="login_title"><h2 >Login</h2></div>
            <div className="input">
                <input type="username" value={username} placeholder="Nome de usuário" onChange={quandoMudarUser}/>
            </div>
            <div className="input">
                <input type="password" value={password} placeholder="Senha" onChange={quandoMudarPassword} />
                <a href="/" className="forgot_password">Esqueceu a senha?</a>
            </div>
            <button id="login_btn">
                <Link to={checarUsuario() ? `/home/${username}` : "/login/nao_autenticado"} href="#5" className="btn_link">
                    <p>Fazer login</p>
                </Link>
            </button>
            {autentication === "nao_autenticado" ? <h5>Usuário ou senha incorretos!</h5> : <></>}
            <button id="signup_btn">
                <a href="/" className="btn_link">
                    <p>Cadastrar-se</p>
                </a>
            </button>
        </div>
    )
}

export default Login;