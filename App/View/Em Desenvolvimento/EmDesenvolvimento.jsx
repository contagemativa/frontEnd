import React, { useEffect } from "react";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import config from "../../config.js";
import Logo from "../../Components/Common/Logo/Logo.jsx";
import LogoPuc from "../../Components/Common/Logo/LogoPuc.jsx";
import MediaQuery from "react-responsive";

export default function EmDesenvolvimento() {
  useEffect(() => {
    document.title = `${config.documentTitle} | Em Desenvolvimento`;
  }, []);

  return (
    <>
      <MainFrame>
        <div className="flex flex-col items-center justify-center gap-10">

          <MediaQuery minWidth={800}>
            <div className="grid grid-cols-1 my-10 gap-5 text-center">
                <h1 className="text-5xl font-bold text-gray-800">Em Desenvolvimento!</h1>
                <p>Nossa equipe está trabalhando no desenvolvimento desse recurso!</p>
            </div>
            <div className="flex gap-5">
                <Logo width={260}></Logo>
                <div className="divider divider-horizontal"></div>
                <LogoPuc width={150}></LogoPuc>
            </div>
          </MediaQuery>

          <MediaQuery minWidth={375} maxWidth={799}>
            <div className="grid grid-cols-1 my-4 gap-5 text-center">
                <h1 className="text-xl font-bold text-gray-800">Em Desenvolvimento!</h1>
                <p>Nossa equipe está trabalhando no desenvolvimento desse recurso!</p>
            </div>
            <div className="flex flex-wrap gap-1">
                <Logo width={150}></Logo>
                <div className="divider divider-horizontal"></div>
                <LogoPuc width={100}></LogoPuc>
            </div>
          </MediaQuery>

          <MediaQuery maxWidth={374}>
            <div className="grid grid-cols-1 my-4 gap-5 justify-items-center">
                <h1 className="text-xl font-bold text-gray-800">Em Desenvolvimento!</h1>
                <text className="text-center">Nossa equipe está trabalhando no desenvolvimento desse recurso!</text >
            </div>
            <div className="grid justify-items-center">
                <Logo width={150}></Logo>
                <div className="divider divider-vertical"></div>
                <LogoPuc width={100}></LogoPuc>
            </div>
          </MediaQuery>


        </div>
      </MainFrame>
    </>
  );
}
