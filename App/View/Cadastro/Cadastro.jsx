import React, {useEffect} from "react";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import { ImUserPlus } from "react-icons/im";
import { BiSolidUserCheck } from "react-icons/bi";
import { TbMapPinPlus, TbMapPlus } from "react-icons/tb";
import Card from "../../Components/Common/Card/Card.jsx";
import config from "../../config.js";

export default function Cadastros() {
  
  useEffect(() => {
    document.title = `${config.documentTitle} | Cadastros`;
  }, []);

  return (
    <>
      <MainFrame>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 h-fit">
          <Card link="CadastroFuncionario" cardText="Cadastrar Funcionário" classCard="bg-primary py-4 p-6 h-full" cardTextColor="text-white" cardIcon={<BiSolidUserCheck size={35}/>}></Card>
          <Card link="CadastroRegional" cardText="Cadastrar Regional" classCard="bg-primary py-4 p-6 h-full" cardTextColor="text-white" cardIcon={<TbMapPinPlus size={35}/>}></Card>
          <Card link="CadastroNucleo" cardText="Cadastrar Núcleo" classCard="bg-primary py-4 p-6 h-full" cardTextColor="text-white" cardIcon={<TbMapPlus size={35}/>}></Card>
          <Card link="CadastroAluno" cardText="Cadastrar Aluno" classCard="bg-primary py-4 p-6 h-full" cardTextColor="text-white" cardIcon={<ImUserPlus size={35}/>}></Card>      
        </div>
      </MainFrame>
    </>
  );
}
