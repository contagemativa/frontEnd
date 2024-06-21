import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosFisicos1 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      fichaMedica: {
        ...prevAluno.fichaMedica,
        deficiencia: value
      }
    }));
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-pink-500 justify-items-left">Dados Físicos do Aluno</p>

      <p className="grid justify-items-left my-2">Possui Alguma Deficiência?
        <p className="text-sm text-gray-400 italic">Caso não, marque 'Não Possui'</p>
      </p>

      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="deficiencia" value="Deficiência Auditiva" checked={aluno.fichaMedica.deficiencia === "Deficiência Auditiva"} onChange={handleChange} className="radio" />
          <span>Deficiência Auditiva</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="deficiencia" value="Deficiência Intelectual/Cognitiva" checked={aluno.fichaMedica.deficiencia === "Deficiência Intelectual/Cognitiva"} onChange={handleChange} className="radio" />
          <span>Deficiência Intelectual/Cognitiva</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="deficiencia" value="Deficiência Motora" checked={aluno.fichaMedica.deficiencia === "Deficiência Motora"} onChange={handleChange} className="radio" />
          <span>Deficiência Motora</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="deficiencia" value="Deficiência Visual" checked={aluno.fichaMedica.deficiencia === "Deficiência Visual"} onChange={handleChange} className="radio" />
          <span>Deficiência Visual</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="deficiencia" value="Deficiência Mental" checked={aluno.fichaMedica.deficiencia === "Deficiência Mental"} onChange={handleChange} className="radio" />
          <span>Deficiência Mental</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="deficiencia" value="Não possui" checked={aluno.fichaMedica.deficiencia === "Não possui"} onChange={handleChange} className="radio" />
          <span>Não possui</span>
        </label>
      </div>
    </div>
  );
};

export default DadosFisicos1;
