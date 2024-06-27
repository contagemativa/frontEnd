import React, { useState, useEffect } from "react";
import Button from "../../Components/Common/Button/Button.jsx";
import Logo from "../../Components/Common/Logo/Logo.jsx";
import { handleLoginClick } from "../../Controllers/loginController.js";
import "../../../public/css/output.css";
import { useNavigate } from "react-router-dom";
import config from "../../config.js";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function LoginForm() {
  useEffect(() => {
    document.title = `${config.documentTitle} | Login`;
  }, []);

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = async (e) => {
    e.preventDefault();
    await handleLoginClick(usuario, senha, navigate, setError);
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <Logo width={300} />
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
              <div className="relative w-full max-w-xs">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="senha"
                  className="input input-bordered w-full pr-10"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <IoEyeOff className="text-primary" size={20} />
                  ) : (
                    <IoEye className="text-primary" size={20} />
                  )}
                </button>
              </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="form-control mt-6">
              <Button
                className="btn btn-primary"
                buttonText="Login"
                onClick={handleButtonClick}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
