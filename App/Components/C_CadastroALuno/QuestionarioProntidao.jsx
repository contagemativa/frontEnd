import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const QuestionarioProntidao = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      questionarioProntidao: {
        ...prevAluno.questionarioProntidao,
        [name]: value === "true" // Convertendo o valor para booleano
      }
    }));
  };

  return (
    <div>
      <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
        Questionário de Prontidão para Atividades Físicas
      </p>
      <p className="grid justify-items">
        Algum médico já disse que você possui algum problema de coração e que
        só deveria realizar atividades físicas supervisionado por profissionais
        de saúde?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="problemaCardiaco"
            value="true"
            checked={aluno.questionarioProntidao.problemaCardiaco === true}
            onChange={handleChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="problemaCardiaco"
            value="false"
            checked={aluno.questionarioProntidao.problemaCardiaco === false}
            onChange={handleChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>

      <p className="grid justify-items">
        Você sente dores no peito quando pratica atividades físicas?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="doresPeitoAtividades"
            value="true"
            checked={aluno.questionarioProntidao.doresPeitoAtividades === true}
            onChange={handleChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="doresPeitoAtividades"
            value="false"
            checked={aluno.questionarioProntidao.doresPeitoAtividades === false}
            onChange={handleChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>

      <p className="grid justify-items">
        No último mês, você sentiu dores no peito quando praticou exercícios
        físicos?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="doresPeitoUltimoMes"
            value="true"
            checked={aluno.questionarioProntidao.doresPeitoUltimoMes === true}
            onChange={handleChange}
            className="radio"
          />
          <span>Sim</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="doresPeitoUltimoMes"
            value="false"
            checked={aluno.questionarioProntidao.doresPeitoUltimoMes === false}
            onChange={handleChange}
            className="radio"
          />
          <span>Não</span>
        </label>
      </div>
    </div>
  );
};

export default QuestionarioProntidao;
