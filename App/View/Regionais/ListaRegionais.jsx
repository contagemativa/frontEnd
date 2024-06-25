import React, { useEffect, useState } from "react";
import MainFrame from "../../Components/Layout/Main/Main";
import DataTable from "react-data-table-component";
import Spinner from "../../Components/Common/Spinner/Spinner";
import Button from "../../Components/Common/Button/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { fetchRegionais } from "../../Controllers/regionalController.js";
import { toast } from "react-toastify";
import config from "../../config.js";
import MediaQuery from "react-responsive";
import { useNavigate } from "react-router-dom";
import TableFilterRegional from "../../Components/Layout/Filter/TableFilterRegional.jsx";
import TableFilterRegionalMobile from "../../Components/Layout/Filter/TableFilterRegionalMobile.jsx";


export default function ListaRegionais() {

    useEffect(() => {
        document.title = `${config.documentTitle} | Lista Regionais`; 
        fetchData();
    }, []);

    const [loading, setLoading] = useState(true);
    const [dataContentTable, setDataContentTable] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const navigate = useNavigate();

    const customStyles = {
        headCells: {
          style: {
            backgroundColor: '#CC74AE', 
            backgroundOpacity: '0.5',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
          },
        },
      };

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Nome",
            selector: (row) => row.nome,
            sortable: true,
        },
        {
            name: "Ações",
            cell: row => (
                <div className="flex gap-1">
                  <Button
                    className="p-2 bg-gray-100 text-gray-400 hover:bg-accent hover:text-white rounded-lg flex justify-center"
                    buttonText={<FaEdit size={15} />}
                    onClick={() => handleEdit(row)}
                  />
                  <Button className="p-2 bg-gray-100 text-gray-400 hover:bg-red-600 hover:text-white rounded-lg flex justify-center"
                          buttonText={<FaTrashAlt size={15} />}
                          onClick={() => { setSelectedRegional(row); setShowModal(true); }}
                  />
                </div>
              ),
            ignoreRowClick: true,
            button: true,
        }
    ];

    const fetchData = async () => {
        try {
            const regionais = await fetchRegionais();
            console.log(regionais)
            setDataContentTable(regionais);
            setFilteredRecords(regionais); 
            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar dados da API", error);
            setLoading(false);
        }
    };

    const updateData = async () => {
        try {
            const regionais = await fetchRegionais();
            setDataContentTable(regionais);
            setFilteredRecords(regionais); 
            setLoading(false);

            toast.success("Dados atualizados com sucesso!");

        } catch (error) {
            console.error("Erro ao buscar dados da API", error);
            setLoading(false);
        }
    };

    const handleFilter = (filteredData) => {
        setFilteredRecords(filteredData);
    };

    const handleClearFilters = () => {
        setFilteredRecords(dataContentTable);
      };
    
    const handleEdit = (regional) => {
        navigate(`/Regional?${regional.id}`, { state: { regional } });
    };

    return (
        <MainFrame>

            <MediaQuery maxWidth={599}>
                <div className="my-4">
                    <h1 className="flex justify-center text-3xl font-bold text-slate-700 my-4">Lista de Regionais</h1>
                    <TableFilterRegionalMobile data={dataContentTable} onFilter={handleFilter} onClearFilters={handleClearFilters} onUpdate={updateData}/>
                </div>
            </MediaQuery>

            <MediaQuery minWidth={600} maxWidth={1023}>
                <div className="flex justify-between items-center gap-1 my-2">
                    <h1 className="text-3xl font-bold text-slate-700">Lista de Regionais</h1>
                    <TableFilterRegionalMobile data={dataContentTable} onFilter={handleFilter} onClearFilters={handleClearFilters} onUpdate={updateData} />
                </div>
            </MediaQuery>

            <MediaQuery minWidth={1024}>
                <div className="gap-1 my-4">
                    <h1 className="text-3xl font-bold text-slate-700">Lista de Regionais</h1>
                </div>
                <TableFilterRegional data={dataContentTable} onFilter={handleFilter} onClearFilters={handleClearFilters} onUpdate={updateData} />
            </MediaQuery>

            <div className="rounded-xl">
                <DataTable
                    className="border shadow-md rounded-xl shadow-gray-100"
                    columns={columns}
                    data={filteredRecords}
                    pagination
                    paginationPerPage={10}
                    progressPending={loading}
                    progressComponent={<Spinner className="loading-lg"/>}
                    highlightOnHover
                    customStyles={customStyles}
                />
            </div>

            
           
        </MainFrame>
    );
}