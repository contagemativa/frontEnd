import React, { useContext, useEffect, useState } from "react";
import { AlunoContext } from "../../../Class/alunoClass";
import { fetchNucleos } from "../../../Controllers/nucleoController";
import { recuperarUsuario } from "../../../Class/usuarioClass";
import { fetchRegionais } from "../../../Controllers/regionalController";

const InformacoesGerais = () => {
  const usuarioLogado = recuperarUsuario();
  const {aluno, setAluno} = useContext(AlunoContext);
  const [nucleos, setNucleos] = useState([]);
  const [regionais, setRegionais] = useState([]);
  const [selectedNucleoId, setSelectedNucleoId] = useState('');

  useEffect(() => {
    if (aluno.nucleoDeOrigem.id) {
      setSelectedNucleoId(aluno.nucleoDeOrigem.id.toString()); 
    }
    
    const getRegional = async () => {
      const regionaisResponse = await fetchRegionais();
      setRegionais(regionaisResponse);
    };

    const getNucleos = async () => {
      const nucleosResponse = await fetchNucleos();
      setNucleos(nucleosResponse); 
    };

    getRegional();
    getNucleos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'regional') {
      setSelectedNucleoId(value); 
      setAluno((prevAluno) => ({
        ...prevAluno,
        nucleoDeOrigem: {
          ...prevAluno.nucleoDeOrigem,
          id: parseInt(value)
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
          <span className="label-text">Regional: *</span>
        </div>
        <select
          name="regional"
          value={selectedNucleoId}
          onChange={handleChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled value="">Selecione uma Regional</option>
          {regionais.map((regional) => (
            <option key={regional.id} value={regional.id}>
              {regional.nome}
            </option>
          ))}
        </select>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Núcleo: *</span>
        </div>
        <select
          name="nucleo"
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
