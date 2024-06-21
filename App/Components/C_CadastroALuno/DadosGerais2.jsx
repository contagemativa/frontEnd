import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosGerais2 = () => {
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

  const handleRadioChange = (e) => {
    setAluno((prevAluno) => ({
      ...prevAluno,
      pessoa: {
        ...prevAluno.pessoa,
        corRaca: e.target.value
      }
    }));
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-pink-500 justify-items-left">
        Dados Gerais do Aluno
      </p>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">AutoDeclaração Cor/Raça: *</span>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="corRaca"
              value="Branca"
              checked={aluno.pessoa.corRaca === "Branca"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Branca</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="corRaca"
              value="Preta"
              checked={aluno.pessoa.corRaca === "Preta"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Preta</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="corRaca"
              value="Amarela"
              checked={aluno.pessoa.corRaca === "Amarela"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Amarela</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="corRaca"
              value="Parda"
              checked={aluno.pessoa.corRaca === "Parda"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Parda</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="corRaca"
              value="Indigena"
              checked={aluno.pessoa.corRaca === "Indigena"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Indigena</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="corRaca"
              value="Não Declarar"
              checked={aluno.pessoa.corRaca === "Não Declarar"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Não Declarar</span>
          </label>
        </div>
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Naturalidade: *</span>
        </div>
        <input
          type="text"
          name="pessoa.naturalidade"
          value={aluno.pessoa.naturalidade}
          onChange={handleChange}
          placeholder="Naturalidade Aluno"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
};

export default DadosGerais2;
