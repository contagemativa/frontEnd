import React, { createContext, useState } from 'react';

export const FuncionarioContext = createContext();

export const FuncionarioProvider = ({ children }) => {

  const [funcionario, setFuncionario] = useState({
    id: 0,
    pessoa: {
      id: 0,
      nome: '',
      cpf: '',
      naturalidade: '',
      dataDeNascimento: '',
      sexo: '',
      corRaca: '',
      endereco: {
        id: 0,
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: ''
      },
      usuario: '',
      senha: ''
    }
  });

  return (
    <FuncionarioContext.Provider value={{ funcionario, setFuncionario }}>
      {children}
    </FuncionarioContext.Provider>
  );
};
