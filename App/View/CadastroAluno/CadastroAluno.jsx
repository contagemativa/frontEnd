import React from "react";
import { FaUserCircle } from "react-icons/fa";
import User from "../../Components/Common/Box/userBox.jsx";
import Button from "../../Components/Common/Button/Button.jsx";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import InformacoesGeral from "../../Components/formCadastro/InformacoesGeral.jsx";

import HookInfoGeral from "../../Hooks/FormCadastro/HookInfoGeral.jsx";

export default function ConfigAluno() {
  const componentes = [<InformacoesGeral />];

  const[currentState, currentComponent] = HookInfoGeral(componentes)
  return (
    <>
      <MainFrame>
        <div className="grid justify-items-center">
          <div>
            <div className="flex justify-center">
              <FaUserCircle size={120} color="white" />
            </div>
            <div className="my-6">
              <User
                visible={true}
                className="flex justify-center p-4 m-1 bg-base-100 rounded-lg shadow-md shadow-gray-400 text-slate-700 visible lg:invisible"
              ></User>
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
                    {currentComponent}
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainFrame>
    </>
  );
}
