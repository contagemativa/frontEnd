import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const QuestionarioProntidao = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prevAluno) => ({
      ...prevAluno,
      questionarioProntidao: {
        ...prevAluno.questionarioProntidao,
        [name]: value === "true" // Convertendo o valor para booleano
      }
    }));
    console.log(aluno);
  };

  const perguntas = [
    {
      texto: "Você apresenta desequilíbrio devido à tontura e/ou perda de consciência?",
      name: "quest4"
    },
    {
      texto: "Você possui algum problema ósseo ou articular que poderia ser piorado pela atividade física?",
      name: "quest5"
    },
    {
      texto: "Você toma atualmente algum medicamento para pressão arterial e/ou problema de coração?",
      name: "quest6"
    }
  ];

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">Questionário de Prontidão para Atividades Físicas</p>
      {perguntas.map((pergunta) => (
        <div key={pergunta.name}>
          <p className="grid justify-items">{pergunta.texto}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name={pergunta.name}
                value="true"
                checked={aluno.questionarioProntidao[pergunta.name] === true}
                onChange={handleChange}
                className="radio"
              />
              <span>Sim</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name={pergunta.name}
                value="false"
                checked={aluno.questionarioProntidao[pergunta.name] === false}
                onChange={handleChange}
                className="radio"
              />
              <span>Não</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionarioProntidao;
