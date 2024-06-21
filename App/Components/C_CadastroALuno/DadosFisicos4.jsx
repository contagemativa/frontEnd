import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosFisicos4 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      tamanhoCamisa: value
    }));
  };

  return (
    <div>
      <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
        Dados Físicos do Aluno
      </p>

      <p className="grid justify-items">Tamanho da Camisa Adulto:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tamanhoCamisa"
            value="PP"
            checked={aluno.tamanhoCamisa === "PP"}
            onChange={handleChange}
            className="radio"
          />
          <span>PP</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tamanhoCamisa"
            value="P"
            checked={aluno.tamanhoCamisa === "P"}
            onChange={handleChange}
            className="radio"
          />
          <span>P</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tamanhoCamisa"
            value="M"
            checked={aluno.tamanhoCamisa === "M"}
            onChange={handleChange}
            className="radio"
          />
          <span>M</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tamanhoCamisa"
            value="G"
            checked={aluno.tamanhoCamisa === "G"}
            onChange={handleChange}
            className="radio"
          />
          <span>G</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tamanhoCamisa"
            value="GG"
            checked={aluno.tamanhoCamisa === "GG"}
            onChange={handleChange}
            className="radio"
          />
          <span>GG</span>
        </label>
      </div>
    </div>
  );
};

export default DadosFisicos4;
