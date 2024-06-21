import React, { useContext, useState, useEffect } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosGerais = () => {
  const { aluno, setAluno } = useContext(AlunoContext);
  const [idade, setIdade] = useState(0);

  useEffect(() => {
    calcularIdade();
  }, [aluno.pessoa.dataDeNascimento]);

  const calcularIdade = () => {
    const dataNascimento = new Date(aluno.pessoa.dataDeNascimento);
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    if (isValidDate(dataNascimento)) {
      const diffAnos = anoAtual - dataNascimento.getFullYear();
      const diffMeses = dataAtual.getMonth() - dataNascimento.getMonth();
      if (diffMeses < 0 || (diffMeses === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
        setIdade(diffAnos - 1);
      } else {
        setIdade(diffAnos);
      }
    } else {
      setIdade(0); // Caso a data de nascimento seja inválida
    }
  };

  const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    setAluno((prevAluno) => {
      let updatedAluno = { ...prevAluno };
      let currentLevel = updatedAluno;
      for (let i = 0; i < keys.length - 1; i++) {
        currentLevel = currentLevel[keys[i]];
      }
      currentLevel[keys[keys.length - 1]] = value;

      if (name === 'pessoa.dataDeNascimento') {
        calcularIdade(); // Recalcula a idade quando a data de nascimento muda
      }

      return updatedAluno;
    });
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-pink-500 justify-items-left">
        Dados Gerais do Aluno
      </p>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Nome do Aluno: *</span>
        </div>
        <input 
          type="text" 
          name="pessoa.nome" 
          value={aluno.pessoa.nome} 
          onChange={handleChange} 
          placeholder="Nome do Aluno" 
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full my-2">
        <div className="flex items-center gap-4">
          <span className="label-text">Sexo: *</span>
          <div className="flex items-center gap-4">
            <label className="flex items-center cursor-pointer gap-1">
              <input 
                type="radio" 
                name="pessoa.sexo" 
                value="M" 
                checked={aluno.pessoa.sexo === "M"} 
                onChange={handleChange} 
                className="radio" 
              />
              <span>Masculino</span>
            </label>
            <label className="flex items-center cursor-pointer gap-1">
              <input 
                type="radio" 
                name="pessoa.sexo" 
                value="F" 
                checked={aluno.pessoa.sexo === "F"} 
                onChange={handleChange} 
                className="radio" 
              />
              <span>Feminino</span>
            </label>
          </div>
        </div>
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Data de Nascimento: *</span>
        </div>
        <input 
          type="date" 
          name="pessoa.dataDeNascimento" 
          value={aluno.pessoa.dataDeNascimento} 
          onChange={handleChange} 
          placeholder="Data Nascimento" 
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Idade: *</span>
        </div>
        <input 
          type="number" 
          name="pessoa.idade" 
          value={idade} 
          onChange={handleChange} 
          placeholder="Idade Aluno" 
          className="input input-bordered w-full max-w-xs"
          disabled
        />
      </label>
    </div>
  );
};

export default DadosGerais;
