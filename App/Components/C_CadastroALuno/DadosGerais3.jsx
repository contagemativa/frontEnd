import React, { useContext, useState } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosGerais3 = () => {
  const { aluno, setAluno } = useContext(AlunoContext);

  // Estado local para armazenar os valores dos campos de entrada
  const [formData, setFormData] = useState({
    rg: aluno.identidade.rg || '',
    orgaoExpedidor: aluno.identidade.orgaoExpedidor || '',
    dataEmissao: aluno.identidade.dataEmissao || '',
    cpf: aluno.pessoa.cpf || ''
  });

  // Função para lidar com a mudança nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(aluno)
    // Atualiza o estado local com os novos valores do campo de entrada
    setFormData({
      ...formData,
      [name]: value
    });
    // Atualiza o contexto AlunoContext com os novos dados
    setAluno((prevAluno) => ({
      ...prevAluno,
      identidade: {
        ...prevAluno.identidade,
        [name]: value
      },
      pessoa: {
        ...prevAluno.pessoa,
        cpf: formData.cpf // Apenas atualiza o CPF no contexto AlunoContext
      }
    }));
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">
        Dados Gerais do Aluno
      </p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">RG: *</span>
        </div>
        <input
          type="text"
          name="rg"
          value={formData.rg}
          onChange={handleChange}
          placeholder="RG do Aluno"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Orgão Expedidor: *</span>
        </div>
        <input
          type="text"
          name="orgaoExpedidor"
          value={formData.orgaoExpedidor}
          onChange={handleChange}
          placeholder="Orgão Expedidor"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Data de Emissão: *</span>
        </div>
        <input
          type="date"
          name="dataEmissao"
          value={formData.dataEmissao}
          onChange={handleChange}
          placeholder="Data de Emissão"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">CPF: *</span>
        </div>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="CPF Aluno"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
};

export default DadosGerais3;
