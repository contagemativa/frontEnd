export default class Funcionario {
    constructor({
      id = 0,
      pessoa = 0
    }) {
      this.id = id;
      this.pessoa = pessoa;
    }
  
    // Método para exibir informações do funcionário
    getInfo() {
      return `ID: ${this.id}, Pessoa ID: ${this.pessoa}`;
    }
  
    // Método para atualizar o ID da pessoa
    atualizarPessoa(novoPessoaId) {
      this.pessoa = novoPessoaId;
    }
  }

  