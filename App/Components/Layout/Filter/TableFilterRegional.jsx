import React from "react";
import { IoFilter, IoFilterCircle } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { LuFilterX } from "react-icons/lu";
import { useState } from "react";
import MediaQuery from "react-responsive";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TableFilterRegional({ data, onFilter, onClearFilters, onUpdate}) {
  const [filterRegional, setFilterRegional] = useState("");


  const handleFilterRegional = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterRegional(value);
    applyFilters(value);
  };

  const applyFilters = (regional) => {

    const filteredList = data.filter((record) => {
      return (
        record.nome.toLowerCase().includes(regional)
      );
    });
    onFilter(filteredList);
  };

  const handleClearFilters = () => {
    setFilterRegional("");
    onClearFilters();
  };

  return (
    <>
      <div className="flex rounded-md shadow-gray-100 py-2 my-2">
        <div className="flex justify-between w-full items-center">
            <div className="flex items-center text-accent gap-2 text-md">
                <IoFilter size={20} className="mx-2" />
                <div>
                    <p><b>Regional</b></p>
                    <input type="text" className="input-bordered input-accent border w-full max-w-xs h-8 placeholder:text-sm placeholder:italic placeholder:text-slate-400 hover:border-accent my-1 rounded-md p-2" placeholder="Filtrar Regional..." value={filterRegional} onChange={handleFilterRegional}/>
                </div>
            </div>
            <div className="flex gap-2 items-end h-full">
                  <button className="btn btn-warning bg-opacity-70 px-4 text-neutral" onClick={handleClearFilters}>
                      <LuFilterX size={20}/>
                      Limpar Filtro
                  </button>
                  <button className="btn btn-accent px-4 text-white" onClick={onUpdate}>
                      <RxUpdate size={20}/>
                      Atualizar
                  </button>
            </div>
        </div>
      </div>
    </>
  );
}
