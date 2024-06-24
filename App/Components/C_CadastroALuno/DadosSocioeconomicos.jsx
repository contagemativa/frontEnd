import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosSocioeconomicos = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prevAluno) => ({
      ...prevAluno,
      condicoesSociais: {
        ...prevAluno.condicoesSociais,
        [name]: value
      }
    }));
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">Dados Socioeconômicos do Aluno</p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Nº Total de Pessoas que residem no domicílio:</span>
        </div>
        <input
          type="text"
          name="pessoasNoDomicilio"
          value={aluno.condicoesSociais.pessoasNoDomicilio}
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
            name="responsavelPeloSustento"
            value="Eu mesmo(a)"
            checked={aluno.condicoesSociais.responsavelPeloSustento === "Eu mesmo(a)"}
            onChange={handleChange}
            className="radio"
          />
          <span>Eu mesmo(a)</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelPeloSustento"
            value="Cônjuge"
            checked={aluno.condicoesSociais.responsavelPeloSustento === "Cônjuge"}
            onChange={handleChange}
            className="radio"
          />
          <span>Cônjuge</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelPeloSustento"
            value="Filho(a)"
            checked={aluno.condicoesSociais.responsavelPeloSustento === "Filho(a)"}
            onChange={handleChange}
            className="radio"
          />
          <span>Filho(a)</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelPeloSustento"
            value="Parente"
            checked={aluno.condicoesSociais.responsavelPeloSustento === "Parente"}
            onChange={handleChange}
            className="radio"
          />
          <span>Parente</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="responsavelPeloSustento"
            value="Outros"
            checked={aluno.condicoesSociais.responsavelPeloSustento === "Outros"}
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
