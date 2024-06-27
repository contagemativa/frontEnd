import config from "../config";

export async function getAllPessoas() {
  const response = await fetch(`${config.apiUrl}/pessoa`, {
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
    throw new Error("Erro ao buscar pessoa");
  }
}

export async function postPessoa(pessoa, enderecoId) {
  const response = await fetch(`${config.apiUrl}/pessoa/cadastrar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: pessoa.id,
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      naturalidade: pessoa.naturalidade,
      dataDeNascimento: pessoa.dataDeNascimento,
      sexo: pessoa.sexo,
      corRaca: pessoa.corRaca,
      endereco: enderecoId,
      usuario: pessoa.usuario,
      senha: pessoa.senha,
    })
  });

  if (response.status === 200) {
    return response.json();
  } else if (response.status == 404) {
    return [];
  } else {
    throw new Error("Erro ao cadastrar pessoa");
  }
}
