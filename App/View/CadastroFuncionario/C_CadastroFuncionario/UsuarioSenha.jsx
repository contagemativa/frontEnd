import React, { useContext, useState } from "react";
import { FuncionarioContext } from "../../../Models/Class/funcionarioClass";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function UsuarioSenha() {
  const { funcionario, setFuncionario } = useContext(FuncionarioContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeUsuario = (e) => {
    const value = e.target.value;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      pessoa: {
        ...prevFuncionario.pessoa,
        usuario: value,
      },
    }));
  };

  const handleChangeSenha = (e) => {
    const value = e.target.value;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      pessoa: {
        ...prevFuncionario.pessoa,
        senha: value,
      },
    }));
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">
        Usuário e Senha do Funcionário
      </p>
      <p className="grid justify-items-left">
        Esse login será usado para acessoa o sistema.
      </p>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Usuário *</span>
        </div>
        <input
          type="text"
          name="pessoa.usuario"
          value={funcionario.pessoa.usuario}
          onChange={handleChangeUsuario}
          placeholder="Usuário do Funcionário"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Senha do Funcionário: *</span>
        </div>
        <div className="relative w-full max-w-xs">
          <input
            type={showPassword ? "text" : "password"}
            name="pessoa.senha"
            value={funcionario.pessoa.senha}
            onChange={handleChangeSenha}
            placeholder="Senha do Funcionário"
            className="input input-bordered w-full pr-10"
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
      </label>
    </div>
  );
}
