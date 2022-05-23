import "./App.css";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import InfoContext from "../data/InfoContext.jsx";

import Navbar from "../elements/Navbar.jsx";
import Content from "../elements/Content.jsx";
import Footer from "../elements/Footer.jsx";

const App = props => 
(
    <div className="App">
        <InfoContext>
            <BrowserRouter>
                <Navbar></Navbar>
                <div className="flexContainer">
                    <Content></Content>
                    <Footer></Footer>
                </div>
            </BrowserRouter>
        </InfoContext>
    </div>
)

export default App;