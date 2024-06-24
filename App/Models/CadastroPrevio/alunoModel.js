import config from "../../config";

const cadastrarAluno = async (aluno) => {
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
        senha: aluno.pessoa.senha,
      }),
    });
    const pessoaData = await pessoaResponse.json();

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
          orgaoExpedidor: aluno.pessoa.orgaoExpedidor,
          dataEmissao: aluno.pessoa.dataEmissao,
        }),
      }
    );
    const identidadeData = await identidadeResponse.json();

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
          nucleoDeOrigem: aluno.nucleoDeOrigem,
          cadastradoPor: aluno.cadastradoPor,
          tamanhoCamisa: aluno.tamanhoCamisa,
        }),
      }
    );
    const alunoData = await alunoResponse.json();

    const condicoesSociaisResponse = await fetch(
      `${config.apiUrl}/questionario/cadastrar`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aluno: alunoData.id,
          pessoasNoDomicilio: aluno.condicoesSociais.pessoasNoDomicilio,
          responsavelPeloSustento:
          aluno.condicoesSociais.responsavelPeloSustento,
          rendaFamiliar: aluno.condicoesSociais.rendaFamiliar,
          programaDoGoverno: aluno.condicoesSociais.programaDoGoverno,
        }),
      }
    );
    const condicoesSociaisData = await condicoesSociaisResponse.json();

    const questionarioProntidaoResponse = await fetch(
      `${config.apiUrl}/endereco/cadastrar`,
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
    const questionarioProntidaoData =
      await questionarioProntidaoResponse.json();

    console.log("Aluno cadastrado com sucesso:", alunoData);
    return alunoData;
  } catch (error) {
    console.error("Erro ao cadastrar aluno:", error);
    throw error; // Lançar o erro para tratamento externo
  }
};
