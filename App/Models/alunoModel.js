import config from "../config";

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

  const cadastrarAluno = async (aluno) => {
    try {
      // 1. Enviar dados da Pessoa
      const pessoaResponse = await fetch('url-da-sua-api/pessoas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aluno.pessoa),
      });
      const pessoaData = await pessoaResponse.json();
  
      // 2. Enviar dados do Endereço
      const enderecoResponse = await fetch('url-da-sua-api/enderecos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aluno.pessoa.endereco),
      });
      const enderecoData = await enderecoResponse.json();
  
      // 3. Enviar dados do Núcleo de Origem
      const nucleoResponse = await fetch('url-da-sua-api/nucleos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aluno.nucleoDeOrigem),
      });
      const nucleoData = await nucleoResponse.json();
  
      // 4. Enviar dados do Aluno
      const alunoResponse = await fetch('url-da-sua-api/alunos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: aluno.id,
          pessoa: pessoaData.id,
          nucleoDeOrigem: nucleoData.id,
          cadastradoPor: aluno.cadastradoPor,
          tamanhoCamisa: aluno.tamanhoCamisa,
        }),
      });
      const alunoData = await alunoResponse.json();
  
      console.log('Aluno cadastrado com sucesso:', alunoData);
      return alunoData;
    } catch (error) {
      console.error('Erro ao cadastrar aluno:', error);
      throw error; // Lançar o erro para tratamento externo
    }
  };
  
  
  