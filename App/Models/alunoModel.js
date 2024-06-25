import config from "../config";
import { recuperarUsuario } from "./Class/usuarioClass";
const usuarioLogado = recuperarUsuario();

export async function getAllAlunos() {
    const response = await fetch(`${config.apiUrl}/aluno`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.json();
    } else if (response.status == 404) {
      return [];
    } else {
      throw new Error("Erro ao buscar alunos");
    }
  }

  export async function postAluno(aluno) {
    try {
      // Enviar dados do Endereço
      const enderecoResponse = await fetch(
        `${config.apiUrl}/endereco/cadastrar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(aluno.pessoa.endereco),
        }
      );
  
      const enderecoData = await enderecoResponse.json();
      console.log(enderecoData);
    
      // Enviar dados da Pessoa
      const pessoaResponse = await fetch(`${config.apiUrl}/pessoa/cadastrar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: aluno.pessoa.id,
          nome: aluno.pessoa.nome,
          cpf: aluno.pessoa.cpf,
          naturalidade: aluno.pessoa.naturalidade,
          dataDeNascimento: aluno.pessoa.dataDeNascimento,
          sexo: aluno.pessoa.sexo,
          corRaca: aluno.pessoa.corRaca,
          endereco: enderecoData.id,
          usuario: aluno.pessoa.usuario,
          senha: aluno.pessoa.senha
        }),
      });
    
      const pessoaData = await pessoaResponse.json();
      console.log(pessoaData);

      // Enviar dados da Identidade
      const identidadeResponse = await fetch(
        `${config.apiUrl}/identidade/cadastrar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: aluno.identidade.id,
            pessoa: pessoaData.id,
            rg: aluno.identidade.rg,
            orgaoExpedidor: aluno.identidade.orgaoExpedidor,
            dataEmissao: aluno.identidade.dataEmissao,
          }),
        }
      );
  
      const identidadeData = await identidadeResponse.json();
      console.log(identidadeData);
    
      // Enviar dados da Ficha Médica
      const fichaMedicaResponse = await fetch(
        `${config.apiUrl}/fichaMedica/cadastrar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: aluno.fichaMedica.id,
            pessoa: pessoaData.id,
            deficiencia: aluno.fichaMedica.deficiencia,
            problemaDeSaude: aluno.fichaMedica.problemaDeSaude,
          }),
        }
      );
  
      const fichaMedicaData = await fichaMedicaResponse.json();
      console.log(fichaMedicaData);
    
      // Enviar dados do Aluno
      const alunoResponse = await fetch(
        `${config.apiUrl}/aluno/cadastrar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: aluno.id,
            pessoa: pessoaData.id,
            nucleoDeOrigem: aluno.nucleoDeOrigem.id,
            cadastradoPor: usuarioLogado.id,
            tamanhoCamisa: aluno.tamanhoCamisa,
          }),
        }
      );
  
      const alunoData = await alunoResponse.json();
      console.log(alunoData);
    
      // Enviar dados das Condições Sociais
      const condicoesSociaisResponse = await fetch(
        `${config.apiUrl}/condicoesSociais/cadastrar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            aluno: alunoData.id,
            pessoasNoDomicilio: aluno.condicoesSociais.pessoasNoDomicilio,
            responsavelPeloSustento: aluno.condicoesSociais.responsavelPeloSustento,
            rendaFamiliar: aluno.condicoesSociais.rendaFamiliar,
            programaDoGoverno: aluno.condicoesSociais.programaDoGoverno,
          }),
        }
      );
  
      const condicoesSociaisData = await condicoesSociaisResponse.json();
      console.log(condicoesSociaisData);
    
      // Enviar dados do Questionário de Prontidão
      const questionarioProntidaoResponse = await fetch(
        `${config.apiUrl}/questionario/cadastrar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: aluno.questionarioProntidao.id,
            aluno: alunoData.id,
            quest1: aluno.questionarioProntidao.quest1,
            quest2: aluno.questionarioProntidao.quest2,
            quest3: aluno.questionarioProntidao.quest3,
            quest4: aluno.questionarioProntidao.quest4,
            quest5: aluno.questionarioProntidao.quest5,
            quest6: aluno.questionarioProntidao.quest6,
            quest7: aluno.questionarioProntidao.quest7,
          }),
        }
      );
  
      const questionarioProntidaoData = await questionarioProntidaoResponse.json();
      console.log(questionarioProntidaoData);
  
      console.log("Aluno cadastrado com sucesso:", alunoData);
      return alunoResponse; // Retornar a resposta completa para verificação do status
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
      throw error; // Lançar o erro para tratamento externo
    }
  }
  
  
  