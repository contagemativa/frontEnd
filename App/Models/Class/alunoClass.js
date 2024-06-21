import React, { createContext, useState } from 'react';
import { recuperarUsuario } from './usuarioClass';

export const AlunoContext = createContext();

export const AlunoProvider = ({ children }) => {

  const usuarioLogado = recuperarUsuario();

  const [aluno, setAluno] = useState({
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
    },
    nucleoDeOrigem: 0,
    cadastradoPor: usuarioLogado.id,
    tamanhoCamisa: '',
    fichaMedica: {
      id: 0,
      pessoa: 0,
      deficiencia: '',
      problemaDeSaude: ''
    },
    condicoesSociais: {
      aluno: 0,
      pessoasNoDomicilio: 0,
      responsavelPeloSustento: '',
      rendaFamiliar: '',
      programaDoGoverno: ''
    },
    questionarioProntidao:{
      id: 0,
      aluno: 0,
      quest1: "",
      quest2: "",
      quest3: "",
      quest4: "",
      quest5: "",
      quest6: "",
      quest7: ""
    },
    identidade:{
      id: 0,
      pessoa: 0,
      rg: '',
      orgaoExpedidor: '',
      dataEmissao: ''
    }
  });

  return (
    <AlunoContext.Provider value={{ aluno, setAluno }}>
      {children}
    </AlunoContext.Provider>
  );
};
