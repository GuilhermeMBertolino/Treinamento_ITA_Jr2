import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "../views/routes/Home.jsx";
import About from "../views/routes/About.jsx";
import Login from "../views/routes/Login.jsx";

const Content = props => 
(
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>   
    </main>
)

export default Content;