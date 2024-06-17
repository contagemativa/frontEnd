export default class Usuario {
    constructor(id, nome, usuario) {
      this.id = id;
      this.nome = nome;
      this.usuario = usuario;
    }
  }

// Função para salvar o usuário no localStorage
export const salvarUsuario = (usuario) => {
  localStorage.setItem('usuario', JSON.stringify(usuario));
};

// Função para recuperar o usuário do localStorage
export const recuperarUsuario = () => {
  const usuarioData = localStorage.getItem('usuario');
  if (usuarioData) {
    const { id, nome, usuario } = JSON.parse(usuarioData);
    return new Usuario(id, nome, usuario);
  }
  return null;
};
