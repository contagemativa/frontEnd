import React, { useContext, useState, useEffect } from "react";
import { FuncionarioContext } from "../../../Models/Class/funcionarioClass";

const DadosGerais = () => {
  const { funcionario, setFuncionario } = useContext(FuncionarioContext);

  const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">
        Dados Gerais do Funcionário
      </p>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Nome do Funcionário: *</span>
        </div>
        <input 
          type="text" 
          name="pessoa.nome" 
          value={funcionario.pessoa.nome} 
          onChange={handleChange} 
          placeholder="Nome do Aluno" 
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full my-2">
        <div className="flex items-center gap-4">
          <span className="label-text">Sexo: *</span>
          <div className="flex items-center gap-4">
            <label className="flex items-center cursor-pointer gap-1">
              <input 
                type="radio" 
                name="pessoa.sexo" 
                value="M" 
                checked={funcionario.pessoa.sexo === "M"} 
                onChange={handleChange} 
                className="radio" 
              />
              <span>Masculino</span>
            </label>
            <label className="flex items-center cursor-pointer gap-1">
              <input 
                type="radio" 
                name="pessoa.sexo" 
                value="F" 
                checked={funcionario.pessoa.sexo === "F"} 
                onChange={handleChange} 
                className="radio" 
              />
              <span>Feminino</span>
            </label>
          </div>
        </div>
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Data de Nascimento: *</span>
        </div>
        <input 
          type="date" 
          name="pessoa.dataDeNascimento" 
          value={funcionario.pessoa.dataDeNascimento} 
          onChange={handleChange} 
          placeholder="Data Nascimento" 
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
};

export default DadosGerais;
