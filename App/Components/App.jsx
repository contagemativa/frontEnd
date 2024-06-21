import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../View/Login/LoginForm";
import Home from "../View/Home/home";
import ConfigAluno from "../View/ConfigAluno/ConfigAluno"
import CadastroAluno from "../View/CadastroAluno/CadastroAluno";
import CadastroAlunoPrevio from "../View/CadastroAluno/CadastroAlunoPrevio";
import CadastroRegional from "../View/CadastroRegional/CadastroRegional";
import Aluno from "../View/Aluno/Aluno";
import ListaAlunos from "../View/Aluno/ListaAlunos";
import Cadastros from "../View/Cadastro/Cadastro";
import CadastroNucleo from "../View/CadastroNucleo/CadastroNucleo";
import Regionais from "../View/Regionais/ListaRegionais";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Aluno" element={<Aluno />} />
        <Route path="/ListaAlunos" element={<ListaAlunos />} />
        {/* <Route path="/Professor" element={<Professor/>} /> */}
        <Route path="/Regionais" element={<Regionais/>} /> 
        <Route path="/Cadastros" element={<Cadastros/>} /> 
        <Route path="/ConfigAluno" element={<ConfigAluno/>}/>
        <Route path="/Cadastros/CadastroAluno" element={<CadastroAluno/>}/>
        <Route path="/Cadastros/CadastroAlunoPrevio" element={<CadastroAlunoPrevio/>}/>
        <Route path="/Cadastros/CadastroRegional" element={<CadastroRegional/>}/>
        <Route path="/Cadastros/CadastroNucleo" element={<CadastroNucleo/>}/>
      </Routes>
    </>
  );
}
