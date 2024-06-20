import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [aluno, setAluno] = useState({
    id: 0,
    pessoa: {
      id: 0,
      nome: "",
      cpf: "",
      naturalidade: "",
      dataDeNascimento: "",
      sexo: "",
      corRaca: "",
      endereco: {
        id: 0,
        cep: "",
        rua: "",
        numero: 0,
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        pais: ""
      },
      usuario: "",
      senha: ""
    },
    nucleoDeOrigem: {
      id: 0,
      nome: "",
      endereco: 0,
      regional: {
        id: 0,
        nome: ""
      }
    },
    cadastradoPor: 0,
    tamanhoCamisa: "string"
  });

  return (
    <FormContext.Provider value={{ aluno, setAluno }}>
      {children}
    </FormContext.Provider>
  );
};
