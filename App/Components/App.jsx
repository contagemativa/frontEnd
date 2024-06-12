import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../View/Login/LoginForm";
import Home from "../View/Home/home";
import ConfigAluno from "../View/ConfigAluno/ConfigAluno"
import CadastroAluno from "../View/CadastroAluno/CadastroAluno";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ConfigAluno" element={<ConfigAluno/>}/>
        <Route path="/CadastroAluno" element={<CadastroAluno/>}/>
      </Routes>
    </>
  );
}
