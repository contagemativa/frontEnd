import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosFisicos3 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      medicamentos: {
        ...prevAluno.medicamentos,
        [name]: value
      }
    }));
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">Dados Físicos do Aluno</p>
      <p className="grid justify-items">Toma Algum tipo de Medicamento?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2 my-2">
          <input
            type="radio"
            name="tomaMedicamento"
            value="Sim"
            checked={aluno.medicamentos?.tomaMedicamento === "Sim"}
            onChange={handleChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tomaMedicamento"
            value="Não"
            checked={aluno.medicamentos?.tomaMedicamento === "Não"}
            onChange={handleChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>
      {aluno.medicamentos?.tomaMedicamento === "Sim" && (
        <label className="block text-sm font-medium text-gray-900 my-2">
          Caso sim, Especifique:
          <textarea
            name="especificacaoMedicamentos"
            value={aluno.medicamentos?.especificacaoMedicamentos || ""}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Especifique aqui..."
          ></textarea>
        </label>
      )}
    </div>
  );
};

export default DadosFisicos3;
