export default class Pessoa {
    constructor({
      id = 0,
      nome = "",
      cpf = "",
      naturalidade = "",
      dataDeNascimento = new Date(),
      sexo = "",
      corRaca = "",
      endereco = 0,
      usuario = "",
      senha = ""
    }) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.naturalidade = naturalidade;
      this.dataDeNascimento = new Date(dataDeNascimento);
      this.sexo = sexo;
      this.corRaca = corRaca;
      this.endereco = endereco;
      this.usuario = usuario;
      this.senha = senha;
    }
  
    // Método para exibir informações da pessoa
    getInfo() {
      return `Nome: ${this.nome}, CPF: ${this.cpf}, Naturalidade: ${this.naturalidade}, Data de Nascimento: ${this.dataDeNascimento.toLocaleDateString()}, Sexo: ${this.sexo}, Cor/Raça: ${this.corRaca}`;
    }
  
    // Método para verificar se a senha é válida
    verificarSenha(senha) {
      return this.senha === senha;
    }
  
    // Método para atualizar o endereço
    atualizarEndereco(novoEndereco) {
      this.endereco = novoEndereco;
    }
  
    // Método para atualizar os dados pessoais
    atualizarDados({ nome, cpf, naturalidade, dataDeNascimento, sexo, corRaca, usuario, senha }) {
      if (nome) this.nome = nome;
      if (cpf) this.cpf = cpf;
      if (naturalidade) this.naturalidade = naturalidade;
      if (dataDeNascimento) this.dataDeNascimento = new Date(dataDeNascimento);
      if (sexo) this.sexo = sexo;
      if (corRaca) this.corRaca = corRaca;
      if (usuario) this.usuario = usuario;
      if (senha) this.senha = senha;
    }
  }
  