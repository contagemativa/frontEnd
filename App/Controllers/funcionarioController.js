import { toast } from "react-toastify";
import { postEndereco } from "../Models/enderecoModel";
import { postFuncionario } from "../Models/funcionarioModel";
import { postPessoa } from "../Models/pessoaModel";

export async function cadastrarFuncionario(funcionario) {
  try {
    const enderecoResponse = await postEndereco(funcionario.pessoa.endereco);
    if (enderecoResponse.status === 200) {
      const pessoaResponse = await postPessoa(funcionario.pessoa);
      if (pessoaResponse.status === 200) {
        const funcionarioResponse = await postFuncionario(funcionario);
        if(funcionarioResponse.status === 200){
            return funcionarioResponse;
        } else {
            toast.error("Erro ao finalizar cadastro do funcionário");
            return;
        }
      } else {
        toast.error("Erro ao cadastrar dados do funcionário");
        return;
      }
    } else {
      toast.error("Erro ao cadastrar endereço!");
      return;
    }
  } catch (error) {
    console.error("Erro ao cadastrar funcionário:", error);
    throw error;
  }
}
