import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const QuestionarioProntidao3 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prevAluno) => ({
      ...prevAluno,
      questionarioProntidao: {
        ...prevAluno.questionarioProntidao,
        [name]: value === "true"
      }
    }));
    console.log(aluno);
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-pink-500 justify-items-left">Questionário de Prontidão para Atividades Físicas</p>
      <p className="grid justify-items">
        Sabe de alguma outra razão pela qual você não deve praticar atividade física?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="quest7"
            value="true"
            checked={aluno.questionarioProntidao.quest7 === true}
            onChange={handleChange}
            className="radio"
          />
          <span className="label-text">Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="quest7"
            value="false"
            checked={aluno.questionarioProntidao.quest7 === false}
            onChange={handleChange}
            className="radio"
          />
          <span className="label-text">Não</span>
        </label>
      </div>
    </div>
  );
};

export default QuestionarioProntidao3;
