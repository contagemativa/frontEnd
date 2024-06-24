import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosGerais4 = () => {
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
      <label className="form-control my-2">
        <div className="label">
          <span className="label-text">Rua: *</span>
        </div>
        <input
          type="text"
          name="pessoa.endereco.rua"
          value={aluno.pessoa.endereco.rua || ''}
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
              value={aluno.pessoa.endereco.numero || ''}
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
              value={aluno.pessoa.endereco.complemento || ''}
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
          value={aluno.pessoa.endereco.cep || ''}
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
          value={aluno.pessoa.endereco.bairro || ''}
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
              value={aluno.pessoa.endereco.cidade || ''}
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
              value={aluno.pessoa.endereco.estado || ''}
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
          value={aluno.pessoa.endereco.pais || ''}
          onChange={handleChange}
          placeholder="País"
          className="input input-bordered w-full"
        />
      </label>
    </div>
  );
};

export default DadosGerais4;
