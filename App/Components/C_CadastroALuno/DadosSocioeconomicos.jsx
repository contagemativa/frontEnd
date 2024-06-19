import React from "react";

const DadosSocioeconomicos = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Dados Socioecomicos
            </p>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Nº Total de Pessoas que residem no domícilio:</span>
                </div>
                <input type="text" placeholder="Numero de pessoas" className="input input-bordered w-full " />
            </label>
            <p className="grid  justify-items">Qual o(a) principal responsável pelo sustento da família:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Eu mesmo(a)</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Cônjunge</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Filho(a)</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Parente</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>Outros</span>
                </label>
            </div>
        </div>

    )
}

export default DadosSocioeconomicos