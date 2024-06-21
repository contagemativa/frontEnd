import { getAllFuncionarios } from "../Models/funcionarioModel";
import { PostLogin } from "../Models/loginModel";
import { getAllNucleos } from "../Models/nucleoModel";
import { getAllPessoas } from "../Models/pessoaModel";
import Usuario, { salvarUsuario } from "../Models/Class/usuarioClass";
import { toast } from "react-toastify";

export async function handleLoginClick(usuario, senha, navigate, setError) {
  try {
    if (usuario === "") {
      toast.info('Campo "Usuário" em branco!');
      toast.clearWaitingQueue();
    } else if (senha === "") {
      toast.info('Campo "Senha" em branco!');
      toast.clearWaitingQueue();
    } else {

      const login = await PostLogin(usuario, senha);
      
      if (login.status == 200) {
        const pessoas = await getAllPessoas();
        const pessoa = pessoas.find((p) => p.usuario === usuario);

        const usuarioLogado = new Usuario(pessoa.id, pessoa.nome, pessoa.usuario);
        salvarUsuario(usuarioLogado);

        navigate("/Home");
        toast.clearWaitingQueue();
      }

      else if (login.status == 404) {
        toast.error("Usuario não cadastrado no banco ou credenciais inválidas");
      }
    }
  } catch (error) {
    console.log("Erro na requisição", error);
    // Aqui você pode exibir uma mensagem de erro usando ToastManager
    toast.error("Erro na requisição: " + error.message);
    toast.clearWaitingQueue();
  }
}

export async function handleSetUserLogged(usario) {
  const data = await getUserLogged(usario);

  if (data.status == 200) {

  }
}

export const saveUser = (usuario) => {
  localStorage.setItem('usuario', JSON.stringify(usuario));
};

export const recuperarUsuario = () => {
  const usuarioData = localStorage.getItem('usuario');
  if (usuarioData) {
    const { id, nome, email } = JSON.parse(usuarioData);
    return new Usuario(id, nome, email);
  }
  return null;
};