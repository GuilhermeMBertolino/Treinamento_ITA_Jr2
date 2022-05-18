import "./Navbar.css";
import React from "react";
import {Link} from "react-router-dom";

const Navbar = props => 
(
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
                    <Link to="/login"><h4>Login</h4></Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Navbar;