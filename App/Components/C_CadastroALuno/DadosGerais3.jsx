import React, { useContext, useState } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosGerais3 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    console.log(aluno);
    setAluno((prevAluno) => {
      let updatedAluno = { ...prevAluno };
      let currentLevel = updatedAluno;
      for (let i = 0; i < keys.length - 1; i++) {
        currentLevel = currentLevel[keys[i]];
      }
      currentLevel[keys[keys.length - 1]] = value;
      return updatedAluno;
    });
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">
        Dados Gerais do Aluno
      </p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">RG: *</span>
        </div>
        <input
          type="text"
          name="identidade.rg"
          value={aluno.identidade.rg}
          onChange={handleChange}
          placeholder="RG do Aluno"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Orgão Expedidor: *</span>
        </div>
        <input
          type="text"
          name="identidade.orgaoExpedidor"
          value={aluno.identidade.orgaoExpedidor}
          onChange={handleChange}
          placeholder="Orgão Expedidor"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Data de Emissão: *</span>
        </div>
        <input
          type="date"
          name="identidade.dataEmissao"
          value={aluno.identidade.dataEmissao}
          onChange={handleChange}
          placeholder="Data de Emissão"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">CPF: *</span>
        </div>
        <input
          type="text"
          name="pessoa.cpf"
          value={aluno.pessoa.cpf}
          onChange={handleChange}
          placeholder="CPF Aluno"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
};

export default DadosGerais3;
