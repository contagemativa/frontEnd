import React from "react";

const DadosSocioeconomicos2 = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Dados Socioecomicos
            </p>
            <p className="grid  justify-items">Qual o(a) principal responsável pelo sustento da família:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span className="label-text">1 - Sem Renda</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>2 - até R$1000,00</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>3 - De R$1001,00 até R$1500,00</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>4 - De R$1501,00 até R$2000,00</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>5 - R$2001,00 até R$2500,00</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>6 - R$2501,00 até R$3000,00</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>7 - Acima de R$3001,00</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="radio-1" className="radio" checked />
                    <span>8 - Não quero Declarar</span>
                </label>
            </div>
        </div>

    )
}

export default DadosSocioeconomicos2