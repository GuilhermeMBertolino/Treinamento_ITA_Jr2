import "./Login.css"
import React, {useContext, useState} from "react";
import users from "../../data/users.js";
import {Link} from "react-router-dom";
import { AppContext } from "../../data/InfoContext";

const Login = props => 
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser, autentication, setAutentication} = useContext(AppContext);

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
            <button id="login_btn" 
                onClick={() => 
                    {
                        if(checarUsuario()) 
                            setUser(username);
                        else
                            setAutentication(false);
                    }
            }>
                <Link to={checarUsuario() ? "/" : "/login"} className="btn_link">
                    <p>Fazer login</p>
                </Link>
            </button>
            {!autentication ? <h5>Usuário ou senha incorretos!</h5> : <></>}
            <button id="signup_btn">
                <a href="/" className="btn_link">
                    <p>Cadastrar-se</p>
                </a>
            </button>
        </div>
    )
}

export default Login;