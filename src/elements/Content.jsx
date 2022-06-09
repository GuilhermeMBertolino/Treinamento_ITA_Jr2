import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "../views/routes/Home.jsx";
import About from "../views/routes/About.jsx";
import Login from "../views/routes/Login.jsx";
import MemberArea from "../views/routes/MemberArea.jsx";
import Signup from "../views/routes/Signup.jsx";

const Content = props => 
(
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/memberArea" element={<MemberArea></MemberArea>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>   
    </main>
)

export default Content;