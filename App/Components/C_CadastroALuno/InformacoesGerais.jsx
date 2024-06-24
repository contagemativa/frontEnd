import React, { useContext, useEffect, useState } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";
import { fetchNucleos } from "../../Controllers/nucleoController";
import { recuperarUsuario } from "../../Models/Class/usuarioClass";

const InformacoesGerais = () => {
  const usuarioLogado = recuperarUsuario();
  const { aluno, setAluno } = useContext(AlunoContext);
  const [nucleos, setNucleos] = useState([]);
  const [selectedNucleoId, setSelectedNucleoId] = useState('');

  useEffect(() => {
    // Verifica se há um núcleo previamente selecionado no contexto
    if (aluno.nucleoDeOrigem.id) {
      setSelectedNucleoId(aluno.nucleoDeOrigem.id.toString()); // Converte para string se necessário
    }

    const getNucleos = async () => {
      try {
        const nucleosResponse = await fetchNucleos();
        setNucleos(nucleosResponse); 
      } catch (error) {
        console.error('Erro ao buscar núcleos:', error);
      }
    };

    getNucleos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'regional') {
      setSelectedNucleoId(value); // Atualiza o ID do núcleo selecionado
      setAluno((prevAluno) => ({
        ...prevAluno,
        nucleoDeOrigem: {
          ...prevAluno.nucleoDeOrigem,
          id: parseInt(value) // Atualiza o ID do núcleo no aluno
        }
      }));
    } else {
      setAluno((prevAluno) => ({
        ...prevAluno,
        [name]: value
      }));
    }
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-primary justify-items-left">
        Informaçaões Gerais
      </p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Núcleo: *</span>
        </div>
        <select
          name="regional"
          value={selectedNucleoId}
          onChange={handleChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled value="">Selecione um Núcleo</option>
          {nucleos.map((nucleo) => (
            <option key={nucleo.id} value={nucleo.id}>
              {nucleo.nome}
            </option>
          ))}
        </select>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Cadastrado Por: *</span>
        </div>
        <input
          type="text"
          name="cadastradoPor"
          value={usuarioLogado.nome}
          onChange={handleChange}
          placeholder="Nome do Professor"
          className="input input-bordered w-full max-w-xs"
          disabled
        />
      </label>
    </div>
  );
};

export default InformacoesGerais;
