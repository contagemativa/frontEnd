import React from "react";

const QuestionarioProntidao3 = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Questionário de Prontidão para atividades físicas
            </p>
            <p className="grid  justify-items">Sabe de alguma outra razão pela qal voce não deve praticar atividade fisica
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span className="label-text">Sim</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Não</span>
                </label>
            </div>

            <button>Finalizar Cadastro</button>
            
                
        </div>
        

    )
}

export default QuestionarioProntidao3