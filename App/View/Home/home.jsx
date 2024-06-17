import React, {useEffect} from "react";
import { FaUser, FaUserCircle, FaChalkboardTeacher } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImUserPlus } from "react-icons/im";
import Card from "../../Components/Common/Card/Card.jsx";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import config from "../../config.js";

export default function Home() {

  useEffect(() => {
    document.title = `${config.documentTitle} | Home`;
  }, []);

  return (
    <>
      <MainFrame>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card link="/Aluno" cardText="Aluno" classCard="bg-primary py-4 p-6" cardTextColor="text-white" cardIcon={<FaUser size={35}/>}></Card>
            <Card link="/Professor" cardText="Professor" classCard="bg-primary py-4 p-6" cardTextColor="text-white" cardIcon={<FaChalkboardTeacher size={35}/>}></Card>
            <Card link="/Regionais" cardText="Regionais" classCard="bg-primary py-4 p-6" cardTextColor="text-white" cardIcon={<FaLocationDot size={35}/>}></Card>
            <Card link="/Cadastros" cardText="Cadastros" classCard="bg-primary py-4 p-6" cardTextColor="text-white" cardIcon={<ImUserPlus size={35}/>}></Card>
        </div>        
      </MainFrame>
    </>
  );
}
