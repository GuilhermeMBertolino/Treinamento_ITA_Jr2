import "./App.css";
import React from "react";
import {BrowserRouter} from "react-router-dom";

import Navbar from "../elements/Navbar.jsx";
import Content from "../elements/Content.jsx";
import Footer from "../elements/Footer.jsx";

const App = props => 
(
    <div className="App">
        <BrowserRouter>
            <Navbar></Navbar>
            <div className="flexContainer">
                <Content></Content>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    </div>
)

export default App;