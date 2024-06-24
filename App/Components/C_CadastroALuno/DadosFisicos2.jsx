import React, { useContext, useState } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosFisicos2 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);
  const [possuiProblema, setPossuiProblema] = useState(aluno.fichaMedica?.problemaDeSaude ? "Sim" : "Não");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      fichaMedica: {
        ...prevAluno.fichaMedica,
        [name]: value
      }
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setPossuiProblema(value);
    if (value === "Não") {
      setAluno((prevAluno) => ({
        ...prevAluno,
        fichaMedica: {
          ...prevAluno.fichaMedica,
          problemaDeSaude: ""
        }
      }));
    }
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">Dados Físicos do Aluno</p>
      <p className="grid justify-items">Possui Algum Problema de Saúde?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2 my-2">
          <input
            type="radio"
            name="possuiProblema"
            value="Sim"
            checked={possuiProblema === "Sim"}
            onChange={handleRadioChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="possuiProblema"
            value="Não"
            checked={possuiProblema === "Não"}
            onChange={handleRadioChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>
      {possuiProblema === "Sim" && (
        <label className="block text-sm font-medium text-gray-900 my-2">
          Caso sim, Especifique:
          <textarea
            name="problemaDeSaude"
            value={aluno.fichaMedica.problemaDeSaude || ""}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Especifique aqui..."
          ></textarea>
        </label>
      )}
    </div>
  );
};

export default DadosFisicos2;
