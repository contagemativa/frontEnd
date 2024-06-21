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
    dadosSocioeconomicos: {
      id: 0,
      totalPessoasDomicilio: '',
      principalResponsavelSustento: ''
    },
    questionarioProntidao:{
      problemaCardiaco: "",
      doresPeitoAtividades: "",
      doresPeitoUltimoMes:"",
      desiquilibrioTontura:"",
      problemaOsseoArticular:"",
      medicamentoPressao:"",
      outraRazaoNaoPraticarAtividadeFisica:"",
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
