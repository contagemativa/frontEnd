import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosSocioeconomicos2 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(aluno);
    setAluno((prevAluno) => ({
      ...prevAluno,
      dadosSocioeconomicos: {
        ...prevAluno.dadosSocioeconomicos,
        [name]: value
      }
    }));
  };

  return (
    <div>
      <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
        Dados Socioeconômicos
      </p>
      <p className="grid  justify-items">Qual o(a) principal responsável pelo sustento da família:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="principalResponsavelSustento"
            value="1 - Sem Renda"
            checked={aluno.dadosSocioeconomicos.principalResponsavelSustento === "1 - Sem Renda"}
            onChange={handleChange}
            className="radio"
          />
          <span>1 - Sem Renda</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="principalResponsavelSustento"
            value="2 - até R$1000,00"
            checked={aluno.dadosSocioeconomicos.principalResponsavelSustento === "2 - até R$1000,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>2 - até R$1000,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="principalResponsavelSustento"
            value="3 - De R$1001,00 até R$1500,00"
            checked={aluno.dadosSocioeconomicos.principalResponsavelSustento === "3 - De R$1001,00 até R$1500,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>3 - De R$1001,00 até R$1500,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="principalResponsavelSustento"
            value="4 - De R$1501,00 até R$2000,00"
            checked={aluno.dadosSocioeconomicos.principalResponsavelSustento === "4 - De R$1501,00 até R$2000,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>4 - De R$1501,00 até R$2000,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="principalResponsavelSustento"
            value="5 - R$2001,00 até R$2500,00"
            checked={aluno.dadosSocioeconomicos.principalResponsavelSustento === "5 - R$2001,00 até R$2500,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>5 - R$2001,00 até R$2500,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="principalResponsavelSustento"
            value="6 - R$2501,00 até R$3000,00"
            checked={aluno.dadosSocioeconomicos.principalResponsavelSustento === "6 - R$2501,00 até R$3000,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>6 - R$2501,00 até R$3000,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="principalResponsavelSustento"
            value="7 - Acima de R$3001,00"
            checked={aluno.dadosSocioeconomicos.principalResponsavelSustento === "7 - Acima de R$3001,00"}
            onChange={handleChange}
            className="radio"
          />
          <span>7 - Acima de R$3001,00</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="principalResponsavelSustento"
            value="8 - Não quero Declarar"
            checked={aluno.dadosSocioeconomicos.principalResponsavelSustento === "8 - Não quero Declarar"}
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
