import React from "react";

const DadosGerais2 = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Dados Gerais dos Alunos
            </p>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">AutoDeclaração Cor/Raça: *</span>
                </div>
                <div className="flex  gap-4">
                    <input type="radio" name="radio-1" className="radio flex items-center gap-2" checked /><span>Branca</span>
                    <input type="radio" name="radio-1" className="radio flex items-center gap-2" checked /><span>Preta</span>
                    <input type="radio" name="radio-1" className="radio flex items-center gap-2" checked /><span>Amarela</span>
                    <input type="radio" name="radio-1" className="radio flex items-center gap-2" checked /><span>Parda</span>
                </div>
                <div className="flex  gap-4 mt-4">
                    <input type="radio" name="radio-1" className="radio " checked /><span>Indigena</span>
                    <input type="radio" name="radio-1" className="radio " checked /><span>Não Declarar</span>
                </div>
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Naturalidade: *</span>
                </div>
                <input type="text" placeholder="Naturalidade Aluno" className="input input-bordered w-full " />
            </label>
        </div>

    )
}

export default DadosGerais2