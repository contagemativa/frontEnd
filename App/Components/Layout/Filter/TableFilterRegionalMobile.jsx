import React from "react";
import { IoFilter, IoFilterCircle } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { LuFilterX } from "react-icons/lu";
import { useState } from "react";
import MediaQuery from "react-responsive";
import { FaFilter } from "react-icons/fa";
import { MdFilterAltOff } from "react-icons/md";
import { FiFilter } from "react-icons/fi";

export default function TableFilterRegionalMobile({ data, onFilter, onClearFilters, onUpdate}) {
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
      <MediaQuery maxWidth={599}>
        <div className="grid grid-cols-2 gap-2">
          <button className="btn btn-warning text-neutral" onClick={()=>document.getElementById('my_modal_1').showModal()}>
            <FiFilter size={20}/>
            Filtro
          </button>
          <button className="btn btn-accent text-white" onClick={onUpdate}>
            <RxUpdate size={20}/>
            Atualizar
          </button>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={600}>
        <div className="flex text-sm gap-2">
          <button className="btn btn-warning text-neutral" onClick={()=>document.getElementById('my_modal_1').showModal()}>
            <FiFilter size={20}/>
            Filtro
          </button>
          <button className="btn btn-accent text-white" onClick={onUpdate}>
            <RxUpdate size={20}/>
            Atualizar
          </button>
        </div>
      </MediaQuery>


      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl my-2">Filtro</h3>         
          </div>

          
          <div className="items-center text-accent gap-2 text-md">
              <div>
                  <p><b>Regional</b></p>
                  <input type="text" className="input-bordered input-accent border w-full h-10 placeholder:text-sm placeholder:italic placeholder:text-slate-400 hover:border-accent my-1 rounded-md p-2" placeholder="Filtrar Regional..." value={filterRegional} onChange={handleFilterRegional}/>
              </div>
            </div>

          <div className="flex modal-action">
            <form method="dialog">

              <MediaQuery maxWidth={326}>
                <div className="flex flex-wrap gap-2 w-full">
                  <button className="btn btn-neutral bg-opacity-10 px-4 text-neutral w-full" onClick={handleClearFilters}>
                      <LuFilterX size={20}/>
                      Limpar Filtro
                  </button>
                  <button className="btn btn-accent px-4 text-white w-full">
                      <FiFilter size={20}/>
                      Filtrar
                  </button>
                </div>
              </MediaQuery>

              <MediaQuery minWidth={327}>
                <div className="flex flex-wrap gap-2">
                  <button className="btn btn-neutral bg-opacity-10 px-4 text-neutral" onClick={handleClearFilters}>
                      <LuFilterX size={20}/>
                      Limpar Filtro
                  </button>
                  <button className="btn btn-accent px-4 text-white">
                      <FiFilter size={20}/>
                      Filtrar
                  </button>
                </div>
              </MediaQuery>
              
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
