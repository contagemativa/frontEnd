import React from "react";

const DadosFisicos4 = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Dados Fisicos do Aluno
            </p>

            <p className="grid  justify-items">Tamanho da Camisa Adulto:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>PP</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>P</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>M</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>G</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>GG</span>
                </label>
            </div>
        </div>

    )
}

export default DadosFisicos4