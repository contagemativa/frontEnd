import React from "react";
import { FaUser, FaUserCircle, FaChalkboardTeacher } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImUserPlus } from "react-icons/im";
import Card from "../../Components/Common/Card/Card.jsx";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import UserBoxMobile from "../../Components/Common/Box/UserBoxMain.jsx";

export default function Home() {
  return (
    <>
      <MainFrame>
        <div className="lg:invisible grid justify-items-center visible ">
          <div>
            <div className="flex justify-center">
              <FaUserCircle size={120} color="white"/>
            </div>
            <div className="my-10">
              <UserBoxMobile/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card cardText="Aluno" classCard="bg-primary p-2" cardTextColor="text-white" cardIcon={<FaUser size={35}/>}></Card>
            <Card cardText="Professor" classCard="bg-primary p-2" cardTextColor="text-white" cardIcon={<FaChalkboardTeacher size={35}/>}></Card>
            <Card cardText="Regionais" classCard="bg-primary p-2" cardTextColor="text-white" cardIcon={<FaLocationDot size={35}/>}></Card>
            <Card cardText="Aluno" classCard="bg-primary p-2" cardTextColor="text-white" cardIcon={<ImUserPlus size={35}/>}></Card>
        </div>        
      </MainFrame>
    </>
  );
}
