import React, { useEffect, useState } from 'react';
import { postNucleo } from '../../Models/nucleoModel';
import { postEndereco } from '../../Models/enderecoModel';
import MainFrame from '../../Components/Layout/Main/Main';
import MediaQuery from 'react-responsive';
import Button from '../../Components/Common/Button/Button';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';
import { fetchRegionais } from '../../Controllers/regionalController';

export default function CadastroNucleo() {
  const [regionais, setRegionais] = useState([]);
  const [nucleo, setNucleo] = useState({
    id: 0,
    nome: '',
    endereco: {
      id: 0,
      cep: '',
      rua: '',
      numero: 0,
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: ''
    },
    regional: 0
  });

  useEffect(() => {
    const getRegionais = async () => {
      try {
        const regionaisResponse = await fetchRegionais();
        setRegionais(regionaisResponse); 
      } catch (error) {
        console.error('Erro ao buscar regionais:', error);
      }
    };

    getRegionais(); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNucleo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeEndereco = (e) => {
    const { name, value } = e.target;
    setNucleo((prev) => ({
      ...prev,
      endereco: {
        ...prev.endereco,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(nucleo)
      // Posta o endereço primeiro
      const enderecoResponse = await postEndereco(nucleo.endereco);
      if (enderecoResponse && enderecoResponse.id) {
        // Usa o ID do endereço retornado para postar o núcleo
        nucleo.endereco = enderecoResponse.id; // Atribui o ID do endereço ao objeto de núcleo
        const nucleoResponse = await postNucleo(nucleo);
        console.log('Núcleo cadastrado com sucesso:', nucleoResponse);
        // Lógica de redirecionamento ou mensagem de sucesso aqui
      } else {
        throw new Error('Erro ao cadastrar endereço');
      }
    } catch (error) {
      console.error('Erro ao cadastrar núcleo:', error);
      // Lógica para tratamento de erro
    }
  };

  return (
    <MainFrame>
      <MediaQuery maxWidth={599}>
        <div className="my-4">
          <h1 className="flex justify-center flex-wrap text-3xl font-bold text-slate-700">Cadastro de Núcleos</h1>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={600} maxWidth={1023}>
        <div className="flex justify-between items-center gap-1 my-2">
          <h1 className="text-3xl font-bold text-slate-700">Cadastro de Núcleos</h1>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1024}>
        <div className="gap-1 my-4">
          <h1 className="text-3xl font-bold text-slate-700">Cadastro de Núcleos</h1>
        </div>
      </MediaQuery>

        <div className='flex'>
            <div className="bg-primary bg-opacity-5 rounded-lg h-fit p-4 w-full">
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <div>
                                <span className="text-lg font-bold text-primary">Nome do Núcleo</span>
                                <input type="text" name="nome" value={nucleo.nome} onChange={handleChange} placeholder="Nome do Núcleo" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-primary">Regional</span>
                                <select name="regional" value={nucleo.regional} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Selecione uma regional</option>
                                        {regionais.map((regional) => (
                                            <option key={regional.id} value={regional.id}>
                                            {regional.nome}
                                    </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <fieldset className="border border-secondary border-opacity-20 p-4 rounded">
                            <legend className="font-semibold text-primary">Endereço</legend>

                            <div className='flex gap-2'>                             
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">CEP: *</span>
                                    </div>
                                    <input type="text" name="cep" value={nucleo.endereco.cep} onChange={handleChangeEndereco} placeholder="CEP" className="input input-bordered w-full" />
                                </label>
                                    <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Rua: *</span>
                                    </div>
                                    <input type="text" name="rua" value={nucleo.endereco.rua} onChange={handleChangeEndereco} placeholder="Rua" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className='flex gap-2'>                             
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Número: *</span>
                                    </div>
                                    <input type="number" name="numero" value={nucleo.endereco.numero} onChange={handleChangeEndereco} placeholder="Número" className="input input-bordered w-full" />
                                </label>

                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Complemento:</span>
                                    </div>
                                    <input type="text" name="complemento" value={nucleo.endereco.complemento} onChange={handleChangeEndereco} placeholder="Complemento" className="input input-bordered w-full" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Bairro: *</span>
                                    </div>
                                    <input type="text" name="bairro" value={nucleo.endereco.bairro} onChange={handleChangeEndereco} placeholder="Bairro" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className='flex gap-2'>                             
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Cidade: *</span>
                                    </div>
                                    <input type="text" name="cidade" value={nucleo.endereco.cidade} onChange={handleChangeEndereco} placeholder="Cidade" className="input input-bordered w-full" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Estado: *</span>
                                    </div>
                                    <input type="text" name="estado" value={nucleo.endereco.estado} onChange={handleChangeEndereco} placeholder="Estado" className="input input-bordered w-full" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">País: *</span>
                                    </div>
                                    <input type="text" name="pais" value={nucleo.endereco.pais} onChange={handleChangeEndereco} placeholder="País" className="input input-bordered w-full" />
                                </label>
                            </div>
                        
                        </fieldset>
                        
                        <MediaQuery minWidth={600}>
                            <div className='flex justify-end'>
                                <Button type="submit" className="btn btn-primary text-white" buttonText="Cadastrar" iconLeft={<FaPlus />} />
                            </div>
                        </MediaQuery>

                        <MediaQuery maxWidth={599}>
                            <div className='flex justify-center w-full'>
                                <Button type="submit" className="btn btn-primary text-white w-full" buttonText="Cadastrar" iconLeft={<FaPlus />} />
                            </div>
                        </MediaQuery>
                    
                    </div>
                </form>
            </div>
        </div>

    </MainFrame> 
  );
};

const BoxCadastro = ({ handleChange, handleChangeEndereco, handleSubmit, nucleo }) => (
    <div className="bg-primary bg-opacity-5 rounded-lg h-fit p-4">
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit}>
          <div className='flex items-end gap-4'>
            <div className='flex flex-col gap-2'>
              <span className="text-lg font-bold text-primary">Nome do Núcleo</span>
              <input
                type="text"
                name="nome"
                value={nucleo.nome}
                onChange={handleChange}
                placeholder="Nome do Núcleo"
                className="input input-bordered w-full max-w-xs"
              />
              <span className="text-lg font-bold text-primary">ID da Regional</span>
              <input
                type="number"
                name="regional"
                value={nucleo.regional}
                onChange={handleChange}
                placeholder="ID da Regional"
                className="input input-bordered w-full max-w-xs"
              />
              <fieldset className="border p-4 rounded">
                <legend className="font-semibold">Endereço</legend>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">CEP: *</span>
                  </div>
                  <input
                    type="text"
                    name="cep"
                    value={nucleo.endereco.cep}
                    onChange={handleChangeEndereco}
                    placeholder="CEP"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Rua: *</span>
                  </div>
                  <input
                    type="text"
                    name="rua"
                    value={nucleo.endereco.rua}
                    onChange={handleChangeEndereco}
                    placeholder="Rua"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Número: *</span>
                  </div>
                  <input
                    type="number"
                    name="numero"
                    value={nucleo.endereco.numero}
                    onChange={handleChangeEndereco}
                    placeholder="Número"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Complemento:</span>
                  </div>
                  <input
                    type="text"
                    name="complemento"
                    value={nucleo.endereco.complemento}
                    onChange={handleChangeEndereco}
                    placeholder="Complemento"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Bairro: *</span>
                  </div>
                  <input
                    type="text"
                    name="bairro"
                    value={nucleo.endereco.bairro}
                    onChange={handleChangeEndereco}
                    placeholder="Bairro"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Cidade: *</span>
                  </div>
                  <input
                    type="text"
                    name="cidade"
                    value={nucleo.endereco.cidade}
                    onChange={handleChangeEndereco}
                    placeholder="Cidade"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Estado: *</span>
                  </div>
                  <input
                    type="text"
                    name="estado"
                    value={nucleo.endereco.estado}
                    onChange={handleChangeEndereco}
                    placeholder="Estado"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">País: *</span>
                  </div>
                  <input
                    type="text"
                    name="pais"
                    value={nucleo.endereco.pais}
                    onChange={handleChangeEndereco}
                    placeholder="País"
                    className="input input-bordered w-full"
                  />
                </label>
              </fieldset>
            </div>
            <div>
              <Button type="submit" className="btn btn-primary" buttonText="Cadastrar" leftIcon={<FaPlus />}></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );


