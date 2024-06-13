import { login } from "../Models/loginModel";
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
      // Função de Login
      const data = await login(usuario, senha);

      if (data.status == 200) {
        navigate("/home");
        toast.clearWaitingQueue();
      } else if (data.status == 404) {
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
