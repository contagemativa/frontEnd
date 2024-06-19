import React from "react";

const QuestionarioProntidao = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Questionário de Prontidão para atividades físicas
            </p>
            <p className="grid  justify-items">Algum medico ja disse que voce possui algum problema de coração e que só deveria realizar atividades físicas
                surpervisionado por profissionais de saúde
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
            <p className="grid  justify-items">Voce sente dores no peito quando pratica atividades físicas</p>
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
            <p className="grid  justify-items">o ultimo mes, voce sentiu dores no peito quando praticou exercicios fisicos</p>
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
                
            </div>
        

    )
}

export default QuestionarioProntidao