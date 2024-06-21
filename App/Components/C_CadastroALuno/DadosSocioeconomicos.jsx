import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosSocioeconomicos = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      dadosSocioeconomicos: {
        ...prevAluno.dadosSocioeconomicos,
        [name]: value
      }
    }));
  };

  return (
    <div>
      <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
        Dados Socioeconômicos
      </p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Nº Total de Pessoas que residem no domicílio:</span>
        </div>
        <input
          type="text"
          name="numPessoasResidem"
          value={aluno.dadosSocioeconomicos.totalPessoasDomicilio}
          onChange={handleChange}
          placeholder="Número de pessoas"
          className="input input-bordered w-full"
        />
      </label>
      <p className="grid justify-items">Qual o(a) principal responsável pelo sustento da família:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelSustento"
            value="Eu mesmo(a)"
            checked={aluno.dadosSocioeconomicos.responsavelSustento === "Eu mesmo(a)"}
            onChange={handleChange}
            className="radio"
          />
          <span>Eu mesmo(a)</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelSustento"
            value="Cônjuge"
            checked={aluno.dadosSocioeconomicos.responsavelSustento === "Cônjuge"}
            onChange={handleChange}
            className="radio"
          />
          <span>Cônjuge</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelSustento"
            value="Filho(a)"
            checked={aluno.dadosSocioeconomicos.responsavelSustento === "Filho(a)"}
            onChange={handleChange}
            className="radio"
          />
          <span>Filho(a)</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelSustento"
            value="Parente"
            checked={aluno.dadosSocioeconomicos.responsavelSustento === "Parente"}
            onChange={handleChange}
            className="radio"
          />
          <span>Parente</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelSustento"
            value="Outros"
            checked={aluno.dadosSocioeconomicos.responsavelSustento === "Outros"}
            onChange={handleChange}
            className="radio"
          />
          <span>Outros</span>
        </label>
      </div>
    </div>
  );
};

export default DadosSocioeconomicos;
