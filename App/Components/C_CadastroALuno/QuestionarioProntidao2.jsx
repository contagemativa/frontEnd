import React from "react";

const QuestionarioProntidao2 = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Questionário de Prontidão para atividades físicas
            </p>
            <p className="grid  justify-items">Voce apresenta desiquilibrio devido à tontura e/ou perda de consiencia
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
            <p className="grid  justify-items">Voce possui algum problema ósseo ou articular que poderia ser piorada pela atividade fisica</p>
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
            <p className="grid  justify-items">Você toma atualmente algum medicamento para pressão arterial e/ou problema de coração</p>
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

export default QuestionarioProntidao2