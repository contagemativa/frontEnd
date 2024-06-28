import React, { useContext } from "react";
import { FuncionarioContext } from "../../../Models/Class/funcionarioClass";

export default function Endereco() {
  const { funcionario, setFuncionario } = useContext(FuncionarioContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    
    setFuncionario((prevFuncionario) => {
      let updatedFuncionario = { ...prevFuncionario };
      let currentLevel = updatedFuncionario;
      for (let i = 0; i < keys.length - 1; i++) {
        currentLevel = currentLevel[keys[i]];
      }
      currentLevel[keys[keys.length - 1]] = value;
      return updatedFuncionario;
    });
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">
        Dados Gerais do Funcionário
      </p>
      <label className="form-control my-2">
        <div className="label">
          <span className="label-text">Rua: *</span>
        </div>
        <input
          type="text"
          name="pessoa.endereco.rua"
          value={funcionario.pessoa.endereco.rua || ''}
          onChange={handleChange}
          placeholder="Endereço"
          className="input input-bordered"
        />
      </label>
      <label className="form-control w-full flex my-2">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-1/2">
            <div className="label">
              <span className="label-text">N°: *</span>
            </div>
            <input
              type="text"
              name="pessoa.endereco.numero"
              value={funcionario.pessoa.endereco.numero || ''}
              onChange={handleChange}
              placeholder="Número"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="label">
              <span className="label-text">Complemento: *</span>
            </div>
            <input
              type="text"
              name="pessoa.endereco.complemento"
              value={funcionario.pessoa.endereco.complemento || ''}
              onChange={handleChange}
              placeholder="Complemento"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">CEP: *</span>
        </div>
        <input
          type="text"
          name="pessoa.endereco.cep"
          value={funcionario.pessoa.endereco.cep || ''}
          onChange={handleChange}
          placeholder="CEP"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Bairro: *</span>
        </div>
        <input
          type="text"
          name="pessoa.endereco.bairro"
          value={funcionario.pessoa.endereco.bairro || ''}
          onChange={handleChange}
          placeholder="Bairro"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full flex my-2">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-1/2">
            <div className="label">
              <span className="label-text">Cidade: *</span>
            </div>
            <input
              type="text"
              name="pessoa.endereco.cidade"
              value={funcionario.pessoa.endereco.cidade || ''}
              onChange={handleChange}
              placeholder="Cidade"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="label">
              <span className="label-text">Estado: *</span>
            </div>
            <input
              type="text"
              name="pessoa.endereco.estado"
              value={funcionario.pessoa.endereco.estado || ''}
              onChange={handleChange}
              placeholder="Estado"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">País: *</span>
        </div>
        <input
          type="text"
          name="pessoa.endereco.pais"
          value={funcionario.pessoa.endereco.pais || ''}
          onChange={handleChange}
          placeholder="País"
          className="input input-bordered w-full"
        />
      </label>
    </div>
  );
};

