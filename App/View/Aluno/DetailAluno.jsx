import React from "react";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import { FaUser, FaUserCircle, FaChalkboardTeacher } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImUserPlus } from "react-icons/im";
import Card from "../../Components/Common/Card/Card.jsx";

export default function DetailAluno() {
  return (
    <>
      <MainFrame>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card changeComponent="\Home" cardText="Aluno" classCard="bg-primary py-4 p-6" cardTextColor="text-white" cardIcon={<FaUser size={35}/>}></Card>
            <Card cardText="Professor" classCard="bg-primary py-4 p-6" cardTextColor="text-white" cardIcon={<FaChalkboardTeacher size={35}/>}></Card>
            <Card cardText="Regionais" classCard="bg-primary py-4 p-6" cardTextColor="text-white" cardIcon={<FaLocationDot size={35}/>}></Card>
            <Card cardText="Cadastros" classCard="bg-primary py-4 p-6" cardTextColor="text-white" cardIcon={<ImUserPlus size={35}/>}></Card>
        </div>
      </MainFrame>
    </>
  );
}
