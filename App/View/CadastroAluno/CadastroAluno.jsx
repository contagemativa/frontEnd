import React from "react";
import { FaUserCircle } from "react-icons/fa";
import User from "../../Components/Common/Box/UserBox.jsx";
import Button from "../../Components/Common/Button/Button.jsx";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import UserBoxMobile from "../../Components/Common/Box/UserBoxMain.jsx";

export default function CadastroAluno() {
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
          <div>
            <p className="grid text-3xl font-bold text-slate-700 justify-items-center">
              Configuração
            </p>
          </div>
          <div className="grid justify-items-center">
            <div className="card card-compact w-full lg:w-1/4 bg-base-100 shadow-xl">
              <div className="card-body">
                <form action="PUT">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Nome Completo:</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Digite Seu Nome Completo"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Nome De Usuario:</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Digite o Nome de Usuario"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Senha:</span>
                    </div>
                    <input
                      type="password"
                      placeholder="Digite Sua senha"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Confirma Senha:</span>
                    </div>
                    <input
                      type="password"
                      placeholder="Confirme a Senha Digitada"
                      className="input input-bordered w-full"
                    />
                  </label>
                </form>
                <div className="form-control mt-6">
                  <Button className="btn btn-primary" buttonText="Alterar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainFrame>
    </>
  );
}
