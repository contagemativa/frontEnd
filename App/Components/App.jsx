import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../View/Login/LoginForm";
import Home from "../View/Home/home";
import ConfigAluno from "../View/ConfigAluno/ConfigAluno"
import Aluno from "../View/Aluno/Aluno";
import ListaAlunos from "../View/Aluno/ListaAlunos";
import Cadastros from "../View/Cadastro/Cadastro";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Aluno" element={<Aluno />} />
        <Route path="/ListaAlunos" element={<ListaAlunos />} />
        {/* <Route path="/Professor" element={<Professor/>} /> */}
        {/* <Route path="/Regionais" element={<Regionais/>} /> */}
        <Route path="/Cadastros" element={<Cadastros/>} /> 
        <Route path="/ConfigAluno" element={<ConfigAluno/>}/>
      </Routes>
    </>
  );
}
