import React from "react";

const DadosFisicos1 = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Dados Fisicos do Aluno
            </p>

            <p className="grid  justify-items-center">Possui Alguma Deficiência? (Caso Não assinale Não Possui)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Deficiência Auditiva</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Deficiência Intelectual/Cognitiva</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Deficiência Motora</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Deficiência Visual</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Deficiência Mental</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Não possui</span>
                </label>
            </div>
        </div>

    )
}

export default DadosFisicos1