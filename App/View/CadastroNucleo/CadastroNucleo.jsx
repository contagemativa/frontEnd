import React, { useContext, useEffect, useState } from 'react';
import MainFrame from '../../Components/Layout/Main/Main';
import MediaQuery from 'react-responsive';
import Button from '../../Components/Common/Button/Button';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';
import { fetchRegionais } from '../../Controllers/regionalController';
import { NucleoContext, NucleoProvider } from '../../Models/Class/nucleoClass';
import { createNucleo } from '../../Controllers/nucleoController';

export default function CadastroNucleo() {
  const [regionais, setRegionais] = useState([]);
  const {nucleo} = useContext(NucleoContext);

  useEffect(() => {
    document.title = `${config.documentTitle} | Cadastro Núcleo`;
  }, []);

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
    await createNucleo(nucleo.endereco);
  };

  return (
    <MainFrame>
      <NucleoProvider>
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
                        <MediaQuery maxWidth={599}>
                          <div className='flex flex-col gap-2'>
                              <div>
                                  <span className="text-lg font-bold text-primary">Nome do Núcleo</span>
                                  <input type="text" name="nome" value={nucleo.nome} onChange={handleChange} placeholder="Nome do Núcleo" className="input input-bordered w-full" />
                              </div>
                              <div>
                                  <span className="text-lg font-bold text-primary">Regional</span>
                                  <select name="regional" value={nucleo.regional} onChange={handleChange} className="select select-bordered w-full">
                                      <option disabled selected>Selecione uma regional</option>
                                          {regionais.map((regional) => (
                                              <option key={regional.id} value={regional.id}>
                                              {regional.nome}
                                      </option>
                                      ))}
                                  </select>
                              </div>
                          </div>
                        </MediaQuery>

                        <MediaQuery minWidth={600} >
                          <div className='flex gap-2'>
                              <div>
                                  <span className="text-lg font-bold text-primary">Nome do Núcleo</span>
                                  <input type="text" name="nome" value={nucleo.nome} onChange={handleChange} placeholder="Nome do Núcleo" className="input input-bordered w-full" />
                              </div>
                              <div>
                                  <span className="text-lg font-bold text-primary">Regional</span>
                                  <select name="regional" value={nucleo.regional} onChange={handleChange} className="select select-bordered w-full">
                                      <option disabled selected>Selecione uma regional</option>
                                          {regionais.map((regional) => (
                                              <option key={regional.id} value={regional.id}>
                                              {regional.nome}
                                      </option>
                                      ))}
                                  </select>
                              </div>
                          </div>
                        </MediaQuery>
                        
                        <MediaQuery maxWidth={599}>
                          <fieldset className="border border-secondary border-opacity-20 p-4 rounded">
                              <legend className="font-bold text-primary">Endereço</legend>

                              <div className='gap-2'>                             
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

                              <div className='gap-2'>                             
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


                              </div>

                              <div className='gap-2'>                             
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
                        </MediaQuery>

                        <MediaQuery minWidth={600}>
                          <fieldset className="border border-secondary border-opacity-20 p-4 rounded">
                              <legend className="font-bold text-primary">Endereço</legend>

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
                            
                              <MediaQuery minWidth={600} maxWidth={899}>
                                <div className='flex gap-2'>                             
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Número: *</span>
                                        </div>
                                        <input type="number" name="numero" value={nucleo.endereco.numero} onChange={handleChangeEndereco} placeholder="Número" className="input input-bordered w-full" />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Complemento:</span>
                                        </div>
                                        <input type="text" name="complemento" value={nucleo.endereco.complemento} onChange={handleChangeEndereco} placeholder="Complemento" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className='flex gap-2'>                                         
                                  <label className="form-control w-full">
                                      <div className="label">
                                          <span className="label-text">Bairro: *</span>
                                      </div>
                                      <input type="text" name="bairro" value={nucleo.endereco.bairro} onChange={handleChangeEndereco} placeholder="Bairro" className="input input-bordered w-full" />
                                  </label>
                                  <label className="form-control w-full">
                                      <div className="label">
                                          <span className="label-text">Cidade: *</span>
                                      </div>
                                      <input type="text" name="cidade" value={nucleo.endereco.cidade} onChange={handleChangeEndereco} placeholder="Cidade" className="input input-bordered w-full" />
                                  </label>
                                </div>
                                
                                <div className='flex gap-2'>                             
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
                              </MediaQuery>

                              <MediaQuery minWidth={900}>
                                <div className='flex gap-2'>                             
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Número: *</span>
                                        </div>
                                        <input type="number" name="numero" value={nucleo.endereco.numero} onChange={handleChangeEndereco} placeholder="Número" className="input input-bordered" />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Complemento:</span>
                                        </div>
                                        <input type="text" name="complemento" value={nucleo.endereco.complemento} onChange={handleChangeEndereco} placeholder="Complemento" className="input input-bordered" />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Bairro: *</span>
                                        </div>
                                        <input type="text" name="bairro" value={nucleo.endereco.bairro} onChange={handleChangeEndereco} placeholder="Bairro" className="input input-bordered" />
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
                              </MediaQuery>
                          </fieldset>
                        </MediaQuery>
                                              
                        <MediaQuery minWidth={600}>
                            <div className='flex justify-end'>
                                <Button type="submit" className="btn btn-primary text-white" buttonText="Cadastrar" iconLeft={<FaPlus />} />
                            </div>
                        </MediaQuery>

                        <MediaQuery maxWidth={599}>
                            <div className='flex justify-center w-full'>
                                <Button type="submit" className="btn btn-primary text-white w-full" buttonText="Cadastrar" iconLeft={<FaPlus />} onClick={handleSubmit}/>
                            </div>
                        </MediaQuery>                   
                    </div>
                </form>
            </div>
        </div>
      </NucleoProvider>
    </MainFrame> 
  );
};

