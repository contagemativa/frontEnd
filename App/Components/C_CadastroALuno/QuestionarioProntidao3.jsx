import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const QuestionarioProntidao3 = () => {
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
        Questionário de Prontidão para atividades físicas
      </p>
      <p className="grid justify-items">Sabe de alguma outra razão pela qual você não deve praticar atividade física?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="outraRazaoNaoPraticarAtividadeFisica"
            value="true"
            checked={aluno.questionarioProntidao.outraRazaoNaoPraticarAtividadeFisica === true}
            onChange={handleChange}
            className="radio"
          />
          <span className="label-text">Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="outraRazaoNaoPraticarAtividadeFisica"
            value="false"
            checked={aluno.questionarioProntidao.outraRazaoNaoPraticarAtividadeFisica === false}
            onChange={handleChange}
            className="radio"
          />
          <span className="label-text">Não</span>
        </label>
      </div>

      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Finalizar Cadastro
      </button>
    </div>
  );
};

export default QuestionarioProntidao3;
