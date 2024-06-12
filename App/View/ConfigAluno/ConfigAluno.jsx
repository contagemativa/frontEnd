import React from "react";
import { FaUserCircle } from "react-icons/fa";
import User from "../../Components/Common/Box/UserBox.jsx";
import Button from "../../Components/Common/Button/Button.jsx";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import UserBoxMobile from "../../Components/Common/Box/UserBoxMain.jsx";


export default function ConfigAluno() {
  return (
    <>
      <MainFrame>
        <div className="grid justify-items-center">
          <div>
            <div className="flex justify-center">
              <FaUserCircle size={120} color="white" />
            </div>
            <div className="my-6">
              <UserBoxMobile/>
            </div>
          </div>
        </div>
        <div>
          <p className="grid text-3xl font-bold text-slate-700 justify-items-center">
            Configuração
          </p>
        </div>
        <div className="grid justify-items-center">
          <div className="card card-compact w-full lg:w-1/4 bg-base-100 shadow-xl">
            <div className="card-body">
              <form action="PUT">
                <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                  Informações gerais
                </p>
                <div>
                    
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainFrame>
    </>
  );
}
