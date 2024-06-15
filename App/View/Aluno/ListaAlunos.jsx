import React, { useEffect } from "react";
import MainFrame from "../../Components/Layout/Main/Main";
import DataTable, { SortOrder } from "react-data-table-component";
import { useState } from "react";
import Spinner from "../../Components/Common/Spinner/Spinner";
import Button from "../../Components/Common/Button/Button";
import { FaEdit, FaFilter, FaSearch, FaTrashAlt } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

export default function ListaAlunos() {
    const [records, setRecords] = useState();
    const [loading, setLoading] = useState(true);

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
            name: "Idade",
            selector: (row) => row.idade,
            sortable: true,
        },
        {
            name: "Curso",
            selector: (row) => row.curso,
            sortable: true,
        },
        {
            name: "Ações",
            cell: row => (
                <div className="flex gap-1">
                    <Button className="p-2 bg-gray-100 text-gray-400 hover:bg-accent hover:text-white rounded-lg flex justify-center" buttonText={<FaEdit size={15}></FaEdit>}></Button>
                    <Button className="p-2 bg-gray-100 text-gray-400 hover:bg-red-600 hover:text-white rounded-lg flex justify-center" buttonText={<FaTrashAlt size={15}></FaTrashAlt>}></Button>
                </div>
            ),
            ignoreRowCLick: true,
            allowOverFloew:true,
            button: true,
        }
    ];

    const data = [
        { id: 1, nome: 'João Silva', idade: 20, curso: 'Engenharia' },
        { id: 2, nome: 'Maria Oliveira', idade: 22, curso: 'Medicina' },
        { id: 3, nome: 'Carlos Pereira', idade: 21, curso: 'Direito' },
        { id: 4, nome: 'Ana Souza', idade: 23, curso: 'Arquitetura' },
        { id: 5, nome: 'Lucas Fernandes', idade: 19, curso: 'Ciência da Computação' },
        { id: 6, nome: 'Mariana Santos', idade: 24, curso: 'Psicologia' },
        { id: 7, nome: 'Pedro Alves', idade: 22, curso: 'Administração' },
        { id: 8, nome: 'Isabela Costa', idade: 20, curso: 'Design' },
        { id: 9, nome: 'Gabriel Lima', idade: 21, curso: 'Biologia' },
        { id: 10, nome: 'Julia Martins', idade: 23, curso: 'Química' },
        { id: 11, nome: 'Rafael Ribeiro', idade: 22, curso: 'Física' },
        { id: 12, nome: 'Beatriz Rocha', idade: 19, curso: 'Matemática' },
        { id: 13, nome: 'Vinicius Almeida', idade: 24, curso: 'Enfermagem' },
        { id: 14, nome: 'Fernanda Azevedo', idade: 21, curso: 'Nutrição' },
        { id: 15, nome: 'Ricardo Menezes', idade: 22, curso: 'Farmácia' },
        { id: 16, nome: 'Larissa Correia', idade: 20, curso: 'História' },
        { id: 17, nome: 'Thiago Mendes', idade: 23, curso: 'Geografia' },
        { id: 18, nome: 'Camila Carvalho', idade: 21, curso: 'Sociologia' },
        { id: 19, nome: 'Felipe Andrade', idade: 22, curso: 'Filosofia' },
        { id: 20, nome: 'Amanda Cardoso', idade: 19, curso: 'Letras' },
      ];
      

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRecords(data);
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);

    }, []);

    const handleFilterName = (e) => {
        const filteredList = data.filter((record) => {
        return record.nome.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setRecords(filteredList);
    };

    const handleFilterCourse = (e) => {
        const filteredList = data.filter((record) => {
        return record.curso.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setRecords(filteredList);
    };

    return (
        <>
        <MainFrame>
            <div>
                <div className="flex justify-between items-center my-2 py-2">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-700">Lista de Aluno</h1>
                    </div>
                    <div className="flex bg-accent bg-opacity-5 p-2 rounded-lg invisible lg:visible">
                        <div className="flex items-center text-accent gap-2 text-md">                     
                            <IoFilter size={25} className="mx-2"/>
                            <div>
                                <p><b>Nome</b></p>
                                <input type="text" className="input input-bordered join-item h-6" placeholder="Filtrar Nome" onChange={handleFilterName} />
                            </div>
                            <div>
                                <p><b>Curso</b></p>
                                <input type="text" className="input input-bordered join-item h-6" placeholder="Filtrar Curso" onChange={handleFilterCourse} />
                            </div>
                        </div>
                    </div>
                </div>

                <DataTable
                    columns={columns}
                    data={records}
                    pagination
                    paginationPerPage={10}
                    progressPending={loading}
                    progressComponent={<Spinner className="loading-lg"/>}
                    highlightOnHover
                />
            </div>
        </MainFrame>
        </>
    );
}
