import React, { useEffect, useState } from "react";
import MainFrame from "../../Components/Layout/Main/Main";
import DataTable from "react-data-table-component";
import Spinner from "../../Components/Common/Spinner/Spinner";
import Button from "../../Components/Common/Button/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import TableFilter from "../../Components/Layout/Filter/TableFIlter.jsx";
import { fetchAlunos } from "../../Controllers/alunoController.js";
import { fetchPessoas } from "../../Controllers/pessoaController.js";
import { fetchNucleos } from "../../Controllers/nucleoController.js";
import { fetchRegionais } from "../../Controllers/regionalController.js";
import { toast } from "react-toastify";
import config from "../../config.js";

export default function ListaAlunos() {

    useEffect(() => {
        document.title = `${config.documentTitle} | Lista de Alunos`; 
        fetchData();
    }, []);

    const [loading, setLoading] = useState(true);
    const [dataContentTable, setDataContentTable] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);

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
            selector: (row) => row.aluno.id
        },
        {
            name: "Nome",
            selector: (row) => row.pessoa.nome,
            sortable: true,
        },
        {
            name: "Núcleo",
            selector: (row) => row.nucleo.nome,
            sortable: true,
        },
        {
            name: "Regional",
            selector: (row) => row.regional.nome,
            sortable: true,
        },
        {
            name: "Ações",
            cell: row => (
                <div className="flex gap-1">
                    <Button className="p-2 bg-gray-100 text-gray-400 hover:bg-accent hover:text-white rounded-lg flex justify-center" buttonText={<FaEdit size={15} />}></Button>
                    <Button className="p-2 bg-gray-100 text-gray-400 hover:bg-red-600 hover:text-white rounded-lg flex justify-center" buttonText={<FaTrashAlt size={15} />}></Button>
                </div>
            ),
            ignoreRowClick: true,
            button: true,
        }
    ];

    const fetchData = async () => {
        try {
            const alunos = await fetchAlunos();
            const pessoas = await fetchPessoas();
            const nucleos = await fetchNucleos();
            const regionais = await fetchRegionais();

            const dataContentTable = alunos.filter(aluno => {
                return pessoas.some(pessoa => pessoa.id === aluno.pessoa);
            }).map(aluno => {
                const pessoa = pessoas.find(p => p.id === aluno.pessoa);
                const nucleo = nucleos.find(n => n.id === aluno.nucleoDeOrigem);
                const regional = regionais.find(r => r.id === nucleo.regional);
                return { aluno, pessoa, nucleo, regional};
            });

            setDataContentTable(dataContentTable);
            setFilteredRecords(dataContentTable); 
            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar dados da API", error);
            setLoading(false);
        }
    };

    const updateData = async () => {
        try {
            const alunos = await fetchAlunos();
            const pessoas = await fetchPessoas();
            const nucleos = await fetchNucleos();
            const regionais = await fetchRegionais();

            const dataContentTable = alunos.filter(aluno => {
                return pessoas.some(pessoa => pessoa.id === aluno.pessoa);
            }).map(aluno => {
                const pessoa = pessoas.find(p => p.id === aluno.pessoa);
                const nucleo = nucleos.find(n => n.id === aluno.nucleoDeOrigem);
                const regional = regionais.find(r => r.id === nucleo.regional);
                return { aluno, pessoa, nucleo, regional};
            });

            setDataContentTable(dataContentTable);
            setFilteredRecords(dataContentTable); 
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

    return (
        <MainFrame>
            <div className="gap-1 my-4">
                <h1 className="text-3xl font-bold text-slate-700">Lista de Alunos</h1>
            </div>
            <TableFilter data={dataContentTable} onFilter={handleFilter} onClearFilters={handleClearFilters} onUpdate={updateData}/>
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
