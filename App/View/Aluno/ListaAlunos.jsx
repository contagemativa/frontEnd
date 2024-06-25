import React, { useEffect, useState } from "react";
import MainFrame from "../../Components/Layout/Main/Main";
import DataTable from "react-data-table-component";
import Spinner from "../../Components/Common/Spinner/Spinner";
import Button from "../../Components/Common/Button/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import TableFilterAluno from "../../Components/Layout/Filter/TableFilterAluno.jsx";
import { fetchAlunos } from "../../Controllers/alunoController.js";
import { fetchPessoas } from "../../Controllers/pessoaController.js";
import { fetchNucleos } from "../../Controllers/nucleoController.js";
import { fetchRegionais } from "../../Controllers/regionalController.js";
import { toast } from "react-toastify";
import config from "../../config.js";
import MediaQuery from "react-responsive";
import TableFilterAlunoMobile from "../../Components/Layout/Filter/TableFilterAlunoMobile.jsx";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

export default function ListaAlunos() {

    useEffect(() => {
        document.title = `${config.documentTitle} | Lista de Alunos`; 
        fetchData();
    }, []);

    const [loading, setLoading] = useState(true);
    const [dataContentTable, setDataContentTable] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAluno, setSelectedAluno] = useState(null);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
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
            selector: (row) => row.aluno.id,
            width: '50px',
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
                  <Button
                    className="p-2 bg-gray-100 text-gray-400 hover:bg-accent hover:text-white rounded-lg flex justify-center"
                    buttonText={<FaEdit size={15} />}
                    onClick={() => handleEdit(row)}
                  />
                  <Button className="p-2 bg-gray-100 text-gray-400 hover:bg-red-600 hover:text-white rounded-lg flex justify-center"
                          buttonText={<FaTrashAlt size={15} />}
                          onClick={() => { setSelectedAluno(row); setShowModal(true); }}
                  />
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
    
    const handleEdit = (aluno) => {
        navigate(`/Aluno?${aluno.id}`, { state: { aluno } });
    };

    const handleDelete = async () => {
        try {
          await deleteAluno(selectedAluno.aluno.id, login, password);
          setDataContentTable(dataContentTable.filter(a => a.aluno.id !== selectedAluno.aluno.id));
          setFilteredRecords(filteredRecords.filter(a => a.aluno.id !== selectedAluno.aluno.id));
          setShowModal(false);
          setSelectedAluno(null);
          setLogin("");
          setPassword("");
          toast.success("Aluno deletado com sucesso!");
        } catch (error) {
          console.error("Erro ao deletar aluno", error);
          toast.error("Erro ao deletar aluno");
        }
      };

    return (
        <MainFrame>

            <MediaQuery maxWidth={599}>
                <div className="my-4">
                    <h1 className="flex justify-center text-3xl font-bold text-slate-700 my-4">Lista de Alunos</h1>
                    <TableFilterAlunoMobile data={dataContentTable} onFilter={handleFilter} onClearFilters={handleClearFilters} onUpdate={updateData}/>
                </div>
            </MediaQuery>

            <MediaQuery minWidth={600} maxWidth={1023}>
                <div className="flex justify-between items-center gap-1 my-2">
                    <h1 className="text-3xl font-bold text-slate-700">Lista de Alunos</h1>
                    <TableFilterAlunoMobile data={dataContentTable} onFilter={handleFilter} onClearFilters={handleClearFilters} onUpdate={updateData}/>
                </div>
            </MediaQuery>

            <MediaQuery minWidth={1024}>
                <div className="gap-1 my-4">
                    <h1 className="text-3xl font-bold text-slate-700">Lista de Alunos</h1>
                </div>
                <TableFilterAluno data={dataContentTable} onFilter={handleFilter} onClearFilters={handleClearFilters} onUpdate={updateData}/>
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

            {showModal && (
            <ReactModal onClose={() => setShowModal(false)}>
                <div>
                    <h2>Confirmar Exclusão</h2>
                    <p>Para excluir o aluno, por favor, insira suas credenciais:</p>
                    <input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleDelete} buttonText="Confirmar" />
                    <Button onClick={() => setShowModal(false)} buttonText="Cancelar" />
                </div>
            </ReactModal>
            )}
            
        </MainFrame>
    );
}
