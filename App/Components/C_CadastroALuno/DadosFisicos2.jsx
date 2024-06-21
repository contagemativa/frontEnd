import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosFisicos2 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      fichaMedica: {
        ...prevAluno.fichaMedica,
        problemaDeSaude: {
          ...prevAluno.fichaMedica.problemaDeSaude,
          [name]: value
        }
      }
    }));
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-pink-500 justify-items-left">Dados Físicos do Aluno</p>
      <p className="grid justify-items">Possui Algum Problema de Saúde?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2 my-2">
          <input
            type="radio"
            name="possuiProblema"
            value="Sim"
            checked={aluno.fichaMedica.problemaDeSaude?.possuiProblema === "Sim"}
            onChange={handleChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="possuiProblema"
            value="Não"
            checked={aluno.fichaMedica.problemaDeSaude?.possuiProblema === "Não"}
            onChange={handleChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>
      {aluno.fichaMedica.problemaDeSaude?.possuiProblema === "Sim" && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Caso sim, Especifique:
          <textarea
            name="especificacao"
            value={aluno.fichaMedica.problemaDeSaude?.especificacao || ""}
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
