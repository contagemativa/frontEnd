//#region Imports

import React, { useState } from "react";
import Button from "../../Common/Button/Button.jsx";
import Logo from "../../Common/Logo/Logo.jsx";
import { handleLoginClick } from "../../../Controllers/loginController.js";

//#endregion

export default function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle - Clique do botão
  const handleButtonClick = async (event) => {
    
    event.preventDefault();
    
    try {
      await handleLoginClick(user, password, setError);
    } catch (error) {
      console.error("Erro na requisição", error);
      setError("Erro no login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <Logo />
        <div className="card shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Login</span>
              </label>
              <input
                id="usuario"
                type="Login"
                placeholder="login"
                className="input input-bordered"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                id="senha"
                type="password"
                placeholder="senha"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <a href="" className="label-text-alt link link-hover">
                  Esqueceu sua senha?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button
                buttonText={"Login"}
                className="btn btn-primary"
                onClick={handleButtonClick}
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
