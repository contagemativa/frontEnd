import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const QuestionarioProntidao2 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      questionarioProntidao: {
        ...prevAluno.questionarioProntidao,
        [name]: value === "true"
      }
    }));
  };

  return (
    <div>
      <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
        Questionário de Prontidão para Atividades Físicas
      </p>

      <p className="grid justify-items">
        Você apresenta desequilíbrio devido à tontura e/ou perda de consciência?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="desiquilibrioTontura"
            value="true"
            checked={aluno.questionarioProntidao.desiquilibrioTontura === true}
            onChange={handleChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="desiquilibrioTontura"
            value="false"
            checked={aluno.questionarioProntidao.desiquilibrioTontura === false}
            onChange={handleChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>

      <p className="grid justify-items">
        Você possui algum problema ósseo ou articular que poderia ser piorado pela atividade física?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="problemaOsseoArticular"
            value="true"
            checked={aluno.questionarioProntidao.problemaOsseoArticular === true}
            onChange={handleChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="problemaOsseoArticular"
            value="false"
            checked={aluno.questionarioProntidao.problemaOsseoArticular === false}
            onChange={handleChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>

      <p className="grid justify-items">
        Você toma atualmente algum medicamento para pressão arterial e/ou problema de coração?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="medicamentoPressao"
            value="true"
            checked={aluno.questionarioProntidao.medicamentoPressao === true}
            onChange={handleChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="medicamentoPressao"
            value="false"
            checked={aluno.questionarioProntidao.medicamentoPressao === false}
            onChange={handleChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>
    </div>
  );
};

export default QuestionarioProntidao2;
