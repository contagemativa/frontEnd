import React, {useEffect} from "react";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import { FaNotesMedical } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { RiMedicineBottleFill } from "react-icons/ri";
import Card from "../../Components/Common/Card/Card.jsx";
import config from "../../config.js";

export default function Cadastros() {
  
  useEffect(() => {
    document.title = `${config.documentTitle} | Cadastros`;
  }, []);

  return (
    <>
      <MainFrame>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-fit">
            <Card link="FichaMedica" cardText="Ficha Médica" classCard="bg-primary py-4 p-6 h-full" cardTextColor="text-white" cardIcon={<FaNotesMedical size={35}/>}></Card>
            <Card link="DadosCadastrais" cardText="Dados Cadastrais" classCard="bg-primary py-4 p-6 h-full" cardTextColor="text-white" cardIcon={<PiUserListFill size={35}/>}></Card>
            <Card link="Medicamentos" cardText="Medicamentos" classCard="bg-primary py-4 p-6 h-full" cardTextColor="text-white" cardIcon={<RiMedicineBottleFill size={35}/>}></Card>
        </div>
      </MainFrame>
    </>
  );
}
