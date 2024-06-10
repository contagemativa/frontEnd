import React from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
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
        <div className="justify-items-center">
          <div>
            <Card cardText="Aluno" cardIcon={FaUser}></Card>
          </div>
          <div>
            <Card></Card>
          </div>
          <div>
            <Card></Card>
          </div>
          <div>
            <Card></Card>
          </div>
        </div>        
      </MainFrame>
    </>
  );
}
