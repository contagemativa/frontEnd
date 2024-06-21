import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosSocioeconomicos2 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prevAluno) => ({
      ...prevAluno,
      condicoesSociais: {
        ...prevAluno.condicoesSociais,
        [name]: value
      }
    }));

    console.log(aluno);
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-pink-500 justify-items-left">Dados Socioeconômicos do Aluno</p>
      <p className="grid justify-items">Selecione a Renda Familiar:</p>
      <div className="flex flex-col gap-6 my-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="rendaFamiliar"
            value="1 - Sem Renda"
            checked={aluno.condicoesSociais.rendaFamiliar === "1 - Sem Renda"}
            onChange={handleChange}
            className="radio"
          />
          <span>1 - Sem Renda</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="rendaFamiliar"
            value="2 - até R$1000,00"
            checked={aluno.condicoesSociais.rendaFamiliar === "2 - até R$1000,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>2 - até R$1000,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="rendaFamiliar"
            value="3 - De R$1001,00 até R$1500,00"
            checked={aluno.condicoesSociais.rendaFamiliar === "3 - De R$1001,00 até R$1500,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>3 - De R$1001,00 até R$1500,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="rendaFamiliar"
            value="4 - De R$1501,00 até R$2000,00"
            checked={aluno.condicoesSociais.rendaFamiliar === "4 - De R$1501,00 até R$2000,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>4 - De R$1501,00 até R$2000,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="rendaFamiliar"
            value="5 - R$2001,00 até R$2500,00"
            checked={aluno.condicoesSociais.rendaFamiliar === "5 - R$2001,00 até R$2500,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>5 - R$2001,00 até R$2500,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="rendaFamiliar"
            value="6 - R$2501,00 até R$3000,00"
            checked={aluno.condicoesSociais.rendaFamiliar === "6 - R$2501,00 até R$3000,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>6 - R$2501,00 até R$3000,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="rendaFamiliar"
            value="7 - Acima de R$3001,00"
            checked={aluno.condicoesSociais.rendaFamiliar === "7 - Acima de R$3001,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>7 - Acima de R$3001,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="rendaFamiliar"
            value="8 - Não quero Declarar"
            checked={aluno.condicoesSociais.rendaFamiliar === "8 - Não quero Declarar"}
            onChange={handleChange}
            className="radio"
          />
          <span>8 - Não quero Declarar</span>
        </label>
      </div>
    </div>
  );
};

export default DadosSocioeconomicos2;
