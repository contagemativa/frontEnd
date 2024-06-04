//#region Imports

import React, { useState } from "react";
import Button from "../../Components/Common/Button/Button.jsx";
import Logo from "../../Components/Common/Logo/Logo.jsx";
import { handleLoginClick } from "../../Controllers/loginController.js";
import '../../../public/css/output.css';  
import { useNavigate } from 'react-router-dom';

//#endregion

export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = async (e) => {
    e.preventDefault(); 
    await handleLoginClick(usuario, senha, navigate, setError);
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
                type="text"
                placeholder="login"
                className="input input-bordered"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="password"
                placeholder="senha"
                className="input input-bordered"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="form-control mt-6">
              <Button className="btn btn-primary" buttonText="Login" onClick={handleButtonClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
