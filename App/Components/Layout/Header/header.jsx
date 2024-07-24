import React from "react";
import UserBoxHeader from "../../Common/Box/UserBoxHeader.jsx";
import { MdExitToApp } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogoWhite from "../../Common/Logo/LogoWhite.jsx";
import MediaQuery from "react-responsive";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

export default function Header({ className }) {
  return (
    <header className="navbar bg-primary p-2 text-base-100">
      <div className="navbar-start rounded-r-2xl relative">
        <Link to={"/Home"} className="btn btn-ghost">
          <IoArrowBack size={25} />
        </Link>
      </div>
      <div className="navbar-center rounded-r-2xl relative">
        <Link to={"/Home"}>
          <LogoWhite width={100} height={20} />
        </Link>
      </div>
      <div className="navbar-end gap-1">
        <MediaQuery minWidth={1024}>
          <div>
            <UserBoxHeader />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <div>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <label htmlFor="my-drawer" className="btn border-0 py-2 bg-secondary bg-opacity-30 text-white rounded-lg hover:bg-black hover:bg-opacity-10">
                <IoReorderThreeSharp size={20} />
              </label>
              <div className="drawer-side" style={{zIndex:1}}>
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-200 text-base-content min-h-full w-60 p-4 flex flex-col justify-between">
                  <div>
                    <div>
                      <ul>
                        <li>
                          <Link to={"/Home"}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/ListaAlunos"}>Lista de Alunos</Link>
                        </li>
                        <li>
                          <Link to={"/Professor"}>Professor</Link>
                        </li>
                        <li>
                          <Link to={"/Regionais"}>Regionais</Link>
                        </li>
                        <li>
                          <Link to={"/Cadastros"}>Cadastros</Link>
                        </li>
                      </ul>
                    </div>                   
                  </div>
                  <div>
                    <ul>
                      <Link to={"/"}>
                        <li className=" bg-primary text-base-100 rounded-lg">
                            <label className="flex justify-center gap-2 hover:bg-primaryHover"> Sair <MdExitToApp size={20}/></label>
                        </li>
                      </Link>
                    </ul>
                  </div>                 
                </div>
              </div>
          </div>
        </MediaQuery>      
        <Link to={"/EmDesenvolvimento"}> 
          <button className="btn border-0 py-2 bg-secondary bg-opacity-30 text-white rounded-lg hover:bg-black hover:bg-opacity-10">
            <IoIosSettings size={20} />
          </button>
        </Link>
        <Link to={"/"}>
          <button  className="btn border-0 py-2 bg-secondary bg-opacity-30 text-white rounded-lg hover:bg-black hover:bg-opacity-10">
            <MdExitToApp size={20} />
          </button>
        </Link>
      </div>
    </header>
  );
}
