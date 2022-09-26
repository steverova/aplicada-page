import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/components/Home";
import Login from "./view/components/Login";
import RegisterForm from "./view/components/Register";



export function Redirect() {
    
    return (
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="home" element={<Home />} />
         
        </Routes>
      </Router>
    );
}

export default Redirect;