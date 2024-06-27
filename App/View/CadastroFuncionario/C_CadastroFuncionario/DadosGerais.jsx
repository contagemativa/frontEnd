import React, { useContext } from "react";
import { FuncionarioContext } from "../../../Models/Class/funcionarioClass";

const DadosGerais = () => {
  const { funcionario, setFuncionario } = useContext(FuncionarioContext);

  const handleChangeNome = (e) => {
    const value = e.target.value;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      pessoa: {
        ...prevFuncionario.pessoa,
        nome: value
      }
    }));
  };

  const handleChangeNaturalidade = (e) => {
    const value = e.target.value;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      pessoa: {
        ...prevFuncionario.pessoa,
        naturalidade: value
      }
    }));
  };

  const handleChangeSexo = (e) => {
    const value = e.target.value;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      pessoa: {
        ...prevFuncionario.pessoa,
        sexo: value
      }
    }));
  };

  const handleChangeDataNascimento = (e) => {
    const value = e.target.value;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      pessoa: {
        ...prevFuncionario.pessoa,
        dataDeNascimento: value
      }
    }));
  };

  const handleChangeCPF = (e) => {
    const value = e.target.value;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      pessoa: {
        ...prevFuncionario.pessoa,
        cpf: value
      }
    }));
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      pessoa: {
        ...prevFuncionario.pessoa,
        corRaca: value
      }
    }));
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">
        Dados Gerais do Funcionário
      </p>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Nome do Funcionário: *</span>
        </div>
        <input
          type="text"
          name="pessoa.nome"
          value={funcionario.pessoa.nome}
          onChange={handleChangeNome}
          placeholder="Nome do Funcionário"
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
                checked={funcionario.pessoa.sexo === "M"}
                onChange={handleChangeSexo}
                className="radio"
              />
              <span>Masculino</span>
            </label>
            <label className="flex items-center cursor-pointer gap-1">
              <input
                type="radio"
                name="pessoa.sexo"
                value="F"
                checked={funcionario.pessoa.sexo === "F"}
                onChange={handleChangeSexo}
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
          value={funcionario.pessoa.dataDeNascimento}
          onChange={handleChangeDataNascimento}
          placeholder="Data de Nascimento"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">CPF: *</span>
        </div>
        <input
          type="text"
          name="pessoa.cpf"
          value={funcionario.pessoa.cpf}
          onChange={handleChangeCPF}
          placeholder="CPF"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">Naturalidade: *</span>
        </div>
        <input
          type="text"
          name="pessoa.naturalidade"
          value={funcionario.pessoa.naturalidade}
          onChange={handleChangeNaturalidade}
          placeholder="Naturalidade"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full my-2">
        <div className="label">
          <span className="label-text">AutoDeclaração Cor/Raça: *</span>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="pessoa.corRaca"
              value="Branca"
              checked={funcionario.pessoa.corRaca === "Branca"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Branca</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="pessoa.corRaca"
              value="Preta"
              checked={funcionario.pessoa.corRaca === "Preta"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Preta</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="pessoa.corRaca"
              value="Amarela"
              checked={funcionario.pessoa.corRaca === "Amarela"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Amarela</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="pessoa.corRaca"
              value="Parda"
              checked={funcionario.pessoa.corRaca === "Parda"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Parda</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="pessoa.corRaca"
              value="Indigena"
              checked={funcionario.pessoa.corRaca === "Indigena"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Indígena</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="pessoa.corRaca"
              value="Não Declarar"
              checked={funcionario.pessoa.corRaca === "Não Declarar"}
              onChange={handleRadioChange}
              className="radio"
            />
            <span>Não Declarar</span>
          </label>
        </div>
      </label>
    </div>
  );
};

export default DadosGerais;
