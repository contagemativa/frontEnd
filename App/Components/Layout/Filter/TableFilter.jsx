import React from "react";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";

export default function TableFilter({ data, onFilter }) {
  const [filterNomeAluno, setFilterNomeAluno] = useState("");
  const [filterNucleo, setFilterNucleo] = useState("");
  const [filterRegional, setFilterRegional] = useState("");

  const handleFilterNomeAluno = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterNomeAluno(value);
    applyFilters(value, filterNucleo, filterRegional);
  };

  const handleFilterNucleo = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterNucleo(value);
    applyFilters(filterNomeAluno, value, filterRegional);
  };

  const handleFilterRegional = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterRegional(value);
    applyFilters(filterNomeAluno, filterNucleo, value);
  };

  const applyFilters = (aluno, nucleo, regional) => {
    const filteredList = data.filter((record) => {
      return (
        record.pessoa.nome.toLowerCase().includes(aluno) &&
        record.nucleo.nome.toLowerCase().includes(nucleo) &&
        record.regional.nome.toLowerCase().includes(regional)
      );
    });
    onFilter(filteredList);
  };

  return (
    <>
        <div className="flex bg-accent bg-opacity-5 rounded-md shadow-gray-100 py-2 my-2">
            <div className="flex items-center text-accent gap-2 text-md">
                <IoFilter size={20} className="mx-2" />
                <div>
                    <p><b>Aluno</b></p>
                    <input type="text" className="input input-bordered join-item h-8 placeholder:text-sm placeholder:italic placeholder:text-slate-400" placeholder="Filtrar Nome do Aluno..." value={filterNomeAluno} onChange={handleFilterNomeAluno}/>
                </div>
                <div>
                    <p><b>Núcleo</b></p>
                    <input type="text" className="input input-bordered join-item h-8 placeholder:text-sm placeholder:italic placeholder:text-slate-400" placeholder="Filtrar Núcleo..." value={filterNucleo} onChange={handleFilterNucleo}/>
                </div>
                <div>
                    <p><b>Regional</b></p>
                    <input type="text" className="input input-bordered join-item h-8 placeholder:text-sm placeholder:italic placeholder:text-slate-400" placeholder="Filtrar Regional..." value={filterRegional} onChange={handleFilterRegional}/>
                </div>
            </div>
        </div>
    </>
  );
}
