import "./Login.css"
import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import { AppContext } from "../../data/InfoContext";
import tryLogin from "../../functions/login.js";

const Login = props => 
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginLink, setLoginLink] = useState("/login");
    const {setUser, autentication, setAutentication} = useContext(AppContext);

    const quandoMudarUser = (event) =>
    {
        setUsername(event.target.value);
    }
    const quandoMudarPassword = (event) =>
    {
        setPassword(event.target.value);
    }
    async function checarUsuario()
    {
        let login = await tryLogin(username, password);
        setAutentication(login);
        if(login)
            setUser(username);
        setLoginLink(login ? "/memberArea" : "/login");
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
            <button id="login_btn" onClick={checarUsuario}>
                <Link to={loginLink} className="btn_link">
                    <p>Fazer login</p>
                </Link>
            </button>
            {!autentication ? <h5>Usuário ou senha incorretos!</h5> : <></>}
            <button id="signup_btn">
                <a href="/signup" className="btn_link">
                    <p>Cadastrar-se</p>
                </a>
            </button>
        </div>
    )
}

export default Login;