import "./Navbar.css";
import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { AppContext } from "../data/InfoContext";

const Navbar = props =>
{
    const {user, setUser} = useContext(AppContext);
    return (
        <div className="Navbar">
            <div>
                <h2 className="Logo">Rede_</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><h4>Inicio</h4></Link>
                    </li>
                    <li>
                        <Link to="/about"><h4>Sobre</h4></Link>
                    </li>
                    <li>
                        <Link to={user? "/memberArea" : "/login"}><h4>Área do membro</h4></Link>
                    </li>
                    <li>
                        {!user? <Link to="/login"><h4>Login</h4></Link>
                        : <Link className="leave" to="/" onClick={() => setUser(null)}><h4>Sair</h4></Link>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;