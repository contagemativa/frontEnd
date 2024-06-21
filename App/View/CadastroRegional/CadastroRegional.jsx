import React, { useState } from 'react';
import { createRegional } from '../../Controllers/regionalController';
import MainFrame from '../../Components/Layout/Main/Main';
import Button from '../../Components/Common/Button/Button';
import MediaQuery from 'react-responsive';
import { FaPlus } from 'react-icons/fa';
import { Media } from 'react-data-table-component';

export default function CadastroRegional() {
  const [regional, setRegional] = useState({
    id: 0,
    nome: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegional((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createRegional(regional);
    } catch (error) {
      console.error('Erro ao cadastrar regional:', error);
    }
  };

  
    function BoxCadastro(){
        return (
            <>
                <MediaQuery maxWidth={599}>
                    <div className="bg-primary bg-opacity-5 rounded-lg h-fit p-4 w-full">
                        <div className='flex justify-center'> 
                            <form onSubmit={handleSubmit} className='w-full'>
                                <div className='flex items-end gap-4'>
                                    <div className='flex flex-col gap-2 w-full justify-center'>
                                        <span className="text-lg font-bold text-primary">Regional</span>
                                        <input type="text" name="nome" value={regional.nome} onChange={handleChange} placeholder="Nome da Regional" className="input input-bordered w-full" />
                                        <Button type="submit" className="btn btn-primary" buttonText="Cadastrar" iconLeft={<FaPlus/>}></Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={600}>
                    <div className="bg-primary bg-opacity-5 rounded-lg h-fit p-4">
                        <div className='flex justify-center'> 
                            <form onSubmit={handleSubmit}>
                                <div className='flex items-end gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <span className="text-lg font-bold text-primary">Regional</span>
                                        <input type="text" name="nome" value={regional.nome} onChange={handleChange} placeholder="Nome da Regional" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div>
                                        <Button type="submit" className="btn btn-primary" buttonText="Cadastrar" iconLeft={<FaPlus/>}></Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </MediaQuery>
            </>           
        );
    };

  return (
    <MainFrame>
        <MediaQuery maxWidth={599}>
            <div className="my-4">
                <h1 className="flex justify-center flex-wrap text-3xl font-bold text-slate-700 my-4">Cadastro de Regionais</h1>
            </div>
            <div className='flex justify-center w-full'>
                <BoxCadastro/>
            </div>
        </MediaQuery>

        <MediaQuery minWidth={600} maxWidth={1023}>
            <div className="flex justify-between items-center gap-1 my-2">
                <h1 className="text-3xl font-bold text-slate-700">Cadastro de Regionais</h1>
            </div>
        </MediaQuery>

        <MediaQuery minWidth={1024}>
            <div className="gap-1 my-4">
                <h1 className="text-3xl font-bold text-slate-700">Cadastro de Regionais</h1>
            </div>
        </MediaQuery>

        <MediaQuery minWidth={600}>
            <div className='flex'>
                <div className="bg-primary bg-opacity-5 rounded-lg h-fit p-4">
                    <div className='flex justify-center'> 
                        <form onSubmit={handleSubmit}>
                            <div className='flex items-end gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <span className="text-lg font-bold text-primary">Regional</span>
                                    <input type="text" name="nome" value={regional.nome} onChange={handleChange} placeholder="Nome da Regional" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <Button type="submit" className="btn btn-primary" buttonText="Cadastrar" leftIcon={<FaPlus/>}></Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MediaQuery>
    </MainFrame>
    
  );
};
