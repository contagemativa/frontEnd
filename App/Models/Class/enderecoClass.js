export default  class Endereco {
    constructor({
      id = 0,
      cep = "",
      rua = "",
      numero = 0,
      complemento = "",
      bairro = "",
      cidade = "",
      estado = "",
      pais = ""
    }) {
      this.id = id;
      this.cep = cep;
      this.rua = rua;
      this.numero = numero;
      this.complemento = complemento;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.pais = pais;
    }
  
    // Método para exibir informações do endereço
    getInfo() {
      return `${this.rua}, ${this.numero}, ${this.complemento}, ${this.bairro}, ${this.cidade} - ${this.estado}, ${this.pais}, CEP: ${this.cep}`;
    }
  }
  
  module.exports = Endereco;
  